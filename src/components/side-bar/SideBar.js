import React from "react";
import "../side-bar/sidebar.css";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import banner from "./../../images/bannerodonto.png"; // Tell webpack this JS file uses this image

const SideBar = () => {

  let nameUser = localStorage.getItem("nameUser");
  let rolUsuario = localStorage.getItem('rolUser');

  const cerrarSesion = () => {
    localStorage.setItem("emailUser", "");
    localStorage.setItem("nameUser", "");
    localStorage.setItem('dataD', "");
    localStorage.setItem('rolUser', "");
    window.location.href = "/proyecto-facultad/#/login";
  }


  const vistaProfesional = () => {
    if (rolUsuario === "3" || rolUsuario === "2") {
      return (
        <div className="mt-4">
          <Link to="/profesionales">
            <button variant="outline-primary" className="btn pointer">
              <p className="text-grey">
                <span>
                  <i className="bi bi-suit-heart-fill" />
                </span>
                <span className="ml-3">Profesionales</span>
              </p>
            </button>
          </Link>
        </div>
      );
    }
  }

  const vistaProfesionalResponsive = () => {
    if (rolUsuario === "3" || rolUsuario === "2") {
      return (
        <Link to="/profesionales"><li>Profesionales</li></Link>
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
                  <Link to="/perfil">
                    <button variant="outline-primary" className="btn pointer">
                      <p className="text-grey">
                        <span>
                          <i className="bi bi-person-lines-fill" />
                        </span>
                        <span className="ml-3">Mi perfil</span>
                      </p>
                    </button>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link to="/pacientes">
                    <button variant="outline-primary" className="btn pointer">
                      <p className="text-grey">
                        <span>
                          <i className="bi bi-people-fill" />
                        </span>
                        <span className="ml-3">Pacientes</span>
                      </p>
                    </button>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link to="/turnos">
                    <button variant="outline-primary" className="btn pointer">
                      <p className="text-grey">
                        <span>
                          <i className="bi bi-calendar-event" />
                        </span>
                        <span className="ml-3">Turnos</span>
                      </p>
                    </button>
                  </Link>
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
                <h5
                  className="col-auto mt-2 max-length"
                  aria-expanded="false"
                  length="10"
                >
                  {nameUser}
                </h5>


                {/* < !--Button Cerrar Sesión --> */}
                <button type="button" class="btn btn-primary mt-3 ml-2 mr-2" data-bs-toggle="modal" data-bs-target="#cerrarSesion">
                  Cerrar Sesión
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal Cerrar Sesión --> */}
      <div class="modal fade" id="cerrarSesion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Cerrar Sesión</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ¿Esta seguro que desea cerrar la sesión?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" onClick={() => { cerrarSesion() }} data-bs-dismiss="modal">Cerrar Sesión</button>
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
              <Link to="/perfil"><li>Mi Perfil</li></Link>
              <Link to="/pacientes"><li>Pacientes</li></Link>
              <Link to="/turnos"><li>Turnos</li></Link>
              {vistaProfesionalResponsive()}
              <li data-bs-toggle="modal" data-bs-target="#cerrarSesion">Cerrar Sesión</li>
            </ul>
          </div>
        </nav>
      </div>

    </div>
  );
};

export default SideBar;
