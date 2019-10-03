import React, { Component } from 'react';
import react from '../assets/images/react.svg'

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
                            <li><a href="./index.html">Inicio</a></li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./formulario.html">Formulario</a></li>
                            <li><a href="#">Página 1</a></li>
                            <li><a href="#">Página 2</a></li>
                        </ul>
                    </nav>
                    <div classNameName="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header;