import React, { Component } from 'react';

class PeliculaIndiv extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula)
    }

    render() {
    
        // Usamos "structuring asignment"
        const { titulo, image } = this.props.pelicula;

        return (
            <article className="article-item">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 10 minutos
                                </span>
                <a href="./article.html">Leer más</a>

                <br />

                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>

                <div className="clearfix"></div>
            </article>
        )
    }
}

export default PeliculaIndiv;