import React, { useState, useEffect } from 'react'
import '../login/login.css'
import imgLogin from '../../images/login.jpg'
import logoClinica from '../../images/bannerodonto.png'
import { useForm } from "react-hook-form";
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

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

      if ((datoss.email === data.email && datoss.password === data.password) && datoss.eliminado !== true) {

        flag = true;
        localStorage.setItem('emailUser', datoss.email);
        localStorage.setItem('dataD', datoss.id);
        localStorage.setItem('nameUser', datoss.nombre);
        localStorage.setItem('apellidoUser', datoss.apellido);
        localStorage.setItem('rolUser', datoss.rol);
        localStorage.setItem('fotoUser', datoss.fotoUser);

        window.location = "/proyecto-facultad/#/perfil"

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
              <img src={imgLogin} alt="Imagen de fondo" className="login-card-img-login"></img>
            </div>
            <div className="col-md-7">
              <div className="card-body-login">

                <div className="row mb-3">
                  <div className="col-6">
                    <h3 className="login-card-description-login">Ingresar</h3>
                  </div>
                  <div className="col-6">
                    <img src={logoClinica} alt="Logo de Clínica Aparicio" className="logo"></img>
                  </div>
                </div>
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
                    <Link to="/signUp" className="center">¿No tienes cuenta? ¡Registrate!</Link>
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