import React from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useForm } from "./useForm";

// const initialForm = {
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
// };

// const validateForm = (form) => {
//     const errors = {};
//     if (!form.name.trim()) {
//         errors.name = "Por favor, ingrese su nombre.";
//     }
//     if (!form.email.trim()) {
//         errors.email = "Por favor, ingrese su email.";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
//         errors.email = "Su correo es incorrecto.";
//     }
//     if (!form.phone) {
//         errors.phone = "Por favor, ingrese su teléfono.";
//     } else if (form.phone.length < 10 || form.phone.length > 12) {
//         errors.phone = "Su teléfono es incorrecto";
//     }
//     if (!form.address.trim()) {
//         errors.address = "Por favor, ingrese su dirección.";
//     }
//     return errors;
// };

const Formulary = () => {
    // const { errors } = useForm( initialForm, validateForm );

    return (
        <>
            <Form className="m-5">
                <h3>
                    Ingresa tus datos para proceder con la compra N° {localStorage.getItem("orderId")}.
                </h3>
                <Form.Label htmlFor="name">
                    Ingrese su nombre y apellido
                </Form.Label>
                <Form.Control type="text" name="name" placeholder="Gonzalo González" required value="{form.name}" />
                {/* {errors.name && <p>{errors.name}</p>} */}
                <Form.Label htmlFor="email" >
                    Email
                </Form.Label>
                <Form.Control type="email" name="email" placeholder="usuario@dominio.com" required value="{form.email}" />
                {/* {errors.email && <p>{errors.email}</p>} */}
                <Form.Label htmlFor="phone">
                    Teléfono
                </Form.Label>
                <Form.Control type="phone" name="phone" placeholder="+56 9 1 234 56 78" required value="{form.phone}" />
                {/* {errors.phone && <p>{errors.phone}</p>} */}
                <Form.Label htmlFor="address">
                    Dirección
                </Form.Label>
                <Form.Control type="text" name="address" placeholder="Calle Número, Comuna, Ciudad, Región" required value="{form.address}" />
                {/* {errors.address && (<p>{errors.address}</p>)} */}
                <p>Gracias por su compra</p>
                <Link to="/cart" >
                    <Button className="text-center me-2" variant="secondary" >
                        Cerrar
                    </Button>
                </Link>
                <Link to="/" >
                    <Button className="text-center ms-2" variant="primary" type="submit" >
                        Enviar orden
                    </Button>
                </Link>
            </Form>
        </>
    );
};

export default Formulary;
