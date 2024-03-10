import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="navColor shadow-sm " >
      <Container>
        <Navbar.Brand href="#home" as={Link} className="nav-link">
          <img
            src="https://iset-tuc.infd.edu.ar/sitio/wp-content/uploads/2019/12/pagina2.png"
            alt="Logo de RollingCoffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink as={Link} to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink as={Link} to="/nosotros" className="nav-link ">
              nuestro Equipo
            </NavLink>
            <a href="https://iset-tuc.infd.edu.ar/aula/acceso.cgi" className="nav-link " target="_blanck">
              campus virtual
            </a>
            <a href="https://iset-tuc.infd.edu.ar/sitio/contacto/" className="nav-link" target="_blanck">
              contacto
            </a>
            <a href="https://iset-tuc.infd.edu.ar/sitio/blog/" className="nav-link " target="_blanck">
              blog
            </a>
            
            


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
