import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import "../styles/NavbarComponent.css";
import logo from "../assets/Logo.png";
import Cel from "../assets/Descarga.png";
import iconImage from "../assets/iconeMc.png";

function NavbarComponent() {
  return (
    <BootstrapNavbar className="navbar-custom" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cardápio</Nav.Link>
            <Nav.Link href="#features">Lançamentos</Nav.Link>
            <Nav.Link href="#pricing">Quem Somos</Nav.Link>
            <Nav.Link href="#pricing">Família</Nav.Link>
            <Nav.Link href="#pricing">Pormoções</Nav.Link>
            <Nav.Link href="#pricing">Méqui Pra Você</Nav.Link>
            <Nav.Link href="#pricing">McDia Feliz</Nav.Link>
          </Nav>
          <div className="navbar-right">
            <Nav.Link href="#profile" className="nav-icon-link">
              <img src={Cel} alt="Cel" className="navbar-cel" />
              Baixe o App
            </Nav.Link>
            <Button className="nav-button">
              <img src={iconImage} alt="Ícone" className="button-icon" />
              Peça seu Méqui
            </Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavbarComponent;
