import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Crear artículo</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form action="#">
                        <input className="input" type="text" name="search" id="" />
                        <div className="clearfix"></div>
                        <input className="btn" type="submit" value="Buscar" />
                    </form>
                </div>
            </aside >
        );
    }
}

export default Sidebar;