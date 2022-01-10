import React from "react"
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <div className="Footer">
                {props.titulo}
            </div>
            <div className="Conteudo">
                {props.children}
            </div>
        </div>
    )
}

export default Card