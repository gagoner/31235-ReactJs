import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Formulary() {

    const { clearCart, totalPrice } = useCartContext();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });
    
    const [validation, setValidation] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });


    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    useEffect(() => {

        let errors = validation;
    
        //first Name validation
        if (!form.name.trim()) {
            errors.name = "Por favor, ingrese su nombre";
        } else if (form.name.length < 4) {
            errors.name = "El nombre no es válido";
        } else {errors.name = ""}

        //Phone validation
        form.phone = form.phone.replace(/^\+/g, 0)
        if (form.phone.trim().length===0) {
            errors.phone = "Por favor, ingrese su teléfono";
        } else if (form.phone.replace(/\D/g, "").length > 7 && form.phone.replace(/\D/g, "").length < 12) {
            errors.phone = ""
        } else {
            errors.phone = "El teléfono no es válido"
        }
    
        // email validation
        if (form.email.trim().length===0) {
            errors.email = "Se requiere ingresar un email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            errors.email = "El email no es válido";
        } else {
            errors.email = "";
        }
    
        //address validation
        if (form.address.trim().length===0) {
            errors.address = "La dirección es requerida";
        } else {errors.address = ""}
    
        setValidation(errors);

    }, [form, validation]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <>
        <div className="d-flex justify-content-center">
            <Form className="m-5 needs-validation" onSubmit={handleSubmit}>
                <h3>
                    Ingresa tus datos para proceder con la compra.
                </h3>
                <Form.Label htmlFor="name">
                    Ingrese su nombre y apellido
                </Form.Label>
                <Form.Control type="text" name="name" placeholder="Gonzalo González" autoComplete="off" required value={form.name} onChange={(e) => handleChange(e)}/>
                {validation.name && <p className="text-danger">{validation.name}</p>}
                <Form.Label htmlFor="email" >
                    Email
                </Form.Label>
                <Form.Control type="email" name="email" placeholder="usuario@dominio.com" autoComplete="off" required value={form.email} onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
                {validation.email && <p className="text-danger">{validation.email}</p>}
                <Form.Label htmlFor="phone">
                    Teléfono
                </Form.Label>
                <Form.Control type="phone" name="phone" placeholder="+56 9 1 234 56 78" autoComplete="off" required value={form.phone} onChange={(e) => handleChange(e)}/>
                {validation.phone && <p className="text-danger">{validation.phone}</p>}
                <Form.Label htmlFor="address">
                    Dirección
                </Form.Label>
                <Form.Control type="text" name="address" placeholder="Calle Número, Comuna, Ciudad, Región" autoComplete="off" required value={form.address} onChange={(e) => handleChange(e)}/>
                {validation.address && <p className="text-danger">{validation.address}</p>}
                <div className="d-flex justify-content-center">
                    <Link to="/cart" >
                        <Button variant="secondary" className="m-2" >
                            Volver al carrito
                        </Button>
                    </Link>
                        <Button variant="primary" type="submit" onClick={handleSubmit} className="m-2">
                            Enviar orden por {totalPrice()}
                        </Button>
                </div>
            </Form>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
                <Modal.Title>¡Gracias por su compra!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Su pedido N° {localStorage.getItem("orderId")} por {totalPrice()} ya fue generado. Revise su correo electrónico para más antecedentes.
            </Modal.Body>
            <Modal.Footer>
                <Link to="/" >
                    <Button variant="secondary" onClick={() => {clearCart(); handleClose()}}>
                        Cerrar
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default Formulary;