import "./about.css";
import ImgAbout from "../../assets/about.jpg";
import ImgMap from "../../assets/map.png";

function About() {
  return (
    <>

      <div className="about-container" id="somos-eeuu">
        <div className="about-text-content">
          <h2>De Estados Unidos para el mundo</h2>
          <p>Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el <b>Florida Department of Education con el código 8822.</b></p>
          <p>Conoce el nuestro aquí<a href="#">Registro legal</a></p>
        </div>
        <div className="about-img-content">
          <img src={ImgAbout} alt="" />
        </div>
      </div>


      <div className="world-container">
        <div className="world-left-content">
          <div className="title">
            <h2>Somos del mundo</h2>
          </div>
          <div className="location-lists">
            <div className="location-list-first">
              <p>Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.</p>
            </div>
            <div className="location-list-second">
              <p>Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.</p>
            </div>
            <div className="location-list-third">
              <p>Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.</p>
            </div>
          </div>
        </div>
        <div className="world-right-content">
          <img src={ImgMap} alt="Mapa mundial" />
          <div className="stats">
            <div className="stat">
              <div className="stat-value">+400 Estudiantes</div>
            </div>
            <div className="stat">
              <div className="stat-value">28 Staff</div>
            </div>
            <div className="stat">
              <div className="stat-value">44 Profesores</div>
            </div>
          </div>
        </div>
      </div>
    </>



  )
}

export default About;