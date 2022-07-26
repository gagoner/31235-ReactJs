import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-nav">
					<img src={logo} alt="Logo gagoner, un apret&oacute;n de manos" height="13" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to={"/"}  className="nav-link active nav__a--active" aria-current="page" href="index.html">Inicio</Link>
						</li>
						<li className="nav-item">
							<Link to={"/category/pulseras"}  className="nav-link" href="index.html">Pulseras</Link>
						</li>
						<li className="nav-item">
							<Link to={"/category/collares"}  className="nav-link" href="index.html">Collares</Link>
						</li>
						<li className="nav-item">
							<Link to={"/"}  className="nav-link" href="index.html">Contacto</Link>
						</li>
						<li className="nav-item">
							<Link to={"/"}  className="nav-link" href="index.html"><CartWidget />(0)</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
};

export default NavBar;