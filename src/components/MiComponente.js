import React from 'react';

class MiComponente extends React.Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','Piña','Lomo'],
            calorias:300
        };
        
        return(
            <React.Fragment>
                <h1>Hola pive, ¿qué tal vamos?</h1>
                <h2>Esta es la receta del día</h2>

                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return  (
                                <li>{ingrediente}</li>
                            )
                        })
                    }
                </ol>

            </React.Fragment>
            
        )
    }

}

export default MiComponente;