import { Container, Nav, Navbar as Barra, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return( 
            <Barra bg="light" expand="lg">
        <Container>
            <Barra.Brand class = "text-danger" >
                <Link to="/">Minecraft By Jockerel</Link>
            </Barra.Brand>
            <Barra.Toggle aria-controls="basic-navbar-nav" />
            <Barra.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    <NavLink to = "/item">Item</NavLink>
                </Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Más pedidos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mapas Excéntricos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Temáticos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Personalizados</NavDropdown.Item>
                </NavDropdown>
                
                <CartWidget />
            </Nav>
            </Barra.Collapse>
        
        </Container>
        </Barra>
        )
  ;
};

export default NavBar;
