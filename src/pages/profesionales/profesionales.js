import React, { useEffect, useState } from "react";
import SideBar from "../../components/side-bar/SideBar";
import { db } from "../../DB/firebase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./profesionales.css";

const Profesionales = () => {
  const [datos, setDatos] = useState([]);
  const [profesional, setProfesional] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const profileEdit = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      direccion: data.direccion,
      dni: data.dni,
    };

    const resp = db.collection("users").doc(datos[0].id).update(profileEdit);
    toast("Se editó el perfil correctamente", {
      type: "success",
      autoClose: 2000,
    });
  };


  const eliminarProfesional = () => {
    if (window.confirm("¿Está seguro que desea eliminar el profesional?")) {
      const profileEdit = {
        eliminado: true,
      };

      const resp = db
        .collection("users")
        .doc(profesional.id)
        .update(profileEdit);
      toast("Se eliminó el perfil correctamente", {
        type: "success",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    db.collection("users").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>

        {/*                                                             Lista de profesionales                                   */}
        <div className="col-md-5">
          <div className="container mt-5">
            <h2 className="tituloPerfil">Profesionales</h2>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3 row d-flex align-items-end "></form>
                    <div className="d-flex flex-column align-items-center text-center horizontal-scroll">
                      <table className="table table-hover pointer my-table">
                        <thead>
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Profesión</th>
                          </tr>
                        </thead>
                        <tbody>
                          {datos.map((datoss) => {
                            if (datoss.eliminado === false) {
                              return (
                                <tr onClick={() => setProfesional(datoss)}>
                                  <td>
                                    {datoss.nombre + " " + datoss.apellido}
                                  </td>
                                  <td>{datoss.email}</td>
                                  <td>{datoss.telefono}</td>
                                  <td>{datoss.profesion}</td>
                                </tr>
                              );
                            }
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*                                                      Seleccionable                       */}
        <div className="col-md-5 mt-5 container">
          <h2 className="tituloPerfil text-center ml-4">Perfil seleccionado</h2>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    ></img>
                    <div className="mt-3 ">
                      <h4>{profesional.nombre + " " + profesional.apellido}</h4>
                      <p className="text-secondary mb-1">
                        {profesional.profesion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Nombre</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profesional.nombre}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Apellido</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profesional.apellido}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profesional.email}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Teléfono</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profesional.telefono}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Domicilio</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profesional.direccion}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">DNI</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profesional.dni}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-12">
                      <button
                        className="btn btn-warning"
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#editarPerfil"
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger ml-5"
                        href=""
                        onClick={() => eliminarProfesional()}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MODAL EDITAR PERFIL */}
          <div
            className="modal fade"
            id="editarPerfil"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Editar Perfil
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="text-grey" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre"
                        defaultValue={profesional.nombre}
                        {...register("nombre")}
                        required
                      ></input>
                      <label>Nombre</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el apellido"
                        defaultValue={profesional.apellido}
                        {...register("apellido")}
                        required
                      ></input>
                      <label>Apellido</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Ingrese el email"
                        defaultValue={profesional.email}
                        {...register("email")}
                        required
                      ></input>
                      <label>Email</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Ingrese el teléfono"
                        defaultValue={profesional.telefono}
                        {...register("telefono")}
                        required
                      ></input>
                      <label>Teléfono</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el dirección"
                        defaultValue={profesional.direccion}
                        {...register("direccion")}
                        required
                      ></input>
                      <label>Dirección</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el dirección"
                        defaultValue={profesional.dni}
                        {...register("dni")}
                        required
                      ></input>
                      <label>DNI</label>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="reset"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Editar Paciente
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profesionales;
