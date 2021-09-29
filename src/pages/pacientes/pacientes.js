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

        <div classNameName="col-10 " >
          <div className="container mt-5">
            <h2 className="tituloPerfil ">Pacientes</h2>
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3 tabla">
                <div className="card">
                  <div className="card-body">
                    <form class="mb-3 row d-flex align-items-end ">
                      <div className="col-11">
                        <label for="textPaciente" class="form-label">Buscar Pacientes</label>
                        <input type="text" class="form-control" id="textPaciente" {...register("paciente")}></input>
                      </div>
                      <div className="col-1">
                        <button type="submit" class="btn btn-primary" title="Agregar Paciente"><b>+</b></button>
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
      </div></div>

  )
}

export default Pacientes;