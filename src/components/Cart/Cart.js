import React, { useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Cart = () =>{
	
	const [showA, setShowA] = useState(true);

    const [loading, setLoading] = useState(true);

	const { cart, totalPrice } = useCartContext();

	const [show, setShow] = useState(false);

	// const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const navigate = useNavigate();

	const order = {
		buyer: {
			name: "form.name",
			email: "form.email",
			phone: "form.phone",
			address: "form.address",
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
			<Card className="m-5 p-3" >
				<Card.Title className="text-center">
					No hay elementos en el carrito
				</Card.Title>
				<Card.Text className="mt-2 text-center">
					<Link to="/">
						<Button variant="secondary" >
							Continuar comprando
						</Button>
					</Link>
				</Card.Text>
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
								<tr className="text-center" key={"tr" + product.id}>
									<ItemCart key={product.id} product={product} />
								</tr>					
							))}
							<tr>
								<td colSpan={5} className="text-end">Total:</td>
								<td className="text-center" >$ {totalPrice()}</td>
							</tr>
							<tr>
								<td colSpan={6} className="text-end">
									<Link to="/checkout">
										<Button onClick={() => { handleShow(true); handleClick();}}>
											Finalizar compra
										</Button>
									</Link>
								</td>
							</tr>
						</tbody>
					</Table>
				</Card>
				{/* <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
					<Modal.Header closeButton>
					<Modal.Title>
						Modal title
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formulary />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
					<Button variant="primary" onClick={() => { handleClose(); setLoading(false)}}>
						Enviar orden
					</Button>
				</Modal.Footer>
			</Modal> */}
			</>
		):(
			<>
			<ToastContainer className="p-3" position="middle-center">
				<Toast onClose={() => {setShowA(false); navigate('/')}} show={showA} delay={10000} autohide>
					<Toast.Header>
						<strong className="me-auto">
							¡Felicitaciones! Tu compra está confirmada
						</strong>
						<small>
							N° de Orden: {localStorage.getItem("orderId")}
						</small>
					</Toast.Header>
					<Toast.Body>
						Gracias por tu compra. Pronto te llegará un correo con los datos de tu compra.
					</Toast.Body>
				</Toast>
			</ToastContainer>
			</>
		)
	}
		</>
	);
	
}

export default Cart