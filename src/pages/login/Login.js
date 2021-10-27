import React, { useState } from 'react'
import './login.css'
import img from '../../images/login.jpg'
import { useForm } from "react-hook-form";
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'

const Login = () => {

  const { register, handleSubmit } = useForm();
  const [datos, setDatos] = useState([]);

  db.collection("users").onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setDatos(docs);
  });

  const onSubmit = data => {

    let flag = false;

    datos.map(datoss => {

      console.log(datoss)

      if (datoss.email === data.email && datoss.password === data.password) {

        flag = true;
        localStorage.setItem('emailUser', datoss.email);
        localStorage.setItem('dataD', datoss.id);
        localStorage.setItem('nameUser', datoss.nombre);
        localStorage.setItem('rolUser', datoss.rol);

        window.location = "/"

      }
    })

    if (flag === false) {
      toast('El usuario ingresado NO correcto', { type: 'error', autoClose: 3000 })
    }



  };

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={img} alt="login" className="login-card-img"></img>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <a href="index.html"><img src="Images/logo.svg" alt="First Job" className="logo"></img></a>
                </div>
                <p className="login-card-description">Loguearse</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control"
                      placeholder="Email" {...register("email")} required></input>
                  </div>
                  <div className="form-group mb-4">
                    <input type="password" name="password" className="form-control"
                      placeholder="Contraseña" {...register("password")} required></input>
                  </div>

                  <input className="btn btn-block login-btn mb-4" type="submit"
                    value="Ingresar"></input>
                  <a href="/Signup">No tienes cuenta? Registrate!</a>
                </form>

                <nav className="login-card-footer-nav mt-3">
                  <a href="#!">Términos y condiciones.</a>
                  <a href="#!">Política de pivadidad</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;