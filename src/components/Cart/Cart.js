import React from "react";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart/ItemCart";
import CartContext from '../../context/cartContext';
import Modal from '../../components/Modal/Modal'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Button';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

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
				<Link to="/">Hacer compras</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
			<button onClick={handleClick}>Emitir compra</button>
		</>
	);
	

/*
    const { cartListItems, setCartListItems, totalPrice, setTotalPrice } = useContext(CartContext)

    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        mail: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        }),
        total: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue, total: totalPrice})
        saveData({...order, buyer: formValue, total: totalPrice})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const saveData = async (newOrder) =>{
        const db = getFirestore()
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        deleteAll()
        setShowModal(false)

        return (
            <>
                <Toast onClose={() => setShow(true)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Compra confirmada</strong>
                        <small>¡Gracias!</small>
                    </Toast.Header>
                    <Toast.Body>
                        `Tu pedido N° ${orderDoc.id} fue correctamente procesado`
                    </Toast.Body>
                </Toast>
            </>
        )
    }

    const deleteProduct = (prod) => {

        const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod)
        setCartListItems(filteredProduct)

        setTotalPrice(totalPrice - prod.price * prod.cantidad)
    }

    const deleteAll = () => {
        setCartListItems([]);
        localStorage.setItem('products', JSON.stringify([]))
        setTotalPrice(0)
        localStorage.setItem('total-price', 0)
    }

    const KeepBuying = () => {
        return (
            <Row className=''>
                <h4>No hay productos en el carrito</h4>
                    <Link to="/">
                        <Button className='float-end text-decoration-none' variant="info">Seguir comprando</Button>
                    </Link>
            </Row>
        )
    }

    return (
        <>
            <div className=''>
                {cartListItems.length === 0 ?
                    <KeepBuying />
                    :
                    <>
                        <p className="h1 text-center mb-5">Carrito</p>
                        <Row className=''>
                            <Col className='text-center align-middle'>Producto</Col>
                            <Col className='text-center align-middle'>Nombre</Col>
                            <Col className='text-center align-middle'>Precio Unitario</Col>
                            <Col className='text-center align-middle'>Cantidad</Col>
                            <Col className='text-center'></Col>
                        </Row>
                        <hr />
                    </>
                }
                {cartListItems.map((product, i) => {
                    return (
                        <Row className='' key={i}>
                            <Col className='text-center align-middle'>
                                <Figure>
                                    <Figure.Image src={`${product.pictureurl}`} width={50} height={30} alt={`Producto ${product.title}`} className="rounded me-2 text-center"/>
                                </Figure>
                            </Col>
                            <Col className='text-center align-middle'>{product.title}</Col>
                            <Col className='text-center align-middle'>${product.price}</Col>
                            <Col className='text-center align-middle'>{product.cantidad}</Col>
                            <Col className='text-center align-middle'>
                                <Button className='float-end text-decoration-none' variant="danger" onClick={() => deleteProduct(product)}>X</Button>
                            </Col>
                        </Row>
                    )
                })}
            {totalPrice > 0 &&
                <Row className=''>
                    <p className=''>El total de tu compra es ${totalPrice}</p>
                    <div className=''>
                        <Link to="/">
                            <Button onClick={() => setShowModal(true)}>Finalizar compra</Button>
                        </Link>
                        <Button className='float-end text-decoration-none' variant="danger" onClick={deleteAll}>Eliminar todo</Button>
                    </div>
                </Row>
            }
            </div>
            <Modal title={'Finalizar mi compra'} open={showModal} handleClose={() => setShowModal(false)}>
                <Form className='check-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else,
                        </Form.Text>
                </Form.Group>
                    <Form.Text
                        id="standard-basic"
                        name="name"
                        label="Tu nombre completo"
                        variant="standard"
                        type="text"
                        value={formValue.name}
                        onChange={handleChange}
                        required
                    />
                    <Form.Text
                        id="standard-basic"
                        name="phone"
                        label="Teléfono"
                        variant="standard"
                        type="number"
                        value={formValue.phone}
                        onChange={handleChange}
                        required
                    />
                    <Form.Text
                        id="standard-basic"
                        name="mail"
                        label="Email"
                        variant="standard"
                        type="email"
                        value={formValue.mail}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained">Enviar</Button>
                </Form>
            </Modal>
        </>
    ) */
}

export default Cart