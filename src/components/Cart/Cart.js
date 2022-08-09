import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

    const Cart = () =>{
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Pablo",
			email: "Pablo@gmail.com",
			phone: "123123",
			address: "asdd",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link to="/">Seguir comprando</Link>
			</>
		);
	}

	return (
		<>
		<Table>
			<thead>
				<tr>
					<th>#</th>
					<th></th>
					<th>Producto</th>
					<th>Cantidad</th>
					<th>Precio unitario</th>
					<th>Subtotal</th>
					<th></th>
				</tr>
			</thead>
            <tbody>
				{cart.map((product) => (
					<tr><ItemCart key={product.id} product={product} /></tr>					
				))}
			</tbody>
		</Table>

			<Row>total: {totalPrice()}</Row>
			<button onClick={handleClick}>Finalizar compra</button>
		</>
	);
	
}

export default Cart