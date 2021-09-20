import React from 'react'
import "../side-bar/sidebar.css"
import Profile from '../../images/profile.png';
 import List from '../../images/list.png';
import Home from '../../images/home.png';
import UserImageDefault from '../../images/user_2x.png';
 

const SideBar = () => {
    return (
        <div>
            <div class="row">
                <div class="col-auto text-center">
                    <img class="img-profile" src={UserImageDefault} alt="user" />
                </div>
                <div class="col">
                    <h2 class="mt-2">
                        <h2><strong>nombre de usuario</strong></h2>
                    </h2>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <a >
                    <p class="text-gray">
                            <span><img class="img" src={Profile} alt="" />
                        </span>
                            
                        &nbsp;
                        <span class="ml-1">Mi perfil</span>
                    </p>
                </a>
                <hr />
                <a >
                <p class="text-gray mt-4">
                    <span><img class="img" src={List} alt="" /></span>
                    &nbsp;
                    <span>Mis Pacientes</span>
                </p>
            </a>
            <hr />
            <a >
            <p class="text-gray mt-4">
                <span><img class="img" src={Home} alt="" /></span>
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