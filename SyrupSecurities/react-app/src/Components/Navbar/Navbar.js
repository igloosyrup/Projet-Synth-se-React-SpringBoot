import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Navbar = () => {
    const [customer, setCustomer] = useState({
        matricule: ""
    })
    const history = useHistory()
    // const historyState = history.location.state
    // const customerState = historyState.student
    const location = useLocation()

    const toHome =() =>{
        history.push("/home")
    }

    const toAntivirus = () =>{
        history.push("/antivirus")
    }

    const toVpn = () =>{
        history.push("/vpn")
    }

    const toProducts = () =>{
        history.push("/products")
    }

    const toTeam = () =>{
        history.push("/team")
    }

    const toContactUs = () =>{
        history.push("/contact")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-brand btn btn-link">
                <h4 className="text-dark align-middle">
                    Syrup Securities
                </h4>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <button className="nav-link btn btn-link text-primary" onClick={()=> toHome()}>Accueil </button>
                        {/* <span class="sr-only">(current)</span> */}
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link text-primary" onClick={()=> toAntivirus()}>Antivirus</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link text-primary" onClick={()=> toVpn()}>V.P.N</button>
                    </li>
                    <li className="nav-item ">
                        <button className="nav-link btn btn-link text-primary"  onClick={()=>toProducts()}>Tous les Produits</button>
                    </li>
                    <li className="nav-item ">
                        <button className="nav-link btn btn-link text-primary" onClick={()=> toTeam()}>L'équipe</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link text-primary" onClick={()=> toContactUs()}>Nous joindre</button>
                    </li>
                </ul>
                {/* TODO  login/registration landing page*/}
                <span className="navbar-text">
                    Se connecter/S'inscrire
                </span>
            </div>
        </nav>
    )
}

export default Navbar
