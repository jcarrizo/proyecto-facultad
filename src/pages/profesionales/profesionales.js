import React, { useEffect, useState } from "react";
import SideBar from "../../components/side-bar/SideBar";
import { db } from "../../DB/firebase";
import { useForm } from "react-hook-form";
import "./profesionales.css";

const Profesionales = () => {
  const [datos, setDatos] = useState([]);

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

        <div className="col-10 ">
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
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Profesion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {datos.map((datoss) => {
                            return (
                              <tr>
                                <td>{datoss.nombre + " " + datoss.apellido}</td>
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
      </div>
    </div>
  );
};
export default Profesionales;
