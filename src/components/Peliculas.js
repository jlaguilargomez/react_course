import React, { Component } from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {

    render() {
        return (
            <React.Fragment>
                <h4>Soy el componente de películas</h4>
                <p>Y este es otro componente estático <MensajeEstatico /> </p>
            </React.Fragment>

        );
    }
}

export default Peliculas;