import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import axios from 'axios';

class Blog extends Component {

    render() {

        axios.get('http://localhost:3900/api/articles')
            .then(res => {
                console.log(res.data)
            });

        return (

            <div id="blog">
                <Slider title="Blog" size="slider-small"/>

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                    </div>
                    <Sidebar blog="true"/>
                </div>
            </div>
        )
    }
}

export default Blog