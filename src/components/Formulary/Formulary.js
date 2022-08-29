import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formulary() {

    const { clearCart, totalPrice } = useCartContext();

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
    
    const checkValidation = () => {
        let errors = validation;
    
        //first Name validation
        if (!form.name.trim()) {
            errors.name = "Por favor, ingrese su nombre";
        } else {
            errors.name = "";
        }
        //Phone validation
        if (!form.phone.trim()) {
            errors.phone = "Por favor, ingrese su teléfono";
        } else if (form.phone.length < 10 || form.phone.length > 17) {
            errors.phone = "El teléfono no es válido";
        }
    
        // email validation
        const emailCond =
        "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!form.email.trim()) {
            errors.email = "Se requiere ingresar un email";
        } else if (!form.email.match(emailCond)) {
            errors.email = "Por favor, ingrese su email";
        } else {
            errors.email = "";
        }
    
        //address validation
        if (!form.address.trim()) {
            errors.address = "La dirección es requerida";
        }
    
        setValidation(errors);
    };

    useEffect(() => {
        checkValidation();
    }, [form]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
        <div className="d-flex justify-content-center">
            <Form className="m-5 needs-validation" onSubmit={handleSubmit}>
                <h3>
                    Ingresa tus datos para proceder con la compra N° {localStorage.getItem("orderId")}.
                </h3>
                <Form.Label htmlFor="name">
                    Ingrese su nombre y apellido
                </Form.Label>
                <Form.Control type="text" name="name" placeholder="Gonzalo González" required value={form.name} onChange={(e) => handleChange(e)}/>
                {form.name && <p>{form.name}</p>}
                <Form.Label htmlFor="email" >
                    Email
                </Form.Label>
                <Form.Control type="email" name="email" placeholder="usuario@dominio.com" required value={form.email} onChange={(e) => handleChange(e)}/>
                {form.email && <p>{form.email}</p>}
                <Form.Label htmlFor="phone">
                    Teléfono
                </Form.Label>
                <Form.Control type="phone" name="phone" placeholder="+56 9 1 234 56 78" required value={form.phone} onChange={(e) => handleChange(e)}/>
                {form.phone && <p>{form.phone}</p>}
                <Form.Label htmlFor="address">
                    Dirección
                </Form.Label>
                <Form.Control type="text" name="address" placeholder="Calle Número, Comuna, Ciudad, Región" required value={form.address} onChange={(e) => handleChange(e)}/>
                {form.address && <p>{form.address}</p>}
                <h4 className="text-center my-2">¡Gracias por su compra!</h4>
                <div className="d-flex justify-content-center">
                    <Link to="/cart" >
                        <Button variant="secondary" className="m-2" >
                            Volver al carrito
                        </Button>
                    </Link>
                    <Link to="/" >
                        <Button variant="primary" type="submit" onClick={clearCart} className="m-2">
                            Enviar orden por {totalPrice()}
                        </Button>
                    </Link>
                </div>
            </Form>
        </div>
        </>
    );
};

export default Formulary;