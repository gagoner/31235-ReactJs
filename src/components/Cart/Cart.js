
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
            <div className=''>
                <h4>No hay productos en el carrito</h4>
                    <Link to="/">
                        <Button className='float-end text-decoration-none' variant="info">Seguir comprando</Button>
                    </Link>
            </div>
        )
    }

    return (
        <>
            <div className='cart-container'>
                {cartListItems.length === 0 ?
                    <KeepBuying />
                    :
                    <>
                        <h2>Carrito</h2>
                        <Row className='title-container'>
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
            </div>
            {totalPrice > 0 &&
                <div className='check-out'>
                    <p className='check-out__total-price'>El total de tu compra es ${totalPrice}</p>
                    <div className='check-out__btn'>
                        <Link to="/check-out">
                            <button variant="contained">Finalizar compra</button>
                        </Link>
                        <button variant="outlined" onClick={deleteAll}>Eliminar todo</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart