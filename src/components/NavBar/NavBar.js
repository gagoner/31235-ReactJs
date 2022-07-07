import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a href="index.html" className="navbar-brand">
					<img src={logo} alt="Logo gagoner, un apret&oacute;n de manos" height="13" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active nav__a--active" aria-current="page" href="index.html">Inicio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="index.html">Sobre m&iacute;</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="index.html">Servicios</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="index.html">Experiencia</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="index.html"><CartWidget />(0)</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
};

export default NavBar;