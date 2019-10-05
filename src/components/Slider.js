import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>

                {
                    this.props.btn && 
                    <a href="https://www.linkedin.com/in/jlaguilargomez/" className="sub-title" target="_blank" rel="noopener noreferrer">{this.props.btn}</a>
                }
                
            </div>
        );
    }
}

export default Slider;