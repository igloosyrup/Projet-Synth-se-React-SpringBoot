import React from 'react'
import "./styles/Error404Styles.css"
import { useHistory } from 'react-router-dom'

const Error404 = () => {

    const history = useHistory()

    const toHome = () =>{
        history.push("/")
    }

    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                    <button className="btn btn-link" onClick={()=> toHome()}>Go To Homepage</button>
                </div>
            </div>

        </>
    )
}

export default Error404