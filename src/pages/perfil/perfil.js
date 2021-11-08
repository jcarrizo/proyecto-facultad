import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'
import "./perfil.css"


const Perfil = () => {

  const [datos, setDatos] = useState([]);
  let usuarioId = localStorage.getItem("dataD")


  useEffect(() => {
    db.collection("users").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });
  }, [])

  const imagenSubir = () => {
    let Imagen = document.getElementById("formImagen").files;

    var file = Imagen[0];
    var reader = new FileReader();
    reader.onload = function () {

      let _data = {
        fotoUser: reader.result,
      }

      const resp = db.collection("users").doc(usuarioId).update(_data)
      localStorage.setItem('fotoUser', reader.result);
      toast("Se cargo la imagen correctamente", {
        type: 'success', autoClose: 2000
      })
    }
    reader.readAsDataURL(file);


  }

  const onSubmit = () => {

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let profesion = document.getElementById("profesion").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let dni = document.getElementById("dni").value


    const profileEdit = {
      nombre: nombre,
      apellido: apellido,
      profesion: profesion,
      email: email,
      telefono: telefono,
      direccion: direccion,
      dni: dni,
    };

    const resp = db.collection("users").doc(usuarioId).update(profileEdit)
    localStorage.setItem('emailUser', email)
    localStorage.setItem('nameUser', nombre)

    toast("Se editó el perfil correctamente", {
      type: 'success', autoClose: 2000
    })

  }


  const CargarImagen = (urlimagen) => {
    var image = new Image()
    image.src = urlimagen;
    if (urlimagen != "" && urlimagen != undefined) {
      return (
        <img src={image.src} alt="Admin" id="fotoUser" className="rounded-circle" width="150" height="150"></img>
      )
    }
    else {
      return (
        <img src="https://www.dermacity.com.mx/wp-content/uploads/doctor_homme_coth.png" alt="Admin" id="fotoUser" className="rounded-circle" width="150"></img>
      )
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>

        <div className="col-md-10" >
          {
            datos.map(datoss => {

              var IdUser = localStorage.getItem('dataD');

              if (datoss.id === IdUser) {

                return (<div className="container mt-5">
                  <h2 className="tituloPerfil text-muted">Perfil</h2>
                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="card shadow">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center">
                            {CargarImagen(datoss.fotoUser)}
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
                      <div className="card shadow mb-3">
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
                              <h6 className="mb-0">Direccion</h6>
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
                        </div>
                        <div className="modal-body">

                          <form className="text-grey" >
                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el nombre" id="nombre"
                                name="nombre" defaultValue={datoss.nombre} maxlength="30"
                                required></input>
                              <label>Nombre</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el apellido" id="apellido"
                                name="apellido" defaultValue={datoss.apellido} maxlength="30" required></input>
                              <label>Apellido</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="email" className="form-control" placeholder="Ingrese el email" id="profesion"
                                name="profesion" defaultValue={datoss.profesion} maxlength="30" required></input>
                              <label>Profesion</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="email" className="form-control" placeholder="Ingrese el email" id="email"
                                name="email" defaultValue={datoss.email} maxlength="30" required></input>
                              <label>Email</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="tel" className="form-control" placeholder="Ingrese el teléfono" id="telefono"
                                name="telefono" defaultValue={datoss.telefono} maxlength="30" required></input>
                              <label>Teléfono</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="text" className="form-control" placeholder="Ingrese el dirección" id="direccion"
                                name="direccion" defaultValue={datoss.direccion} maxlength="30" required></input>
                              <label>Dirección</label>
                            </div>

                            <div className="mb-3 form-floating">
                              <input type="number" className="form-control" placeholder="Ingrese el dirección" id="dni"
                                name="dni" defaultValue={datoss.dni} min="1" max="99999999999" required></input>
                              <label>DNI</label>
                            </div>

                            <div className="modal-footer">
                              <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onSubmit()}>Editar Paciente</button>
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

                          <form className="text-grey" >
                            <div class="mb-3">
                              <label for="formFile" class="form-label">Selecciona la Imagen</label>
                              <input class="form-control" type="file" id="formImagen" accept="image/png, image/jpeg"></input>
                            </div>
                            <div className="modal-footer">
                              <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => imagenSubir()}>Aceptar</button>
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