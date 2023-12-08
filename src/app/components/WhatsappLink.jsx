import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappLink.css";

const WhatsappLink = () => {
  const phoneNumber = "5634137963"; 

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
    >
      <FaWhatsapp size={60} />
    </a>
  );
};

export default WhatsappLink