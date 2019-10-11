import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import axios from 'axios';
import Articles from './Articles'

class Blog extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

        return (

            <div id="blog">
                <Slider title="Blog" size="slider-small"/>

                <div className="center">
                    <div id="content">
                        <Articles />           
                    </div>
                    <Sidebar blog="true"/>
                </div>
            </div>
        )
    }
}

export default Blog