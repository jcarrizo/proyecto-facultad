import React, { useState } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";
import "./pacientes.css"


const Pacientes = () => {

  const [datos, setDatos] = useState([]);

  db.collection("users").onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setDatos(docs);
  });

  datos.map(datoss => {

    console.log(datoss)

  })





  return (
    <div>
      <div className="row">
        <div className="col-2">
          <SideBar></SideBar>
        </div>

        <div classNameName="col-10" >
          <div className="container mt-5">
            <h2 className="tituloPerfil">Pacientes</h2>
          </div>

        </div>
      </div></div>

  )
}

export default Pacientes;