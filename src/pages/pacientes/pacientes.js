import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import "./pacientes.css"


const Pacientes = () => {

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


  datos.map(datoss => {

    console.log(datoss)

  })





  return (
    <div>
      <div className="row">
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        <div classNameName="col-10 " >
          <div className="container mt-5">
            <h2 className="tituloPerfil ">Pacientes</h2>
            <div className="row gutters-sm  ">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <div class="mb-3 row d-flex align-items-end ">
                      <div className="col-11">
                        <label for="exampleInputEmail1" class="form-label">Buscar Pacientes</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                      </div>
                      <div className="col-1">
                        <button type="submit" class="btn btn-primary">Buscar</button>
                      </div>

                    </div>
                    <div className="d-flex flex-column align-items-center text-center">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>

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