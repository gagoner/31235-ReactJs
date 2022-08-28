import React from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulary = () => {

    return (
        <>
            <Form className="m-5">
                <h1>
                    Ingresa tus datos para proceder con la compra.
                </h1>
                <Form.Label htmlFor="name">
                    Ingrese su nombre y apellido
                </Form.Label>
            <Form.Control type="text" name="name" placeholder="Gonzalo González" required value="{form.name}" />
            <Form.Label htmlFor="email" >
                Email
            </Form.Label>
            <Form.Control type="email" name="email" placeholder="usuario@dominio.com" required value="{form.email}" />
            <Form.Label htmlFor="phone">
                Teléfono
            </Form.Label>
            <Form.Control type="phone" name="phone" placeholder="+56 9 1 234 56 78" required value="{form.phone}" />
            <Form.Label htmlFor="address">
                Dirección
            </Form.Label>
            <Form.Control type="text" name="address" placeholder="Calle Número, Comuna, Ciudad, Región" required value="{form.address}" />
            <p className="mt-2" >Gracias por su compra</p>
            <Link to="/cart" >
                <Button className="text-center me-2" variant="secondary" >
                    Cerrar
                </Button>
            </Link>
            <Link to="/" >
                <Button className="text-center ms-2" variant="primary" >
                    Enviar orden
                </Button>
            </Link>
        </Form>
        </>
    );
};

export default Formulary;
