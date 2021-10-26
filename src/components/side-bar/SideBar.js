import React from "react";
import "../side-bar/sidebar.css";
import banner from "./../../images/bannerodonto.png"; // Tell webpack this JS file uses this image

const SideBar = () => {
  let nameUser = localStorage.getItem("nameUser");

  const LogOut = () => {
    localStorage.setItem("emailUser", "");
    localStorage.setItem("nameUser", "");

    if (window.confirm("¿confirma que deasea desloguearse?")) {
      window.location.href = "login";
    }
  };

  return (
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
                    <span className="ml-3">Mis Pacientes</span>
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

            <div className="mt-4">
              <a href="/profesionales">
                <button variant="outline-primary" className="btn pointer">
                  <p className="text-grey">
                    <span>
                      <i className="bi-table" />
                    </span>
                    <span className="ml-3">Profesionales</span>
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="row bottom dropup">
          <hr></hr>
          <div className="btn-group dropup row">
            <div className="col-auto text-center dropup">
              <i className="bi-person-circle text-blue img-profile" />
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
  );
};

export default SideBar;
