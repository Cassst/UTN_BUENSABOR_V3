import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <img src="/logo.png" alt="FooterLogo" className="" />
          <p className="my-5 md:w-40">
            Saborea el arte donde cada plato es una obra maestra culinaria.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-black">Buen Sabor</h6>
          <a className="link link-hover">Sobre Nosotros</a>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Empleos</a>
          <a className="link link-hover">Q&A</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <a className="link link-hover">Terminos&Condiciones</a>
          <a className="link link-hover">Política de privacidad</a>
          <a className="link link-hover">Política de cookies</a>
        </nav>
      </footer>
      <hr />
      <footer className="footer footer-center xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <p>Copyright © 2024 - Todos los derechos reservados por Buen Sabor Company.</p>
          <p>Cnel Rodríguez 273, M5500 Mendoza</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
