import React from "react";
import Card from "./card";
import data from "../assets/data"

const Gallery = () => {
    const cards = data.map(item => {
    return(
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="card-list">
            {cards}
        </div>
    )
}

export default Gallery