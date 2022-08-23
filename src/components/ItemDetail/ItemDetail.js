import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/cartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<Card style={{ width: '50%' }} className="mx-auto mt-2" >
			<Card.Header className="mx-0">
				Detalle del producto
			</Card.Header>
			<Card.Body>
				<Row>
					<Col>
						<Card.Title>{data.title}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Categoría: {data.category}   |   Stock: {data.stock}</Card.Subtitle>
						<Card.Img variant="top" alt={`Imagen del Producto ${data.title}`} src={data.pictureurl} className="rounded" style={{ width: '80%' }}/>
						<Card.Text>
							Precio: ${data.price}
						</Card.Text>
						{goToCart ? (
							<Button  style={{ textDecoration: 'white' }} variant="success"><Link to="/cart">Comprar</Link></Button>
						) : (
							<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
						)}
					</Col>
					<Col>
						<Card.Text className="mt-2">{data.description}</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default ItemDetail