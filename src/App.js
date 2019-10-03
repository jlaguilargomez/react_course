import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';

 
function App() {


  return (
    <div className="App">
      <Header />

      <Slider />

      <div className="center">
        
        <Peliculas />

        <Sidebar />

      </div>

      <div class="clearfix"></div>
      <Footer />

    </div>
  );
}

export default App;
