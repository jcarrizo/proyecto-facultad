import React from 'react'
import "../side-bar/sidebar.css"
import Profile from '../../images/profile.png';
 import List from '../../images/list.png';
import Home from '../../images/home.png';
import UserImageDefault from '../../images/user_2x.png';
 

const SideBar = () => {
    return (
        <div className="container-sidebar">
            <div className="row">
                <div className="col-auto text-center">
                    <img className="img-profile" src={UserImageDefault} alt="user" />
                </div>
                <div className="col">
                    <h2 className="mt-2">
                        <h2><strong>nombre de usuario</strong></h2>
                    </h2>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <a >
                    <p className="text-gray">
                            <span><img className="img" src={Profile} alt="" />
                        </span>
                            
                        &nbsp;
                        <span className="ml-1">Mi perfil</span>
                    </p>
                </a>
                <hr />
                <a >
                <p className="text-gray mt-4">
                    <span><img className="img" src={List} alt="" /></span>
                    &nbsp;
                    <span>Mis Pacientes</span>
                </p>
            </a>
            <hr />
            <a >
            <p className="text-gray mt-4">
                <span><img className="img" src={Home} alt="" /></span>
                &nbsp;
                <span>Mis Direcciones</span>
                        </p>
                        <hr />
                    </a>
            </div>
          </div>
        </div >)
}

export default SideBar;