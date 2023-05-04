import React from 'react';
import Card from '../componentes/Card';
import card1 from '../card1.jpg'
import card2 from '../card2.jpg'
import card3 from '../card3.png'
import card4 from '../card4.jpg'
import card5 from '../card5.jpg'


import './Productos.css';

function Productos() {
    return (
        <>
            <div class="disposicion">
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card2} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card3} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card4} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card5} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
            </div>
            <div class="disposicion">
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
            </div>
        </>
    )
}
export default Productos;

