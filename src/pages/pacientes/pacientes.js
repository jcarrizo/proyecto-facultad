import React, { useState, useEffect } from "react";
import SideBar from "../../components/side-bar/SideBar";
import { db } from "../../DB/firebase";
import "./pacientes.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Pacientes = () => {
  const [datos, setDatos] = useState([]);
  const { register, watch, handleSubmit } = useForm();
  const [paciente, setPaciente] = useState([]);
  let rolUsuario = localStorage.getItem("rolUser");
  let IdUsuario = localStorage.getItem("dataD");

  useEffect(() => {
    db.collection("pacientes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });
  }, [])

  // const onSubmit = (data) => {

  //   const newPatient = {
  //     nombre: data.nombre,
  //     apellido: data.apellido,
  //     email: data.email,
  //     telefono: data.telefono,
  //     direccion: data.direccion,
  //     dni: data.dni,
  //     obrasocial: data.obrasocial,
  //     eliminado: false,
  //     profesionalId: localStorage.getItem("dataD"),
  //   };

  //   db.collection("pacientes").doc().set(newPatient);

  //   toast("Se creó el paciente correctamente", {
  //     type: "success",
  //     autoClose: 2000,
  //   });
  // };


  // const eliminarPaciente = () => {
  //   if (window.confirm("¿Está seguro que desea eliminar el paciente?")) {
  //     const profileEdit = {
  //       eliminado: true,
  //     };

  //     const resp = db
  //       .collection("pacientes")
  //       .doc(paciente.id)
  //       .update(profileEdit);
  //     toast("Se eliminó el paciente correctamente", {
  //       type: "success",
  //       autoClose: 2000,
  //     });
  //   }
  // };


  return (
    <div>
      <div className="row">
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        <div className="col-5">
          <div className="container mt-5">
            <h2 className="tituloPerfil">Pacientes</h2>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3 row d-flex align-items-end ">
                      <div className="col-11">
                        <label for="textPaciente" className="form-label">
                          Buscar Pacientes
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="textPaciente"
                        ></input>
                      </div>
                      <div className="col-1">
                        <button
                          type="button"
                          className="btn btn-primary"
                          title="Agregar Paciente"
                          data-bs-toggle="modal"
                          data-bs-target="#agregarPaciente"
                        >
                          <b>Buscar</b>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          title="Agregar Paciente"
                          data-bs-toggle="modal"
                          data-bs-target="#agregarPaciente"
                        >
                          <b>Agregar Paciente</b>
                        </button>
                      </div>
                    </form>
                    <div className="d-flex flex-column align-items-center text-center">
                      <table className="table table-hover pointer">
                        <thead>
                          <tr>
                            <th scope="col">Pacientes</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Obra Social</th>
                          </tr>
                        </thead>
                        <tbody>
                          {datos.map((datos2) => {
                            return (
                              <tr onClick={() => setPaciente(datos2)}>
                                <td>
                                  {datos2.nombre + " " + datos2.apellido}
                                </td>
                                <td>{datos2.dni}</td>
                                <td>{datos2.email}</td>
                                <td>{datos2.telefono}</td>
                                <td>{datos2.obrasocial}</td>
                              </tr>
                            );
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


        {/*Seleccionable*/}
        <div className="col-5 mt-5 container">
          <h2 className="tituloPerfil text-center ml-4">Paciente seleccionado</h2>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="Admin" className="rounded-circle" width="150"></img>
                    <div className="mt-3 ">
                      <h4>{paciente.nombre + " " + paciente.apellido}</h4>
                      <p className="text-secondary mb-1">{paciente.profesion}</p>
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
                      {paciente.nombre}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Apellido</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {paciente.apellido}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {paciente.email}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Teléfono</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {paciente.telefono}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Domicilio</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {paciente.direccion}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">DNI</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {paciente.dni}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-12">
                      <button className="btn btn-warning" href="" data-bs-toggle="modal" data-bs-target="#editarPaciente">Editar</button>
                      <button className="btn btn-danger ml-5" href="" >Eliminar</button>
                    </div>
                  </div>

                </div>

              </div>

            </div>


          </div>
          {/* MODAL EDITAR PERFIL */}
          <div className="modal fade" id="editarPaciente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Editar Paciente</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                  <form className="text-grey">
                    <div className="mb-3 form-floating">
                      <input type="text" className="form-control" placeholder="Ingrese el nombre" defaultValue={paciente.nombre} {...register("nombre")}
                        required></input>
                      <label>Nombre</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input type="text" className="form-control" placeholder="Ingrese el apellido" defaultValue={paciente.apellido} {...register("apellido")} required></input>
                      <label>Apellido</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input type="email" className="form-control" placeholder="Ingrese el email" defaultValue={paciente.email} {...register("email")} required></input>
                      <label>Email</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input type="tel" className="form-control" placeholder="Ingrese el teléfono" defaultValue={paciente.telefono} {...register("telefono")} required></input>
                      <label>Teléfono</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input type="text" className="form-control" placeholder="Ingrese el dirección" defaultValue={paciente.direccion} {...register("direccion")} required></input>
                      <label>Dirección</label>
                    </div>

                    <div className="mb-3 form-floating">
                      <input type="number" className="form-control" placeholder="Ingrese el dirección" defaultValue={paciente.dni} {...register("dni")} required></input>
                      <label>DNI</label>
                    </div>

                    <div className="modal-footer">
                      <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Editar Paciente</button>
                    </div>

                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>



      </div>

      {/* MODAL AGREGAR PACIENTE */}
      <div
        className="modal fade"
        id="agregarPaciente"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agregar Paciente
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="text-grey" >
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el nombre"
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
                    {...register("telefono")}
                    required
                  ></input>
                  <label>Teléfono</label>
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Ingrese la dirección"
                    {...register("direccion")}
                    required
                  ></input>
                  <label>Dirección</label>
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese la Obra Social"
                    {...register("obrasocial")}
                    required
                  ></input>
                  <label>Obra Social</label>
                </div>

                <div className="mb-3 form-floating">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ingrese el DNI"
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
                    Agregar Paciente
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
