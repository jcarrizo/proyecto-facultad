import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import "./pacientes.css"
import { useForm } from "react-hook-form";


const Pacientes = () => {

  const [datos, setDatos] = useState([]);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("paciente"));

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
                    <form class="mb-3 row d-flex align-items-end " onSubmit={handleSubmit(onSubmit)}>
                      <div className="col-11">
                        <label for="textPaciente" class="form-label">Buscar Pacientes</label>
                        <input type="text" class="form-control" id="textPaciente" {...register("paciente")}></input>
                      </div>
                      <div className="col-1">
                        <button type="submit" class="btn btn-primary" title="Agregar Paciente" data-bs-toggle="modal" data-bs-target="#exampleModal"><b>+</b></button>
                      </div>

                    </form>
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
      </div>

      {/* MODAL CREAR PACIENTE */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Crear Paciente</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="text-grey">
                <div class="mb-3 form-floating">
                  <input type="text" class="form-control" placeholder="Ingrese el nombre" required></input>
                  <label>Nombre</label>
                </div>

                <div class="mb-3 form-floating">
                  <input type="text" class="form-control" placeholder="Ingrese el apellido" required></input>
                  <label>Apellido</label>
                </div>

                <div class="mb-3 form-floating">
                  <input type="email" class="form-control" placeholder="Ingrese el email" required></input>
                  <label>Email</label>
                </div>

                <div class="mb-3 form-floating">
                  <input type="tel" class="form-control" placeholder="Ingrese el teléfono" required></input>
                  <label>Teléfono</label>
                </div>

                <div class="mb-3 form-floating">
                  <input type="number" class="form-control" placeholder="Ingrese el teléfono" required></input>
                  <label>DNI</label>
                </div>

                <div class="modal-footer">
                  <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-primary">Agregar Paciente</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>


    </div>

  )
}

export default Pacientes;