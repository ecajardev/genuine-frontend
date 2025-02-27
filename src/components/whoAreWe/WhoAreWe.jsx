import './whoAreWe.css'
import ImgWhoAreWe from "../../assets/whoAreWe.png";
import { BsRocket } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";


function WhoAreWe() {
  return (
    <section className="whoAreWe-container" id='quienes-somos'>
      <div className="whoAreWe-image-container">
        <img src={ImgWhoAreWe} alt="Imagen principal" />
      </div>
      <div className="whoAreWe-header">
        <h2>Nuestra misión en el mundo y lo que soñamos para tus hijos</h2>
      </div>
      <div className="whoAreWe-cards-container">
        <div className="mission-card">
          <BsRocket size={50} color='#07004a' className='icon-mission'/>
          <h3>Nuestra misión</h3>
          <p>Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras geográficas e idiomáticas.</p>
        </div>
        <div className="vision-card">
          <FaRegEye size={50} color='#07004a' className='icon-vision'/>
          <h3>Nuestra visión</h3>
          <p>Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del emprendimiento, la tecnología y la innovación.</p>
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe;