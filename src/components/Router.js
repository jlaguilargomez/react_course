import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';
import Error from './Error';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import Formulario from './Formulario';
import Search from './Search';
import Article from './Article';

class Router extends Component {
    render() {
        return (

            <BrowserRouter>

                <Header />

                
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/blog" component={Blog}></Route>
                        <Route exact path="/formulario" component={Formulario}></Route>
                        <Route exact path="/peliculas" component={Peliculas}></Route>
                        <Route exact path="/blog/articulo/:id" component={Article}></Route>
                        <Route exact path="/blog/busqueda/:search" component={Search}></Route>
                        <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                
                                return(
                                    <Redirect to={'/blog/busqueda/'+search}></Redirect>
                                )
                            }}>

                        </Route>
                        <Route exact path="/segunda-ruta" component={MiComponente}></Route>
                        <Route exact path="/pagina-1" render={() => (<h1>Hola mundo desde la ruta: H1</h1>)} />


                        <Route exact path="/pruebas/:id" render={(props) => {
                            var id = props.match.params.id;

                            return (
                                <div id="content">
                                    <h1 class="subheader">Página de pruebas</h1>
                                    <h2>{id}</h2>
                                </div>
                            )
                        }} />

                        <Route component={Error}></Route>


                    </Switch>
                    
                    
  
                <div className="clearfix"></div>            
                <Footer></Footer>

            </BrowserRouter>

        );
    }
}

export default Router
