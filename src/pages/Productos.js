import React from 'react';
import Card from '../componentes/Card';
import card1 from '../card1.jpg'
import './Productos.css';

function Productos() {
    return (
        <>
            <div class="disposicion">
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
                <Card img={card1} titulo="Temporada Otoño-Inivierno" descripcion="Las mejores zapatillas de la temporada" />
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

