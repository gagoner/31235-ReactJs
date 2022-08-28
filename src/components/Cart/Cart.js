import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart/ItemCart";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () =>{

	const { cart, totalPrice } = useCartContext();

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
										<Button >
											Finalizar compra
										</Button>
									</Link>
								</td>
							</tr>
						</tbody>
					</Table>
				</Card>
			</>
	);
}

export default Cart