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

              var cat = localStorage.getItem('userSeccion');

              console.log(datoss)

              if (datoss.user === cat) {

                return (<div className="container mt-5">
                  <h2 className="tituloPerfil">Perfil</h2>
                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                            <div className="mt-3 ">
                              <h4>{datoss.user}</h4>
                              <p className="text-secondary mb-1">Profesion</p>

                              <div className="mt-4">
                                <button class="btn btn-primary">Remplazar Foto</button>
                                <button class="btn btn-outline-primary">Cambiar Contraseña</button></div>


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
                              <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Kenneth Valdez
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.email}
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Usuario</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.user}
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Phone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              (320) 380-4539
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Address</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              Bay Area, San Francisco, CA
                            </div>
                          </div>
                          <hr></hr>
                          <div className="row">
                            <div className="col-sm-12">
                              <a className="btn btn-warning " href="">Edit</a>
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