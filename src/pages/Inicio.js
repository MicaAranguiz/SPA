import React from 'react';
import './Inicio.css';
import Carousel from '../componentes/Carousel';
import foto1 from '../foto1.jpeg'
import foto2 from '../foto2.jpeg'
import foto3 from '../foto3.jpeg'


function Inicio() {
    return (
        <>


            <Carousel imagen={foto1} imagen1={foto2} imagen2={foto3}/>
            
        </>
    )
}
export default Inicio;

