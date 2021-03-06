import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, actualizarCantidad }) => {

    const [count, setCount] = useState(initial);

    let incrementCount = () => {
        if (count < stock) {
            setCount(count + 1);
            actualizarCantidad(count + 1);
        } else {
            // Alerta de stock

            const alertPlaceholder = document.getElementById("alerta");
            const elemento = document.createElement('div');
            elemento.innerHTML = [`<div class="alert alert-danger  alert-dismissible fade show" role="alert">`,`<div>Sólo se dispone de ${stock} productos en stock.</div>`,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','</div>'].join('');
            alertPlaceholder.append(elemento);
        }
    };
    
    let decrementCount = () => {
        if (count > initial) {
            setCount(count - 1);
            actualizarCantidad(count -1);
        }
    };

    return (  
    <>
        <p className='card-text text-start h2'>Cantidad: {count}</p>
        <div className="buttons">
            <button  className='btn btn-light m-1' onClick={decrementCount}>-</button>
            <button  className='btn btn-light m-1' onClick={incrementCount}>+</button>
        </div>
        <p className="text-secondary h6">Stock: {stock}</p>        
        <button id="agregarCarrito" className="btn btn-secondary m-2" onClick={onAdd}>Agregar al carrito</button>
    </>
    );
};

export default ItemCount;