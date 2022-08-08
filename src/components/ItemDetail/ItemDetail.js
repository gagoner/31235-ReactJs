import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
				<img className="detail__image" src={data.pictureurl} alt="" />
				<div className="content">
					<h1>{data.title}</h1>
					{goToCart ? (
						<Link to="/cart"> Terminar al carrito</Link>
					) : (
						<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail