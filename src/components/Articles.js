import React, { Component }  from 'react';

// Libraries
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';

// Components
import Global from '../Global'

// Sources
import noImage from '../assets/images/noImage.png';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }

    getArticles = () => {
        axios.get(this.url+'api/articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            });
    }

    getLastArticles = () => {
        axios.get(this.url+'api/articles/last')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            });
    }

    getArticlesBySearch = (searched) => {
        axios.get(this.url+'api/search/'+searched)
            .then(res => {

                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    });

            })
            .catch( err => {
                
                this.setState({
                    articles:[],
                    status: 'success'
                })
            });
    }


    componentDidMount() {
        var home = this.props.home;
        var search = this.props.search;

        if (home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search != undefined){
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        };
        
    }

    render() {
        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item">
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
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.Moment}</Moment>
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>
                        {/* <!-- Volvemos a limpiar "float" --> */}
                        <div className="clearfix"></div>
                    </article>
                )
            })

            return (
                <div id="articles">
                    <h1>Listado de artículos</h1>
                    <div>{listArticles}</div>
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">NO HAY ARTÍCULOS PARA MOSTRAR</h2>
                </div>
            );

        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">CARGANDO ARTÍCULOS ....</h2>
                </div>
            );
        }

    }
}

export default Articles;