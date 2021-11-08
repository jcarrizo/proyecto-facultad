import React from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pacientes from "../pages/pacientes/pacientes";
import Perfil from "../pages/perfil/perfil";
import Profesionales from "../pages/profesionales/profesionales";
import Signup from "../pages/signup/Signup";
import Turnos from "../pages/turnos/turnos";

const Rutas = () => {
  return (
    <HashRouter >
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/signUp" component={Signup}>
        </Route>
        <Route path="/perfil" component={Perfil}>
        </Route>
        <Route path="/pacientes" component={Pacientes}>
        </Route>
        <Route path="/turnos" component={Turnos}>
        </Route>
        <Route path="/profesionales" component={Profesionales}>
        </Route>
        <Route path="/" component={Login}>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Rutas;
