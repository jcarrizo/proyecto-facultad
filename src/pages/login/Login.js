import React from 'react'
import './login.css'
import img from '../../images/login.jpg'

const Login = () => {

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
                <form>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control"
                      placeholder="Email"></input>
                  </div>
                  <div className="form-group mb-4">
                    <input type="password" name="password" className="form-control"
                      placeholder="Contraseña"></input>
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