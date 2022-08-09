import React from 'react';
import { useCartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <td className='align-middle text-center'>{product.id}</td>
            <td className='align-middle text-center'><img src={product.pictureurl} alt={product.title}  style={{ width: '100px' }}/></td>
            <td className='align-middle text-center'>{product.title}</td>
            <td className='align-middle text-center'>{product.quantity}</td>
            <td className='align-middle text-center'>{product.price}</td>
            <td className='align-middle text-center'>$ {product.quantity * product.price} <Button onClick={() => removeProduct(product.id)} variant="danger">X</Button></td>
        </>
    )
}

export default ItemCart