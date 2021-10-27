import React, { useEffect, useState } from "react";
import SideBar from "../../components/side-bar/SideBar";
import { db } from "../../DB/firebase";
import "./profesionales.css";

const Profesionales = () => {
  const [datos, setDatos] = useState([]);
  const [Profesional, setProfesional] = useState([]);



  const ProfesionalInfo = (datosProfesional) => {
    setProfesional(datosProfesional)
  }



  const checked = () => {

    if (Profesional.rol === "Secretaria") {
      return (
        <div className="ms-4 mt-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="0" ></input>
            <label class="form-check-label" for="flexRadioDefault2">
              Profesional de la Salud
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1" checked></input>
            <label class="form-check-label" for="flexRadioDefault1">
              Secretaria
            </label>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="ms-4 mt-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="0" checked></input>
            <label class="form-check-label" for="flexRadioDefault2">
              Profesional de la Salud
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1"></input>
            <label class="form-check-label" for="flexRadioDefault1">
              Secretaria
            </label>
          </div>
        </div>
      )
    }


  }

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
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        {/*                                                             Lista de profesionales                                   */}
        <div className="col-5">
          <div className="container mt-5">
            <h2 className="tituloPerfil">Profesionales</h2>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3 row d-flex align-items-end "></form>
                    <div className="d-flex flex-column align-items-center text-center">
                      <table className="table table-hover pointer">
                        <thead>
                          <tr >
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Profesion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {datos.map((datoss) => {
                            return (
                              <tr onClick={() => ProfesionalInfo(datoss)} >
                                <td >{datoss.nombre + " " + datoss.apellido}</td>
                                <td>{datoss.email}</td>
                                <td>{datoss.telefono}</td>
                                <td>{datoss.rol}</td>
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


        {/*                                                      Seleccionable                       */}
        <div className="col-5 mt-5 container">
          <h2 className="tituloPerfil">Perfil</h2>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="Admin" className="rounded-circle" width="150"></img>
                    <div className="mt-3 ">
                      <h4>{Profesional.nombre + " " + Profesional.apellido}</h4>
                      <p className="text-secondary mb-1">{Profesional.rol}</p>
                    </div>



                  </div>
                  {checked()}
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
                      {Profesional.nombre}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Apellido</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {Profesional.apellido}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {Profesional.email}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Teléfono</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {Profesional.telefono}
                    </div>
                  </div>
                  <hr className="mb-4"></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Domicilio</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {Profesional.direccion}
                    </div>
                  </div>

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
