import React, { useState } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import { db } from "../../DB/firebase";


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
          <h1>Pacientes</h1>
        </div>
      </div>
    </div>)
}

export default Pacientes;