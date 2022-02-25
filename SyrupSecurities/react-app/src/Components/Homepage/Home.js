import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./styles/HomeStyles.css"
import appbg from "../../img/nt_virus_bg.png"

const Home = () => {
    return (
        <>
            <Navbar />
            <h1 className="text-center mt-5 mb-5">Bienvenu à Syrup Securities Solutions</h1>
            
            <div className="text-center">
                <img src={appbg} alt="virus lockdown" className="" />
            </div>
        </>
    )
}

export default Home
