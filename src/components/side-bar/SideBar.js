import React from "react";
import "../side-bar/sidebar.css";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import banner from "./../../images/bannerodonto.png"; // Tell webpack this JS file uses this image

const SideBar = () => {
  let nameUser = localStorage.getItem("nameUser");
  let rolUsuario = localStorage.getItem('rolUser');

  const LogOut = () => {
    localStorage.setItem("emailUser", "");
    localStorage.setItem("nameUser", "");
    localStorage.setItem('dataD', "");
    localStorage.setItem('rolUser', "");

    if (window.confirm("¿confirma que deasea desloguearse?")) {
      window.location.href = "login";
    }
  };


  const vistaProfesional = () => {
    if (rolUsuario === "3" || rolUsuario === "2") {
      return (
        <div className="mt-4">
          <a href="/profesionales">
            <button variant="outline-primary" className="btn pointer">
              <p className="text-grey">
                <span>
                  <i className="bi bi-suit-heart-fill" />
                </span>
                <span className="ml-3">Profesionales</span>
              </p>
            </button>
          </a>
        </div>
      );
    }
  }

  const vistaProfesionalResponsive = () => {
    if (rolUsuario === "3" || rolUsuario === "2") {
      return (
        <a href="/profesionales"><li>Profesionales</li></a>
      );
    }
  }

  const CargarImagen = () => {
    let urlimagen = localStorage.getItem("fotoUser")
    var image = new Image()
    image.src = urlimagen;
    if (urlimagen != "" && urlimagen != undefined) {
      return (
        <img src={image.src} alt="Admin" id="fotoUser" className="rounded-circle" width="50" height="50"></img>
      )
    }
    else {
      return (
        <img src="https://www.dermacity.com.mx/wp-content/uploads/doctor_homme_coth.png" alt="Admin" id="fotoUser" className="rounded-circle" width="50" height="50"></img>
      )
    }
  }



  return (
    <div>
      <div className="desktop">
        <div className="sidebar">
          <div className="container-sidebar">
            <img className="mt-2" src={banner} width="175"></img>

            <div className="row mt-4">
              <div className="col">
                <div className="mt-4">
                  <a href="/perfil">
                    <button variant="outline-primary" className="btn pointer">
                      <p className="text-grey">
                        <span>
                          <i className="bi bi-person-lines-fill" />
                        </span>
                        <span className="ml-3">Mi perfil</span>
                      </p>
                    </button>
                  </a>
                </div>
                <div className="mt-4">
                  <a href="/pacientes">
                    <button variant="outline-primary" className="btn pointer">
                      <p className="text-grey">
                        <span>
                          <i className="bi bi-people-fill" />
                        </span>
                        <span className="ml-3">Pacientes</span>
                      </p>
                    </button>
                  </a>
                </div>
                <div className="mt-4">
                  <a href="/turnos">
                    <button variant="outline-primary" className="btn pointer">
                      <p className="text-grey">
                        <span>
                          <i className="bi bi-calendar-event" />
                        </span>
                        <span className="ml-3">Turnos</span>
                      </p>
                    </button>
                  </a>
                </div>
                {vistaProfesional()}
              </div>
            </div>

            <div className="row bottom dropup">
              <hr></hr>
              <div className="btn-group dropup row">
                <div className="col-auto text-center dropup">
                  {CargarImagen()}
                </div>
                <div
                  type="button"
                  className="btn dropdown-toggle col-auto mt-2 max-length"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  length="10"
                >
                  {nameUser}
                </div>

                <ul className="dropdown-menu pointer">
                  <li className="dropdown-item" onClick={LogOut}>
                    Salir
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="/perfil"><li>Mi perfil</li></a>
              <a href="/pacientes"><li>Pacientes</li></a>
              <a href="/turnos"><li>Turnos</li></a>
              {vistaProfesionalResponsive()}
              <a href="#" onClick={LogOut}><li>Salir</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
