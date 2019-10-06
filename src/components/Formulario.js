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

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else if(this.generoMujerRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else{
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero,
            
        }

        this.setState({
            user: user
        })

        console.log(user);
    }

    render() {
        return (
            <div id="formulario">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
        
                <div id="content">

                    {
                        this.state.user.nombre &&
                        <div id="user-data">
                            <p>Nombre: <strong>{this.state.user.nombre}</strong></p>
                            <p>Apellidos: <strong>{this.state.user.apellidos}</strong></p>
                            <p>Bio: <strong>{this.state.user.bio}</strong></p>
                            <p>Género: <strong>{this.state.user.genero}</strong></p>
                        </div>
                    }

                    <form action="#" className="mid-form" onChange={this.recibirFormulario}>
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" ref={this.nombreRef}/>
                        </div>

                        <div className="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" id="apellidos" ref={this.apellidosRef} />
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