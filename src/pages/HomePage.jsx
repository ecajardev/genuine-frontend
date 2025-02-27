import './homePage.css';
import NavBar from '../components/navbar/Navbar';
import WhoAreWe from '../components/whoAreWe/WhoAreWe';
import About from '../components/about/About';
import JoinUs from '../components/joinUs/JoinUs';
import Logo from "../assets/logo3.jpg";

function HomePage() {
  return (
    <>
      <NavBar />
      <section className="hero" id='inicio'>
        <div className="card">
          <div className="top-section">
            <p>Estás a punto de iniciar un viaje hacia el universo de la <mark>educación digital</mark></p>
          </div>
          <div className="bottom-section">
            <img src={Logo} alt="Imagen de Genuine Digital School" />
          </div>
        </div>
        <a href="http://studyatgenuine.com" target="_blank" rel="noopener noreferrer">studyatgenuine.com</a>
      </section>
      <WhoAreWe />
      <About />
      <JoinUs />
    </>
  )
}

export default HomePage;