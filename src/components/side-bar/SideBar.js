import React from 'react'
import "../side-bar/sidebar.css"




const SideBar = () => {

    let nameUser = localStorage.getItem('userSeccion');

    return (
        <div className="sidebar">
            <div className="container-sidebar">

                <h2>Odontología Carrizo XD</h2>

                <div className="row ">
                    <div className="col">
                        <a className="pointer">
                            <p className="text-gray mt-5 ml-1">
                                <span><i className="bi-person" />
                                </span>
                                <span className="ml-3 text-grey">Mi perfil</span>
                            </p>
                        </a>
                        <a className="pointer">
                            <p className="text-gray mt-5 ml-1">
                                <span><i className="bi-people" />
                                </span>
                                <span className="ml-3 text-grey">Mis Pacientes</span>
                            </p>
                        </a>
                        <a className="pointer">
                            <p className="text-gray mt-5 ml-1">
                                <span><i className="bi-table" />
                                </span>
                                <span className="ml-3 text-grey">Turnos</span>
                            </p>
                        </a>
                    </div>
                </div>





                <div className="row bottom dropup">
                    <hr></hr>
                    <div class="btn-group dropup">
                        <div className="col-auto text-center dropup">
                            <i className="bi-person-circle text-blue" />
                        </div>
                        <div type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {nameUser}
                        </div>

                        <ul className="dropdown-menu pointer">
                            <li className="dropdown-item">
                                Salir
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >)
}

export default SideBar;