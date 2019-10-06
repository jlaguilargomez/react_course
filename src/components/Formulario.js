import React, { PureComponent } from 'react'
import Slider from './Slider';
import Sidebar from './Sidebar'

class Formulario extends PureComponent {

    // Esto identifica los campos de los formularios
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    recibirFormulario = (e) => {
        e.preventDefault();
        console.log(this.nombreRef.current.value)
    }

    render() {
        return (
            <div id="formulario">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
        
                <div id="content">
                    <form action="#" className="mid-form" onSubmit={this.recibirFormulario}>
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" ref={this.nombreRef}/>
                        </div>

                        <div className="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" id="apellidos" ref={this.appelidosRef} />
                        </div>

                        <div className="form-group">
                            <label for="bio">Biografía</label>
                            <textarea name="bio" id="bio" ref={this.bioRef}></textarea>
                        </div>

                        <div className="form-group radio-buttons">
                            <input type="radio" name="genero" value="hombre" id="hombre" ref={this.generoHombreRef}/>Hombre
                            <input type="radio" name="genero" value="mujer" id="mujer" ref={this.generoMujerRef} />Mujer
                            <input type="radio" name="genero" value="otro" id="otro" ref={this.generoOtroRef} />Otro

                        </div>

                        <input type="submit" value="Enviar" className="btn" />
                    </form>
                </div>

                <Sidebar blog="true" />
            </div>
        )
    }
}

export default Formulario