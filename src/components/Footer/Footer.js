import React from "react";
import "./Footer.css";

import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
          <p className="p-sociais-footer">Me siga nas redes sociais:</p>
          <div className="redes-sociais">
          <a
            href="https://www.instagram.com/teacherdaize_inglespelabiblia/"
            target="blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa"
            target="blank"
          >
            <FiYoutube />
          </a>
          <a href="https://www.tiktok.com/@daizelellys_ingles" target="blank">
            <FaTiktok />
          </a>
          <a href="https://www.facebook.com/daizelellys" target="blank">
            <FaFacebookF />
          </a>
        </div>
        <a id="link-topo" href="#home">
        <FaArrowUp />
        </a>
      </div>

      <div className="employment">
        <p>&copy; Twins development 2023</p>
    </div>
    </footer>
  );
};

export default Footer;
