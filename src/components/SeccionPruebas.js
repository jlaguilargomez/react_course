import React, { Component } from 'react';
import MiComponente from './MiComponente';


class SeccionPruebas extends Component {

    contador = 0;

    state = {
        contador: 0
    }

    sumar(){
        this.setState({
            contador: (this.state.contador+1)
        })
    }   

    restar(){
        this.setState({
            contador: (this.state.contador-1)
        })
    }   

    render() {

        return (
            <section id="content">
                <h2 className="article-title">Últimos artículos</h2>
                <p>
                    Ahora sí que sí, a muerte con React!
                 </p>

                <section className="componentes">

                    <MiComponente />
                    

                </section>

                <h2 className="subheader">Estado de los componentes</h2>
                <p>
                    Contador: {this.state.contador}
                </p>

                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)} />
                    <input type="button" value="Restar" onClick={this.restar.bind(this)} />
                </p>


            </section>
        )
    }
}

export default SeccionPruebas;