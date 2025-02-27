
import "./navbar.css";


import Logo from "../../assets/logo3.jpg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="menus">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <nav>
            <ul className={isOpen ? "display" : ""}>
              <div className="btn" onClick={() => setIsOpen(false)}>
                <IoClose size={20} className="close-btn" />
              </div>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
              <li><a href="#somos-eeuu">Somos Estadounidenses</a></li>
              <li><a href="#unete">Únete a Genuine</a></li>
            </ul>
          </nav>
          <div className="btn" onClick={() => setIsOpen(true)}>
            <IoMenu size={20} className="menu-btn" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;