import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand">
                <a className="nav-link" href="#hero">Home</a>
                <a className="nav-link " href="#about">About Us</a>
                <a className="nav-link " href="#services">Services</a>
                <a className="nav-link " href="#portfolio">Portfolio</a>
                <a className="nav-link " href="#team">Team</a>
                {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className=""></i></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className=""></i></a>
                            <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li> */}
                <a className="nav-link " href="#contact">Contact</a>
            <i className=""></i>
        </nav>
        // <nav className="navbar navbar-light bg-light">
        //     <a className="navbar-brand" href="#">
        //         <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
        //             Bootstrap
        //     </a>
        // </nav>
    )
}

export default Navbar
