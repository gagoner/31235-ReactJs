import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useForm } from "./useForm";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

const initialForm = {
    name: "",
    email: "",
    phone: "",
    address: "",
};

const validateForm = (form) => {

    const errors = {};
    if (!form.name.trim()) {
        errors.name = "Por favor ingresar el nombre";
    }
    if (!form.email.trim()) {
        errors.email = "Por favor ingresar el email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        errors.email = "Email inválido, ingréselo nuevamente";
    }
    if (!form.phone) {
        errors.phone = "Por favor ingrese el teléfono";
    } else if (form.phone.length < 9 || form.phone.length > 12) {
        errors.phone = "Teléfono inválido, ingréselo nuevamente";
    }
    if (!form.address.trim()) {
        errors.address = "Por favor ingrese la dirección";
    }
    return errors;
};

const Formulary = () => {

	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

    const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validateForm );

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
            <Modal.Title>¡Gracias por tu compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>
                Ingresa tus datos para proceder con la compra.
            </h1>
            <Form>
                <Form.Label htmlFor="name">
                    Ingrese su nombre y apellido
                </Form.Label>
            <Form.Control type="text" name="name" placeholder="Gonzalo González" required value={form.name} onBlur={handleBlur} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            <Form.Label htmlFor="email" >
              Email
            </Form.Label>
            <Form.Control type="email" name="email" placeholder="usuario@dominio.com" required value={form.email} onBlur={handleBlur} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <Form.Label htmlFor="phone">
              Teléfono
            </Form.Label>
            <Form.Control type="phone" name="phone" placeholder="+56 9 1 234 56 78" required value={form.phone} onBlur={handleBlur} onChange={handleChange} />
            {errors.phone && <p>{errors.phone}</p>}
            <Form.Label htmlFor="address">
              Dirección
            </Form.Label>
            <Form.Control type="text" name="address" placeholder="Calle Número, Comuna, Ciudad, Región" required value={form.address} onBlur={handleBlur} onChange={handleChange} />
            {errors.address && (<p>{errors.address}</p>)}
            <p>Gracias por su compra</p>
            {/* <Link to="/"><Button type="submit" onClick={handleSubmit}>Comprar</Button></Link> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="primary" onClick={() => { handleClose(); handleSubmit() }}>Enviar orden</Button>
        </Modal.Footer>
    </Modal>
);
};
export default Formulary;
