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

        <div classNameName="col-10" >
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
                                <button class="btn btn-primary">Reemplazar Foto</button>
                                <br></br>
                                <button class="btn btn-outline-danger mt-4">Cambiar Contraseña</button></div>


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
                              <a className="btn btn-warning " href="">Editar</a>
                            </div>
                          </div>
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