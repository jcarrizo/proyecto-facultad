import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import "./pacientes.css"


const Pacientes = () => {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    db.collection("pacientes").onSnapshot((querySnapshot) => {
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

        <div classNameName="col-10 " >
          <div className="container mt-5">
            <h2 className="tituloPerfil ">Pacientes</h2>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <div class="mb-3 row d-flex align-items-end ">
                      <div className="col-11">
                        <label for="exampleInputEmail1" class="form-label">Buscar Pacientes</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                      </div>
                      <div className="col-1">
                        <button type="submit" class="btn btn-primary"><h5>+</h5></button>
                      </div>

                    </div>
                    <div className="d-flex flex-column align-items-center text-center">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Pacientes</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Obra Social</th>
                          </tr>
                        </thead>
                        <tbody>
                          {datos.map(datoss => {

                            return (<tr>
                              <td>{datoss.nombre + " " + datoss.apellido}</td>
                              <td>{datoss.dni}</td>
                              <td>{datoss.email}</td>
                              <td>{datoss.telefono}</td>
                              <td>{datoss.obrasocial}</td>
                            </tr>)

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
      </div></div>

  )
}

export default Pacientes;