import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Cart = () =>{
	
	const [showA, setShowA] = useState(true);

    const [loading, setLoading] = useState(true);

	const { cart, totalPrice } = useCartContext();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


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
		localStorage.removeItem("orderId");
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => {localStorage.setItem("orderId", id);});
	};

	if (cart.length === 0) {
		return (
			<>
			<Card style={{ width: '80%' }} className="mx-auto mt-2" >
				<p>No hay elementos en el carrito</p>
				<Link to="/"><Button variant="secondary" >Continuar comprando</Button></Link>
			</Card>
			</>
		);
	}



	return (
		<>
		{loading ? (
			<>
		<Card style={{ width: '80%' }} className="mx-auto mt-2" >
		<Table striped bordered hover>
			<thead>
				<tr>
					<th className="text-center">#</th>
					<th colSpan={2} className="text-center">Producto</th>
					<th className="text-center">Cantidad</th>
					<th className="text-center">Precio unitario</th>
					<th className="text-center">Subtotal</th>
				</tr>
			</thead>
            <tbody>
				{cart.map((product) => (
					<tr className="text-center" key={"tr" + product.id}><ItemCart key={product.id} product={product} /></tr>					
				))}
				<tr>
					<td colSpan={5} className="text-end">Total:</td>
					<td className="text-center" >$ {totalPrice()}</td>
				</tr>
				<tr>
					<td colSpan={6} className="text-end"><Button onClick={() => { handleShow(true); handleClick();}}>Finalizar compra</Button></td>
				</tr>
			</tbody>
		</Table>
		</Card>
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
			<Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
			<Modal.Body>I will not close if you click outside me. Don't even try to press escape key.</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>Cerrar</Button>
				<Button variant="primary" onClick={() => { handleClose(); setLoading(false)}}>Enviar orden</Button>
			</Modal.Footer>
		</Modal>
		</>
		):(
		 <>
		<ToastContainer className="p-3" position="middle-center">
		<Toast onClose={() => setShowA(false) } show={showA} delay={10000} autohide>
          <Toast.Header>
            <strong className="me-auto">¡Felicitaciones! Tu compra está confirmada</strong>
            <small>N° de Orden: {localStorage.getItem("orderId")}</small>
          </Toast.Header>
          <Toast.Body>Gracias por tu compra. Pronto te llegará un correo con los datos de tu </Toast.Body>
        </Toast>
		</ToastContainer>
		</>
		)
	}
		</>
	);
	
}

export default Cart