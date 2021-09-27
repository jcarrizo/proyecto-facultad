import React from 'react'
import "../side-bar/sidebar.css"

const SideBar = () => {

    let nameUser = localStorage.getItem('nameUser');

    return (
        <div className="sidebar">
            <div className="container-sidebar">

                <h2>Odontología Carrizo XD</h2>

                <div className="row ">

                    <div className="col">

                        <div className="mt-4">
                            <a href="/perfil">
                                <button variant="outline-primary" className="btn pointer" >
                                    <p className="text-gray">
                                        <span><i className="bi-person" />
                                        </span>
                                        <span className="ml-3 text-grey" >Mi perfil</span>
                                    </p>
                                </button>
                            </a>
                        </div>

                        <div className="mt-4">
                            <a href="/pacientes">
                                <button variant="outline-primary" className="btn pointer" >
                                    <p className="text-gray">
                                        <span><i className="bi-people" />
                                        </span>
                                        <span className="ml-3 text-grey">Mis Pacientes</span>
                                    </p>
                                </button>
                            </a>
                        </div>

                        <div className="mt-4">
                            <a href="">
                                <button variant="outline-primary" className="btn pointer">
                                    <p className="text-gray">
                                        <span><i className="bi-table" />
                                        </span>
                                        <span className="ml-3 text-grey">Turnos</span>
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
                        <div type="button" className="btn dropdown-toggle col-auto mt-2 max-length" data-bs-toggle="dropdown" aria-expanded="false" length="10">
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