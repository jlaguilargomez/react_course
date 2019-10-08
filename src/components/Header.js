import React, { Component } from 'react';
import react from '../assets/images/react.svg'
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
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
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/peliculas" activeClassName="active">Películas</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/" activeClassName="active">Página 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header;