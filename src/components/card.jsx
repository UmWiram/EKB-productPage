import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            {props.stock === 0 && <div className="card--badge">Sold Out</div>}
            <img src={`../images/${props.img}`} className="card-image" />
            <p className="card-title">{props.title}</p>
            <p className="price">{props.price}</p>
        </div>
    )

}