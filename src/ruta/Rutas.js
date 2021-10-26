import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pacientes from "../pages/pacientes/pacientes";
import Perfil from "../pages/perfil/perfil";
import Profesionales from "../pages/profesionales/profesionales";
import Signup from "../pages/signup/Signup";
import Turnos from "../pages/turnos/turnos";

const Rutas = () => {
  return (
    <Router>
      <div>
        {/* <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Inicio
        </Link>
        <Link to="/Login" className="btn btn-dark">
          Login
        </Link>
        <Link to="/signUp" className="btn btn-dark">
          SignUp
        </Link>

      </div> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <Signup />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/pacientes">
            <Pacientes />
          </Route>
          <Route path="/turnos">
            <Turnos />
          </Route>
          <Route path="/profesionales">
            <Profesionales />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Rutas;
