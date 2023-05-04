import React from 'react';

function Card(props){
    return (
        <>
        <div className="card" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
            </div>
        </div>
        </>
    )
}

export default Card;