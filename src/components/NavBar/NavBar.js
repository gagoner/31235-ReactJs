import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

	const [categories, setCategories] = useState([]);

    const db = getFirestore();

	const getCategories = async () => {
        const productSnapshot = await getDocs(collection(db, "products"));
        const productCat = productSnapshot.docs
            .map(cat => cat.data().category)
            .reduce((acc, el) => {
                if (!acc.find(d => d === el)) {
                    acc.push(el)
                }
                return acc
            }, []);
        setCategories(productCat)
    };

    useEffect(() => {
        getCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

	return (
	<Navbar collapseOnSelect expand="sm" bg="light" variant="light">
		<NavLink to="/">
				<img src={logo} alt="Logo gagoner, un apret&oacute;n de manos" height="13" />
		</NavLink>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
				</Nav>
				<Nav>
					<NavLink className="nav-link" to="/">
						Inicio
					</NavLink>
					{categories.map((cat, i) => {
						return (
						<NavLink to={`/categoria/${cat}`} className="nav-link" key={i}>
							{cat}
						</NavLink>
						)
					})}
					<NavLink className="nav-link" to="/">
						Contacto
					</NavLink>
					<NavLink className="nav-link" to="cart">
						<CartWidget />
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;