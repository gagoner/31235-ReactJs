import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const CartWidget = () => {

    const { cartListItems, setCartListItems } = useContext(CartContext);

    const deleteProduct = (prod) => {
    const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod)
    setCartListItems(filteredProduct)
};
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const KeepBuying = () => {
        return (
            <div className='text-decoration-none'>
                <h4>No hay productos en el carrito</h4>
                    <Link to="/">
                        <Button className='float-end text-decoration-none' variant="info" onClick={toggleShowA}>Seguir comprando</Button>
                    </Link>
            </div>
        )
    }

    return (
    <>
        <Col md={12} className="mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" id="basic-button" viewBox="0 0 16 16" onClick={toggleShowA}>
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <ToastContainer className="p-3" position='top-end' style={{zIndex:9}}>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <strong className="me-auto">Artículos añadidos</strong>
                        <small>Total: XX</small>
                    </Toast.Header>
                    <Toast.Body>
                        {cartListItems.map((product, i) => {
                            return (
                            <>
                                    <Row className='cart-items-products' key={i}>
                                        <Col>
                                            <Figure>
                                                <Figure.Image src={`${product.pictureurl}`} width={50} height={30} alt={`Producto ${product.title}`} className="rounded me-2 text-center"/>
                                            </Figure>
                                        </Col>
                                        <Col className='text-center'>
                                            <h4>{product.title}</h4>
                                            <p><b>${product.price}</b> - Cantidad: {product.cantidad}</p>
                                        </Col>
                                        <Col>
                                            <Button className='float-end text-decoration-none' variant="danger" onClick={() => deleteProduct(product)}>X</Button>
                                        </Col>
                                    </Row>
                            </>
                            )
                        })}
                            {cartListItems.length === 0 ? KeepBuying() : 
                            <>
                                <Toast.Body>
                                    <div className="float-end text-decoration-none">
                                        <Link to="/cart"><Button variant="info" className="text-decoration-none" onClick={toggleShowA}>Comprar</Button></Link>
                                    </div>
                                </Toast.Body>
                            </>
                            }
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Col>
    </>
);
};

export default CartWidget;