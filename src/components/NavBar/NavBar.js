import React from 'react';
import { Link } from 'react-router-dom';
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

        getCategories()

    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid" key="nav1">
				<Link to={"/"} className="navbar-nav">
					<img src={logo} alt="Logo gagoner, un apret&oacute;n de manos" height="13" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent" key="nav3">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0" key="ul1">
						<li className="nav-item" key="5">
							<Link to={"/"}  className="nav-link active nav__a--active" aria-current="page" href="index.html">Inicio</Link>
						</li>

                        {categories.map((cat, i) => {
                            return (
								<li className="nav-item" key={i}>
									<Link to={`/category/${cat}`} className="nav-link">
										{cat}
									</Link>
								</li>
                            )
                        })}
						<li className="nav-item" key="3">
							<Link to={"/"}  className="nav-link" href="index.html">Contacto</Link>
						</li>
						<li className="nav-item" key="4">
							<CartWidget className="nav-link" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
};

export default NavBar;