import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';

// Sources
import Global from '../Global';

// Components
import Sidebar from './Sidebar';

// Media
import noImage from '../assets/images/noImage.png';

class Article extends Component {

    url = Global.url;

    state = {
        article: {},
        status: null,
    }

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'api/article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
    }

    render() {
        
        var article = this.state.article;
        console.log(article);

        return (
            
            <div className="center">
                <section id="content">

                    {
                        this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {
                                    article.image != null ? (
                                        <img 
                                            src={this.url+'api/get-image/'+article.image} 
                                            alt={article.title} 
                                        />
                                    ) : (
                                        <img src={noImage} alt='no-image' />
                                    )
                                }
                            </div>
                            <h1 className="sub-header">
                                {article.title}
                            </h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>
                        
                            <a href="#" className="btn btn-danger">Eliminar</a>
                            <a href="#" className="btn btn-warning">Editar</a>
                            
                            <div className="clearfix"></div>
                        </article>
                    }


                </section>

                <Sidebar />

            </div>

        );
    }
}

export default Article;