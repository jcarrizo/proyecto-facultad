import React from 'react'
import "../side-bar/sidebar.css"


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="container-sidebar">
                <div className="row">
                    <div className="col-auto text-center">
                        <i className="bi-person-circle text-blue img-profile" />
                    </div>
                    <div className="col">
                        <h4 className="mt-2"><strong>nombre de usuario</strong></h4>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col">
                        <a className="pointer">
                            <p className="text-gray ml-1">
                                <span><i class="bi-person text-blue" />
                                </span>
                                <span className="ml-3 text-center">Mi perfil</span>
                            </p>
                        </a>
                        <hr />
                        <a className="pointer">
                            <p className="text-gray mt-4 ml-1">
                                <span><i class="bi-people text-blue" />
                                </span>
                                <span className="ml-3">Mis Pacientes</span>
                            </p>
                        </a>
                        <hr />
                        <a className="pointer">
                            <p className="text-gray mt-4 ml-1">
                                <span><i class="bi-table text-blue" />
                                </span>
                                <span className="ml-3">Turnos</span>
                            </p>
                            <hr />
                        </a>
                    </div>
                </div>
            </div>
        </div >)
}

export default SideBar;