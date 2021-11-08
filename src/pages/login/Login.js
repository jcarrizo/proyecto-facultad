import React, { useState, useEffect } from 'react'
import '../login/login.css'
import imgLogin from '../../images/login.jpg'
import { useForm } from "react-hook-form";
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'

const Login = () => {

  const { register, handleSubmit } = useForm();
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
        localStorage.setItem('fotoUser', datoss.fotoUser);

        window.location = "#/perfil"

      }
    })

    if (flag === false) {
      toast('El usuario o la contraseña ingresada no es correcto', { type: 'error', autoClose: 3000 })
    }



  };

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card shadow login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={imgLogin} alt="login" className="login-card-img-login"></img>
            </div>
            <div className="col-md-7">
              <div className="card-body-login">

                <h3 className="login-card-description-login">Loguearse</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control"
                      placeholder="Email" {...register("email")} required></input>
                  </div>
                  <div className="form-group mb-4">
                    <input type="password" name="password" className="form-control"
                      placeholder="Contraseña" {...register("password")} required></input>
                  </div>

                  <input className="btn btn-block login-btn2 mb-4" type="submit"
                    value="Ingresar"></input>
                  <div className="row">
                    <a href="#/Signup" className="center">¿No tienes cuenta? Registrate!</a>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;