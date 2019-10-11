import React, { Component } from 'react';
import axios from 'axios';

class Arcticles extends Component {

    state = {
        articles: [],
        status: null
    }

    getArticles = () => {
        axios.get('http://localhost:3900/api/articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                console.log(this.state)
            });
    }

    componentDidMount() {
        this.getArticles();
    }

    render() {
        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item">
                        <div className="image-wrap">
                            <img src="https://www.nomadbubbles.com/wp-content/uploads/0-casas-japonesas_4-570x380.jpg" alt="casa-japon" />
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                            {article.date}
                        </span>
                        <a href="./article.html">Leer más</a>
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

export default Arcticles;