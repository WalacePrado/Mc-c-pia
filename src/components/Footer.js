import React from "react";
import "../styles/Footer.css";
import logo2 from "../assets/logo2.webp";
import appStore from "../assets/appStore.png";
import google from "../assets/google.png";
import mc from "../assets/mc.webp";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo2} alt="Logo" className="footer-logo-img" />
          </div>
          <div className="footer-text">
            <h2>Já baixou o nosso App?</h2>
            <p>
              Peça seu delivery, veja o menu, baixe stickers, peça e retire,
              encontre os restaurantes mais próximos, tenha todos os cupons e
              muito mais.
            </p>
          </div>
          <div className="footer-button">
            <a href="#contact" className="btn-footer">
              Baixe agora
            </a>
          </div>
        </div>
      </footer>

      <footer className="footer bg-white text-dark py-4">
        <div className="container">

          <div className="row">
            <div className="col-md-3">
              <h5>Quem Somos</h5>
              <ul className="list-unstyled">
                <li>Institucional</li>
                <li>Franquias</li>
                <li>Trabalhe Conosco</li>
                <li>Privacidade</li>
                <li>Desenvolvimento Sustentável e Compromisso Social</li>
                <li>Portas Abertas</li>
                <li>Publicidade Responsável</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Família</h5>
              <ul className="list-unstyled">
                <li>Lançamentos</li>
                <li>McLanche Feliz</li>
                <li>Méqui Box</li>
                <li>Compromissos com as Famílias</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Méqui pra você</h5>
              <ul className="list-unstyled">
                <li>App do Méqui</li>
                <li>McDelivery</li>
                <li>Méqui no iFood</li>
                <li>Peça e Retire</li>
                <li>Gift Card</li>
                <li>Méqui Zap</li>
                <li>Drive-Thru</li>
                <li>Use Méqui</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li>Contato</li>
              </ul>
            </div>
          </div>


          <div className="row mt-4 align-items-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <div className="social-icons">
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaYoutube className="social-icon" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <img src={appStore} alt="App Store" className="store-badge" />
              <img src={google} alt="Google Play" className="store-badge" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 d-flex justify-content-start">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#privacy" className="footer-link">
                    Privacidade
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#terms" className="footer-link">
                    Termos e Condições
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="copyright">
                <img src={mc} alt="Logo" className="footer-logo-mc" />©
                McDonald's 2024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
