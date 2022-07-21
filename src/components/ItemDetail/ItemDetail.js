import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail =({prop})=>{

    const { title, price, stock, pictureurl, category, description } = prop;

    return (

    <>
        <div className="card mb-3 w-50 p-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img className="img-fluid rounded-start img-thumbnail" alt={`Producto ${title}`} src={`${pictureurl}`}></img>
                    <p className='text-center'><ItemCount stock={stock} initial={1} /></p>
                </div>
                <div class="col-md-8"><Link to={"/"} className="p-3 mb-2 bg-light text-secondary float-end text-decoration-none">X</Link> 
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <h6 className="text-secondary">Categoría: {category}</h6>
                        <h4>Precio: ${price}</h4>
                        <p>Págalo en <span>12 cuotas sin interés</span> de ${parseInt(price / 12)}</p>
                        <p>Envío gratis</p>
                        <p className=''>{description}</p>
                    </div>
                </div>
            </div>
        </div>
            
    </>
    )
}

export default ItemDetail