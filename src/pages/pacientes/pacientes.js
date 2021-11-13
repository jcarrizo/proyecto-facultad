import React, { useState, useEffect } from "react";
import SideBar from "../../components/side-bar/SideBar";
import { db } from "../../DB/firebase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./pacientes.css";
import * as XLSX from 'xlsx';


const Pacientes = () => {
  const [datos, setDatos] = useState([]);
  const [BuscarPacientedato, setBuscarPaciente] = useState();
  const [datosTurnos, setDatosTurnos] = useState([]);
  const { register, reset, handleSubmit } = useForm();
  const [paciente, setPaciente] = useState([]);
  let rolUsuario = localStorage.getItem("rolUser");
  let IdUsuario = localStorage.getItem("dataD");
  let datoVacio = [];
  let wb;

  useEffect(() => {
    db.collection("pacientes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });


    db.collection("turnos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatosTurnos(docs);
    });
  }, [])


  const onSubmit = (data) => {

    const newPatient = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      direccion: data.direccion,
      dni: data.dni,
      obrasocial: data.obrasocial,
      eliminado: false,
      profesionalId: localStorage.getItem("dataD"),
    };



    db.collection("pacientes").doc().set(newPatient);
    setPaciente(datoVacio);

    toast("Se creó el paciente correctamente", {
      type: "success",
      autoClose: 2000,
    });
  };

  const profileEditar = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    dni: "",
  };

  const onSubmitEditar = () => {

    let idSeleccionadoPaciente = paciente.id;

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let dni = document.getElementById("dni").value

    const profileEditar = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      direccion: direccion,
      dni: dni,
    };

    const resp = db.collection("pacientes").doc(idSeleccionadoPaciente).update(profileEditar);
    toast("Se editó el perfil correctamente", {
      type: "success",
      autoClose: 2000,
    });
  };


  const eliminarPaciente = () => {
    if (window.confirm("¿Está seguro que desea eliminar el paciente?")) {
      const profileEdit = {
        eliminado: true,
      };

      const resp = db
        .collection("pacientes")
        .doc(paciente.id)
        .update(profileEdit);
      toast("Se eliminó el paciente correctamente", {
        type: "success",
        autoClose: 2000,
      });
    }
  };


  const buttoneditar = () => {

    if (paciente.id !== undefined) {
      return (<div>
        <button className="btn btn-warning" href="" data-bs-toggle="modal" data-bs-target="#editarPaciente" >Editar</button>
        <button className="btn btn-danger ml-5" href="" onClick={() => { eliminarPaciente() }}>Eliminar</button>
      </div>
      )
    }
    else {
      return (<div>
        <button className="btn btn-warning" href="" data-bs-toggle="modal" data-bs-target="#editarPaciente" disabled>Editar</button>
        <button className="btn btn-danger ml-5" href="" onClick={() => { eliminarPaciente() }} disabled>Eliminar</button>
      </div>)
    }

  }

  const limpiar = () => {
    document.getElementById("textPaciente").value = "";
    setBuscarPaciente("");
  }

  const habilitarbutton = () => { //TODO: eliminar?
    const button = document.getElementById('buttoneliminar')
    button.disabled = false;
  }

  const eliminarTurno = (data) => {
    console.log(data)
    if (window.confirm("¿Está seguro que desea eliminar el turno?")) {
      const turnoEdit = {
        eliminado: true,
      };

      const resp = db
        .collection("turnos")
        .doc(data)
        .update(turnoEdit);
      toast("Se eliminó el turno correctamente", {
        type: "success",
        autoClose: 2000,
      });
    }
  };

  const exportExcel = () => {
    wb = XLSX.utils.book_new();

    const array = [[
      "Paciente", "DNI", "Email", "Teléfono", "Obra Social"
    ]]


    for (const paciente of datos) {
      array.push([
        paciente.nombre + " " + paciente.apellido,
        paciente.dni,
        paciente.email,
        paciente.telefono,
        paciente.obrasocial
      ])
    }


    const ws = XLSX.utils.aoa_to_sheet(array);

    XLSX.utils.book_append_sheet(wb, ws, 'Informe');

    /**  save to file */
    XLSX.writeFile(wb, "pacientes.xlsx");
  }



  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>

        <div className="col-md-5">
          <div className="container mt-5">
            <div className="row">
              <h2 className="tituloPerfil col-3 mt-1 text-muted">Pacientes</h2>

              <div className="col-2 responsive">
                <i className="btn btn-primary plus bi bi-person-plus-fill pointer" data-toggle="tooltip" data-placement="right" data-bs-toggle="modal"
                  data-bs-target="#agregarPaciente" title="Nuevo Paciente" />
              </div>

              <div className="col text-left responsive">
                <button type="button" className="btn btn-success responsive-buscar" onClick={() => exportExcel()}>Exportar a Excel</button>
              </div>

            </div>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 ancho">
                <div className="card shadow">
                  <div className="card-body">
                    <form className="mb-3 row d-flex align-items-end ">
                      <div className="col-8">
                        <label for="textPaciente" className="form-label">
                          Buscar Pacientes
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="textPaciente"
                        ></input>
                      </div>
                      <div className="col-2">
                        <button className="btn btn-secondary responsive-buscar" onClick={() => limpiar()}>Limpiar</button>
                      </div>
                      <div className="col-2">
                        <button
                          type="button"
                          className="btn btn-primary responsive-buscar" onClick={() => setBuscarPaciente(document.getElementById("textPaciente").value)}>
                          <b>Buscar</b>
                        </button>
                      </div>
                    </form>
                    <div className="d-flex flex-column align-items-center text-center horizontal-scroll">
                      <table className="table table-hover pointer my-table">
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
                            if (datos2.eliminado === false) {
                              if (datos2.nombre === BuscarPacientedato || datos2.apellido === BuscarPacientedato || datos2.dni === BuscarPacientedato || datos2.email === BuscarPacientedato) {
                                return (
                                  <tr onClick={() => { setPaciente(datos2) }}>
                                    <td>
                                      {datos2.nombre + " " + datos2.apellido}
                                    </td>
                                    <td>{datos2.dni}</td>
                                    <td>{datos2.email}</td>
                                    <td>{datos2.telefono}</td>
                                    <td>{datos2.obrasocial}</td>
                                  </tr>
                                );
                              }
                              if (BuscarPacientedato === undefined || BuscarPacientedato === "") {
                                return (
                                  <tr onClick={() => { setPaciente(datos2) }}>
                                    <td>
                                      {datos2.nombre + " " + datos2.apellido}
                                    </td>
                                    <td>{datos2.dni}</td>
                                    <td>{datos2.email}</td>
                                    <td>{datos2.telefono}</td>
                                    <td>{datos2.obrasocial}</td>
                                  </tr>
                                );
                              }
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


          <h2 className="tituloPerfil text-left text-muted margin container">Turnos del Paciente seleccionado</h2>
          <div className="row gutters-sm container">
            <div className="col-md-12">
              <div className="card shadow mb-5">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center horizontal-scroll">
                    <table className="table table-hover pointer my-table">
                      <thead>
                        <tr>
                          <th scope="col">Fecha</th>
                          <th scope="col">Profesional</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          datosTurnos.map((turnos) => {
                            if (paciente.id === turnos.pacienteId && turnos.eliminado !== true && (rolUsuario === "2" || rolUsuario === "3")) {
                              var date = new Date(turnos.start)
                              return (
                                <tr>
                                  <td>
                                    {date.toLocaleString()}
                                  </td>
                                  <td>{turnos.medicoNombre}</td>
                                  <button className="btn btn-danger ml-5 chico d-flex justify-content-center" id="buttoneliminar" onClick={() => { eliminarTurno(turnos.id) }}>Eliminar</button>
                                </tr>
                              );
                            }
                            if (paciente.id === turnos.pacienteId && turnos.eliminado !== true && (rolUsuario === "1") && turnos.profesionalId === IdUsuario) {
                              var date = new Date(turnos.start)
                              return (
                                <tr>
                                  <td>
                                    {date.toLocaleString()}
                                  </td>
                                  <td>{turnos.medicoNombre}</td>
                                  <button className="btn btn-danger ml-5" id="buttoneliminar" onClick={() => { eliminarTurno(turnos.id) }} >Eliminar</button>
                                </tr>
                              );
                            }
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*Paciente Seleccionado*/}
        <div className="col-md-5 mt-5 container ">
          <h2 className="tituloPerfil text-left text-muted">Paciente seleccionado</h2>
          <div className="row gutters-sm">
            <div className="col-md-12">
              <div className="card shadow mb-5">
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
                      <h6 className="mb-0">Direccion</h6>
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
                      {buttoneditar()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL EDITAR PERFIL */}
      <div className="modal fade" id="editarPaciente" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Editar Paciente</h5>
            </div>
            <div className="modal-body">

              <form className="text-grey">
                <div className="mb-3 form-floating">
                  <input type="text" className="form-control" placeholder="Ingrese el nombre" defaultValue={paciente.nombre} id="nombre"
                    name="nombre" maxlength="30"
                    required></input>
                  <label>Nombre</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="text" className="form-control" placeholder="Ingrese el apellido" defaultValue={paciente.apellido} id="apellido"
                    name="apellido" maxlength="30" required></input>
                  <label>Apellido</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="email" className="form-control" placeholder="Ingrese el email" defaultValue={paciente.email} id="email"
                    name="email" maxlength="30" required></input>
                  <label>Email</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="tel" className="form-control" placeholder="Ingrese el teléfono" defaultValue={paciente.telefono} id="telefono"
                    name="telefono" maxlength="30" required></input>
                  <label>Teléfono</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="text" className="form-control" placeholder="Ingrese el dirección" defaultValue={paciente.direccion} id="direccion"
                    name="direccion" maxlength="30" required></input>
                  <label>Dirección</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="number" className="form-control" placeholder="Ingrese el dni" defaultValue={paciente.dni} id="dni"
                    name="dni" min="1" max="99999999999" required></input>
                  <label>DNI</label>
                </div>

                <div className="modal-footer">
                  <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onSubmitEditar()}>Editar Paciente</button>
                </div>

              </form>
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

            </div>
            <div className="modal-body">
              <form className="text-grey" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el nombre"
                    {...register("nombre")}
                    maxlength="30"
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
                    maxlength="30"
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
                    maxlength="30"
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
                    maxlength="30"
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
                    maxlength="30"
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
                    maxlength="30"
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
                    min="1" max="99999999999"
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
