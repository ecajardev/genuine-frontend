import "./joinUs.css";
import Logo from "../../assets/logo3.jpg";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";


function JoinUs() {
  return (
    <div className="join-container" id="unete">
      <div className="genuine-top-right">
        <img src={Logo} alt="" />
      </div>

      <div className="join-card">
        <div className="join-header">
          <h1>¡Únete a Genuine Digital School hoy!</h1>
        </div>
        <div className="join-content">
          <p><b>Explora el increíble universo de la educación virtual junto a tu hijo.</b></p>
          <p>Síguenos en Redes Sociales y conoce nuestra gran comunidad digital.</p>
          <div className="icons">

            <a href="https://www.facebook.com/genuineds" target="_blank"><FaFacebook size={20} color="#100669" /> </a>
            <a href="https://www.instagram.com/genuineds/" target="_blank"><FaInstagram size={20} color="#100669" /></a>
            <a href="https://www.tiktok.com/@genuineds" target="_blank"><FaTiktok size={20} color="#100669" /></a>
            <a href="https://www.youtube.com/channel/UCy9QgoI87ITVm12d_C0NnZw" target="_blank"><FaYoutube size={20} color="#100669" /></a>
            <a href="https://www.linkedin.com/company/genuine-digital-school/" target="_blank"><FaLinkedin size={20} color="#100669" /></a>
          </div>
        </div>
      </div>
      <div className="join-bottom-link">
        <a href="http://studyatgenuine.com" target="_blank" >studyatgenuine.com</a>
      </div>
    </div>
  )
}

export default JoinUs;