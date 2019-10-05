import React, { Component } from 'react';
import react from '../assets/images/react.svg'
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div class="center">
                    {/* LOGO */}
                    <div id="logo">
                        <img className="app-logo" src={react} alt="logotipo" />
                        <span className="brand">
                            Curso<strong>ReactJS</strong>
                        </span>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/ruta-prueba">Blog</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/segunda-ruta">Formulario</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/">Página 1</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/">Página 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div classNameName="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header;