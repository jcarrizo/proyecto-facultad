import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'
import "./perfil.css"

const Perfil = () => {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });
  }, [])


  return (
    <div>
      <div className="row">
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        <div className="col-10" >
          {
            datos.map(datoss => {

              var emailUser = localStorage.getItem('emailUser');

              console.log(datoss)

              if (datoss.email === emailUser) {

                return (<div className="container mt-5">
                  <h2 className="tituloPerfil">Perfil</h2>
                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                            <div className="mt-3 ">
                              <h4>{datoss.nombre + " " + datoss.apellido}</h4>
                              <p className="text-secondary mb-1">Profesión</p>

                              <div className="mt-4">
                                <button className="btn btn-primary">Reemplazar Foto</button>
                                <br></br>
                                <button className="btn btn-outline-danger mt-4">Cambiar Contraseña</button>
                              </div>


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
                              {datoss.nombre}
                            </div>
                          </div>
                          <hr className="mb-4"></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Apellido</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.apellido}
                            </div>
                          </div>
                          <hr className="mb-4"></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.email}
                            </div>
                          </div>
                          <hr className="mb-4"></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Teléfono</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.telefono}
                            </div>
                          </div>
                          <hr className="mb-4"></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Domicilio</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.direccion}
                            </div>
                          </div>
                          <hr className="mb-4"></hr>
                          <div className="row">
                            <div className="col-sm-12">
                              <button className="btn btn-warning" href="" data-bs-toggle="modal" data-bs-target="#editarPerfil">Editar</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>



                  {/* MODAL EDITAR PERFIL */}
                  <div className="modal fade" id="editarPerfil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Editar Perfil</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form className="text-grey">
                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el nombre" value={datoss.nombre} required></input>
                              <label>Nombre</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el apellido" value={datoss.apellido} required></input>
                              <label>Apellido</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="email" className="form-control" placeholder="Ingrese el email" value={datoss.email} required></input>
                              <label>Email</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="tel" className="form-control" placeholder="Ingrese el teléfono" value={datoss.telefono} required></input>
                              <label>Teléfono</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el domicilio" value={datoss.direccion} required></input>
                              <label>Domicilio</label>
                            </div>

                            <div className="modal-footer">
                              <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                              <button type="submit" className="btn btn-primary">Editar Paciente</button>
                            </div>

                          </form>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>)
}

export default Perfil;