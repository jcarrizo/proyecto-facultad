import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pacientes from "../pages/pacientes/pacientes";
import Perfil from "../pages/perfil/perfil";
import Profesionales from "../pages/profesionales/profesionales";
import Signup from "../pages/signup/Signup";
import Turnos from "../pages/turnos/turnos";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/#/login" component={Login}>

        </Route>
        <Route path="/#/signUp">
          <Signup />
        </Route>
        <Route path="/#/perfil">
          <Perfil />
        </Route>
        <Route path="/#/pacientes" component={Pacientes}>

        </Route>
        <Route path="/#/turnos">
          <Turnos />
        </Route>
        <Route path="/#/profesionales">
          <Profesionales />
        </Route>
        <Route path="/">
          <Perfil></Perfil>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Rutas;
