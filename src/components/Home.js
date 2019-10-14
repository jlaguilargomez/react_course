import React, { Component } from 'react';

// Components
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

    render() {

        return (

            <div id="home">
                <Slider title="Home Page" size="slider-big" btn="Ir al perfil de Linkedin"/>

                <div className="center">
                    <div id="content">
                        <h1 class="subheader">Últimos artículos</h1>
                        <Articles 
                            home="true"
                        />
                    </div>
                    <Sidebar blog="false"/>
                </div>
            </div>
        )
    }
}

export default Home