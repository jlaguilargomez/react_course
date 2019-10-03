import React, { Component } from 'react';
import PeliculaIndiv from './PeliculaIndiv';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Pulp Fiction', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVfGU4n7cYvIUYtvjxXzpXCzwh8U8PxkjLjmA0B9Pb0MFBRiza' },
            { titulo: 'Braveheart', image: 'https://img.europapress.es/fotoweb/fotonoticia_20150524095717_800.jpg' },
            { titulo: 'Snatch: cerdos y diamantes', image: 'https://i.blogs.es/b37ed8/snatch-poster/450_1000.jpg' }
        ],
        year: 2019,
        nombre: 'Jose Luis Aguilar'
    }

    cambiarTitulo = () =>{
        
        var { peliculas } = this.state;
        peliculas[0].titulo = "Pocahontas"

        this.setState({
            peliculas: peliculas
        })
    }

    render() {
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las películas favoritas de {this.state.nombre}</p>

                <input type="button" value="cambiar nombre" onClick={this.cambiarTitulo} />


                <div id="articles" className = 'peliculas'>

                    {this.state.peliculas.map((pelicula, i) => {
                        return (
                            // Le envío la key (muy importante para el futuro orden) y el objeto película al completo
                            <PeliculaIndiv 
                                key={i} 
                                pelicula={pelicula}
                            />
                        )
                    })}

                </div>

            </div>

        );
    }
}

export default Peliculas;