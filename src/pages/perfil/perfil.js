import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
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

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    const profileEdit = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      direccion: data.direccion,
    }

    const resp = db.collection("users").doc(datos[0].id).update(profileEdit)
    localStorage.setItem('emailUser', data.email)
    localStorage.setItem('nameUser', data.nombre)

    toast("Se editó el perfil correctamente", {
      type: 'success', autoClose: 2000
    })

  }

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        <div className="col-10" >
          {
            datos.map(datoss => {

              var IdUser = localStorage.getItem('dataD');

              if (datoss.id === IdUser) {

                return (<div className="container mt-5">
                  <h2 className="tituloPerfil">Perfil</h2>
                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="Admin" className="rounded-circle" width="150"></img>
                            <div className="mt-3 ">
                              <h4>{datoss.nombre + " " + datoss.apellido}</h4>
                              <p className="text-secondary mb-1">{datoss.profesion}</p>

                              <div className="mt-4">
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarFoto">Reemplazar Foto</button>
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
                            <div className="col-sm-3">
                              <h6 className="mb-0">DNI</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {datoss.dni}
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

                          <form className="text-grey" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el nombre" defaultValue={datoss.nombre} {...register("nombre")}
                                required></input>
                              <label>Nombre</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el apellido" defaultValue={datoss.apellido} {...register("apellido")} required></input>
                              <label>Apellido</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="email" className="form-control" placeholder="Ingrese el email" defaultValue={datoss.email} {...register("email")} required></input>
                              <label>Email</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="tel" className="form-control" placeholder="Ingrese el teléfono" defaultValue={datoss.telefono} {...register("telefono")} required></input>
                              <label>Teléfono</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el dirección" defaultValue={datoss.direccion} {...register("direccion")} required></input>
                              <label>Dirección</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="number" className="form-control" placeholder="Ingrese el dirección" defaultValue={datoss.dni} {...register("direccion")} required></input>
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

                  {/* MODAL EDITAR FOTO */}
                  <div className="modal fade" id="editarFoto" tabindex="-1" aria-labelledby="ModalFOTO" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ModalFOTO">Reemplazar Foto</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                          <form className="text-grey" onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                              <label for="formFile" class="form-label">Selecciona la Imagen</label>
                              <input class="form-control" type="file" id="formFile"></input>
                            </div>
                            <div className="modal-footer">
                              <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
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