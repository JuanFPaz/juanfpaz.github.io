/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './Section.css'
import './styles/SobreMi.css'
import profile from '/img/profile.jpg'
import cv from '/pdf/CV-JuanPaz-2024.pdf'

function SobreMi ({ id }) {
  return (
    <section>
      <div id={id} className='sobreMi-contenedor'>
        <div className='sobreMi-encabezado'>
          <h1>{'{ Sobre Mi }'}</h1>
        </div>
        <div className='sobreMi-contenido d-flex flex-lg-row'>
          <div className='sobreMi-main'>
            <p>Soy <b>trabajador autónomo</b> en aplicaciones de reparto y <b>desarrollador web</b> en mis tiempos libres. Me interesé por el desarrollo de aplicaciones en 2019 por la curiosidad de saber cómo se crearon los juegos, aplicaciones y sitios web que suelo recurrir frecuentemente.</p>
            <p>Comencé mi viaje en la programación con Java, adquiriendo una base sólida en <b>conceptos básicos</b> y exploré el <b>desarrolo de videojuegos</b> con Gamemaker y Unity. Más tarde, me inscribí en Argentina Programa, donde <b>reforce mis conocimientos</b> con nuevas tecnologias como Javascript, React, Vite, Node, Git, Github y <b>metodologias de trabajo</b> como Scrum.</p>
            <p>Mis <b>habilidades principales</b> como desarrollador incluyen el manejo de estructuras de datos, crear código reutilizable y mantenible. Ademas desarrolle una solida <b>gestion de proyectos y tareas,</b> lo que me permite mantener un equilibrio entre mi responsabilidades y mi actual pasatiempo. Sin embargo, reconozco que mi <b>punto más débil</b> es el diseño, y estoy comprometido a mejorar en ese aspecto.</p>
            <p>Actualmente busco orientar mi <b>perfil profesional</b> como desarrollador, <b>aportar mis conocimientos</b> en un grupo de trabajo, poder <b>invertir mi tiempo libre</b> en nuevas actividades como aprender inglés y/o portugués y <b>continuar reforzando</b> mis conocimientos en el desarrollo de software.</p>
          </div>
          <div className='sobreMi-aside'>
            <div className='sobreMi-foto'>
              <figure>
                <img src={profile} alt='mi-foto' />
              </figure>
            </div>
            <div className='ficha-contenedor'>
              <ul>
                <li><b>Fecha de Nacimiento:</b> 25/11/1994</li>
                <li><b>Nacionalidad:</b> Argentino</li>
                <li><b>Domicilio:</b> Ciudad de Buenos Aires</li>
              </ul>
            </div>
            <div className='button-contenedor'>
              <button>
                <a href={cv} target='_blank' rel='noopener noreferrer'> Ver Curriculum Vitae </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
