import React from 'react'   
import { FaWhatsapp } from "react-icons/fa";
import './Whatsappbutton.css'

const Whatsappbutton = () => {

  const phoneNumber = "918483366372";
  const message = "Hello Masala Cafe, I would like to know more about your menu.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
     <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default Whatsappbutton