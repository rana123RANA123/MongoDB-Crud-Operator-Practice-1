import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                            <li className="nav-item ms-5">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Show</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link to='/upload' className="nav-link active" aria-current="page" href="#">Upload</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
