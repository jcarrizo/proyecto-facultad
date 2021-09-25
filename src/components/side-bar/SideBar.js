import React from 'react'
import "../side-bar/sidebar.css"
import Profile from '../../images/profile.png';
import List from '../../images/list.png';
import Home from '../../images/home.png';
import UserImageDefault from '../../images/user_2x.png';


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="container-sidebar">
                <div className="row">
                    <div className="col-auto text-center">
                        <img className="img-profile" src={UserImageDefault} alt="user" />
                    </div>
                    <div className="col">
                        <h4 className="mt-2"><strong>nombre de usuario</strong></h4>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col">
                        <a>
                            <p className="text-gray">
                                <span><i class="bi-alarm" />
                                </span>

                                <span className="ml-1 text-center">Mi perfil</span>
                            </p>
                        </a>
                        <hr />
                        <a>
                            <p className="text-gray mt-4">
                                <span><i class="bi-alarm" />
                                </span>
                                <span className="ml-1">Mis Pacientes</span>
                            </p>
                        </a>
                        <hr />
                        <a >
                            <p className="text-gray mt-4">
                                <span><i class="bi-alarm" />
                                </span>
                                <span className="ml-1">Mis Direcciones</span>
                            </p>
                            <hr />
                        </a>
                    </div>
                </div>
            </div>
        </div >)
}

export default SideBar;