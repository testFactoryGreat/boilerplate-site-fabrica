import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <h4>Phone: +55 85 3366 9797 | E-mail: contato@great.ufc.br</h4>
      <h4>Address: Federal University of Ceará - Campus do Pici - Bloco 942-A </h4>
      <SocialLinks styleClass="footer-links" />
      <h4>&copy;GREat{new Date().getFullYear()} | All rights reserved
      </h4>
    </div>
  </footer>
}

export default Footer
