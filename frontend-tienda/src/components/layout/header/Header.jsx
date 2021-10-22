import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './header.css'
import logo from '../../assets/img/logo.png'

const Header = ()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        GigaDevs SHOP
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gestion Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/productosDisponibles">Disponibles</a></li>
                                    <li><a className="dropdown-item" href="/productosNoDisponibles">No Disponibles</a></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/listarUsuarios">Gestion Usuarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gestion de Ventas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/verArticulos">Ver Art&iacute;culos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/verCarrito">Ver Carrito</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    Nombre de los modulos
                </div>
            </nav>
        </header>
    )
}
export default Header;