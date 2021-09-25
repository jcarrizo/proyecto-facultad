import React from 'react'
import "../side-bar/sidebar.css"


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="container-sidebar">

                <div className="row ">
                    <div className="col">
                        <a className="pointer">
                            <p className="text-gray mt-5 ml-1">
                                <span><i class="bi-person" />
                                </span>
                                <span className="ml-3 text-grey">Mi perfil</span>
                            </p>
                        </a>
                        <a className="pointer">
                            <p className="text-gray mt-5 ml-1">
                                <span><i class="bi-people" />
                                </span>
                                <span className="ml-3 text-grey">Mis Pacientes</span>
                            </p>
                        </a>
                        <a className="pointer">
                            <p className="text-gray mt-5 ml-1">
                                <span><i class="bi-table" />
                                </span>
                                <span className="ml-3 text-grey">Turnos</span>
                            </p>
                        </a>
                    </div>
                </div>


                <div className="row fixed-bottom container-sidebar">
                    <div className="col-auto text-center">
                        <i className="bi-person-circle text-blue" />
                    </div>
                    <div className="col">
                        <p className="mt-2"><strong>Nombre de Usuario</strong></p>
                    </div>
                </div>
            </div>
        </div >)
}

export default SideBar;