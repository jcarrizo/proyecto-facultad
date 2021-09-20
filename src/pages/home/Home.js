import React from 'react'
import SideBar from '../../components/side-bar/SideBar';
import "../home/home.css"

const Home = () => {
    return (<div>
        <div className="row">
            <div className="col-2">
                <SideBar></SideBar>
            </div>

            <div className="col-10">

            </div>
        </div>
    </div>)
}

export default Home;