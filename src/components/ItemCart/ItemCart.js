import React from 'react';
import { useCartContext } from '../../context/cartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <td>{product.id}</td>
            <td><img src={product.pictureurl} alt={product.title}  style={{ width: '100px' }}/></td>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>${product.quantity * product.price}</td>
            <td><button onClick={() => removeProduct(product.id)}>X</button></td>
        </>
    )
}

export default ItemCart