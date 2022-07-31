import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/cartContext';

const ItemDetail =({prop})=>{

    const { title, price, stock, pictureurl, category, description, id } = prop;
    const { addProductToCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1);
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const onAdd = () => {
                setMostrarBoton(true);
                addProductToCart({title, price, pictureurl, cantidad, id})
    }

    return (

    <>
        <div id="alerta" className="card mb-3 w-50 p-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="img-fluid rounded-start img-thumbnail" alt={`Producto ${title}`} src={`${pictureurl}`}></img>
                    <div className='text-center'>
                    {!mostrarBoton ? 
                        <ItemCount stock={stock} initial={1}  onAdd={onAdd} actualizarCantidad={setCantidad}/>
                        :
                    <button  type="button" className="btn btn-info px-2 m-2"><Link to="/cart" className="text-secondary text-decoration-none">Comprar</Link></button>
                    }

                    </div>
                    
                </div>
                <div className="col-md-8"><Link to={"/"} className="p-3 mb-2 bg-light text-secondary float-end text-decoration-none">X</Link> 
                    <div className="card-body">
                        <p className="card-title h5">{title}</p>
                        <p className="text-secondary h6">Categoría: {category}</p>
                        <p className="h4">Precio: ${price}</p>
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