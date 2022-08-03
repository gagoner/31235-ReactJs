import React from "react";
import { Link } from 'react-router-dom';

const Item =({item})=>{

    const {title, price, pictureurl, category, id} = item;

    return(
    <>
    <div className="p-3 mb-2 bg-dark text-white">
        <img alt="Imagen al azar"  src={pictureurl} />
        <h3>{title}</h3>
        <h6 className="text-white-50">Categoría: {category}</h6>
        <h4 className="mb-2 text-muted">
            Precio:{price}
        </h4>
        <Link to={`/item/${id}`}>
            Ver detalles
        </Link>
    </div>

    </>
    );
};

export default Item;