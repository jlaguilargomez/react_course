import React, { Component } from 'react';

class PeliculaIndiv extends Component {
    render() {
        // Usamos "structuring asignment"
        const { titulo, image } = this.props.pelicula;

        return (
            <article class="article-item">
                <div class="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span class="date">
                    Hace 5 minutos
                                </span>
                <a href="./article.html">Leer más</a>

                <div class="clearfix"></div>
            </article>
        )
    }
}

export default PeliculaIndiv;