import React from "react";
import { Link } from 'react-router-dom';

const Item =({item})=>{
	return (
        <>
            <Link to={`/detalle/${item.id}`} className="p-3 mb-2 text-decoration-none">
                <img alt={`Imagen del Producto ${item.title}`}  src={item.pictureurl} />
                <h3>{item.title}</h3>
                <h6 className="">Categoría: {item.category}</h6>
                <h4 className="mb-2">
                    Precio:{item.price}
                </h4>
                    <p>Ver detalles</p>
            </Link>
        </>
	);
};

export default Item;