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
            <p>Soy trabajador autónomo en aplicaciones de reparto y desarrollador web en mis tiempos libres. Me interesé por el desarrollo de aplicaciones en 2019 por la curiosidad de saber cómo se crearon los juegos, aplicaciones y sitios web que suelo recurrir frecuentemente.</p>
            <p>Comencé mi viaje en la programación con Java, adquiriendo una base sólida en conceptos básicos y exploré el desarrolo de videojuegos con Gamemaker y Unity. Más tarde, me inscribí en Argentina Programa, donde reforce mis conocimientos con nuevas tecnologias como Javascript, React, Vite, Node, Git, Github y metodologias de trabajo como Scrum.</p>
            <p>Mis habilidades principales como desarrollador incluyen el manejo de estructuras de datos, crear código reutilizable y mantenible. Ademas desarrolle una solida gestion de proyectos y tareas, lo que me permite mantener un equilibrio entre mi responsabilidades y mi actual pasatiempo. Sin embargo, reconozco que mi punto más débil es el diseño, y estoy comprometido a mejorar en ese aspecto.</p>
            <p>Actualmente, mis intereses se enfocan en aprender inglés y portugués, en la gestión de datos con MySQL para manipular grandes estructuras de datos, y en el desarrollo backend con Node.js, TypeScript, o Java.</p>
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
