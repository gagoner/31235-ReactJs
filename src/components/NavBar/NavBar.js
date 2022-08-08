import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

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
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-nav" to="/">
					<img src={logo} alt="Logo gagoner, un apret&oacute;n de manos" height="13" />
				</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink className="nav-link" to="/">
						Inicio
						</NavLink>
					</li>
					{categories.map((cat, i) => {
						return (
						<li className="nav-item" key={i}>
							<NavLink to={`/categoria/${cat}`} className="nav-link">
							{cat}
							</NavLink>
						</li>
	                    )
 	               })}
					<li className="nav-item">
						<NavLink className="nav-link" to="/">
						Contacto
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="cart">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;