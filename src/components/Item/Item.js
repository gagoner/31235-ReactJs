import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item =({item})=>{
	return (
        <>
        <Col>
        <Card style={{ width: '300px' }} className="mx-auto my-auto">
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
                <Card.Title>Precio: ${item.price}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">                    
                    <Link to={`/detalle/${item.id}`} className="p-3 mb-2 text-decoration-none">
                        Ver detalles
                    </Link>
                </Card.Subtitle>
                <Link to={`/detalle/${item.id}`} >
                    <Card.Img variant="top" alt={`Imagen del Producto ${item.title}`} src={`../.${item.pictureurl}`} className="rounded"/>
                </Link>                
                <Card.Text>Categoría: {item.category}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </>
	);
};

export default Item;