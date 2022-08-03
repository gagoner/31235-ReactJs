
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

    const Cart = () =>{

    const { cartListItems, setCartListItems, totalPrice, setTotalPrice } = useContext(CartContext)

    const deleteProduct = (prod) => {

        const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod)
        setCartListItems(filteredProduct)

        setTotalPrice(totalPrice - prod.price * prod.cantidad)
    }

    const deleteAll = () => {
        setCartListItems([]);
        setTotalPrice(0)
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
                            <Button>Finalizar compra</Button>
                        </Link>
                        <Button className='float-end text-decoration-none' variant="danger" onClick={deleteAll}>Eliminar todo</Button>
                    </div>
                </Row>
            }
            </div>
        </>
    )
}

export default Cart