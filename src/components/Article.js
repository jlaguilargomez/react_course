import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// Sources
import Global from '../Global';

// Components
import Sidebar from './Sidebar';

class Article extends Component {

    url = Global.url;

    state = {
        article: {},
        status: null,
    }

    componentDidUpdate() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'api/article/' + id)
            .then(res => {
                this.setState({
                    article: res.data,
                    status: 'success'
                })
            })
    }

    render() {
        
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">

                    {
                        this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                <img
                                    src="https://www.nomadbubbles.com/wp-content/uploads/0-casas-japonesas_4-570x380.jpg"
                                    alt="casa-japon"
                                />
                            </div>
                            <h1 className="sub-header">
                                {article.title}
                            </h1>
                            <span className="date">
                                Hace 5 minutos
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a purus at quam efficitur malesuada
                                sed nec sapien. Nullam sed ultricies orci, vitae pellentesque est. Proin ut diam dictum,
                                pellentesque odio sed, congue nulla. Maecenas accumsan odio mattis, tincidunt arcu a, ultricies
                                nulla. In auctor leo sed vehicula euismod. Nullam ut mollis ante. Donec eget accumsan ipsum, non
                                ultricies ex. Fusce sed venenatis ex. Aenean viverra ornare est quis tincidunt. Nunc pharetra in
                                orci nec vehicula.
                            </p>

                            <p>
                                Sed augue velit, accumsan nec pulvinar vitae, porttitor quis magna. In ut mauris gravida,
                                condimentum ex ut, varius libero. Vivamus pellentesque velit sit amet arcu venenatis, ac sodales
                                quam commodo. Cras dictum dictum tempus. Nullam euismod tempor lectus consequat commodo. Maecenas eu
                                auctor magna. In hac habitasse platea dictumst. Curabitur eros lectus, tincidunt et diam vel,
                                dignissim tempus lectus. Mauris consectetur, diam sit amet fringilla congue, eros velit elementum
                                quam, in suscipit elit augue rhoncus ligula.
                            </p>

                            <p>
                                Quisque feugiat sem ut velit sodales, tincidunt congue dolor cursus. Nulla facilisi. Nulla imperdiet
                                mauris sed nisi euismod aliquet in vel lacus. Proin vehicula gravida nibh. Vestibulum tincidunt
                                lectus non sapien tincidunt, vitae varius quam efficitur. Proin volutpat tellus justo, sed semper
                                urna volutpat vitae. Integer non rhoncus ante. Aliquam eu imperdiet leo. Vivamus bibendum in massa
                                eget fermentum. Suspendisse potenti. Donec elementum finibus est, id vehicula nisl varius nec.
                            </p>
                            <p>
                                In porta placerat pharetra. Vestibulum ultricies turpis et diam sollicitudin, in laoreet ex ornare.
                                Quisque interdum, tellus non imperdiet ullamcorper, sapien nunc laoreet lectus, vel venenatis velit
                                nisi sed ex. Vivamus sagittis a risus in sodales. Nulla id dolor lacus. Vivamus vestibulum volutpat
                                magna. Integer et arcu mi. In sed feugiat quam, sed accumsan arcu. Cras eu condimentum ex, semper
                                sagittis erat. Maecenas vel eleifend augue. Suspendisse potenti.
                            </p>

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