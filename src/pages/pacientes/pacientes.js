import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import "./pacientes.css"
import { useForm } from "react-hook-form";


const Pacientes = () => {

  const [datos, setDatos] = useState([]);
  const { register, watch } = useForm();
  const watchShowPacient = watch("paciente");


  useEffect(() => {
    db.collection("pacientes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });


      docs.map(infopacientes => {
        if (infopacientes.nombre === watchShowPacient || infopacientes.email === watchShowPacient || infopacientes.dni === watchShowPacient || infopacientes.obrasocial === watchShowPacient) {

          let frutas = []
          let algo;
          setDatos(infopacientes);

        }
        else {
          setDatos(docs)
        }
      })
    });
  }, [watchShowPacient])

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        <div className="col-10 " >
          <div className="container mt-5">
            <h2 className="tituloPerfil">Pacientes</h2>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3 row d-flex align-items-end ">
                      <div className="col-11">
                        <label for="textPaciente" className="form-label">Buscar Pacientes</label>
                        <input type="text" className="form-control" id="textPaciente" {...register("paciente")}></input>
                      </div>
                      <div className="col-1">
                        <button type="button" className="btn btn-primary" title="Agregar Paciente" data-bs-toggle="modal" data-bs-target="#agregarPaciente"><b>+</b></button>
                      </div>

                    </form>
                    <div className="d-flex flex-column align-items-center text-center">
                      <table className="table">
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
                          {
                            datos.map(datoss => {
                              return (<tr>
                                <td>{datoss.nombre + " " + datoss.apellido}</td>
                                <td>{datoss.dni}</td>
                                <td>{datoss.email}</td>
                                <td>{datoss.telefono}</td>
                                <td>{datoss.obrasocial}</td>
                              </tr>)
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
        </div>
      </div>

      {/* MODAL EDITAR PERFIL */}
      <div className="modal fade" id="agregarPaciente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Crear Paciente</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="text-grey">
                <div className="mb-3 form-floating">
                  <input type="text" className="form-control" placeholder="Ingrese el nombre" required></input>
                  <label>Nombre</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="text" className="form-control" placeholder="Ingrese el apellido" required></input>
                  <label>Apellido</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="email" className="form-control" placeholder="Ingrese el email" required></input>
                  <label>Email</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="tel" className="form-control" placeholder="Ingrese el teléfono" required></input>
                  <label>Teléfono</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="tel" className="form-control" placeholder="Ingrese el domicilio" required></input>
                  <label>Domicilio</label>
                </div>

                <div className="mb-3 form-floating">
                  <input type="number" className="form-control" placeholder="Ingrese el teléfono" required></input>
                  <label>DNI</label>
                </div>

                <div className="modal-footer">
                  <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" className="btn btn-primary">Agregar Paciente</button>
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