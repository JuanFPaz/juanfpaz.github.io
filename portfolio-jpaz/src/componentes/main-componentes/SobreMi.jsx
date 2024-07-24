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
            <p>Soy <b>trabajador autónomo</b> en aplicaciones de reparto y <b>desarrollador web</b> en mis tiempos libres. <b>Me interesé</b> por el desarrollo de aplicaciones en 2019 dando mis primeros pasos en la  programación con Java y explorando el desarrollo de videojuegos con Unity. Más tarde, me inscribí en Argentina Programa, donde <b>reforcé</b> mis conocimientos con <b>nuevas tecnologías</b> como Javascript, React, Node, Git y <b>metodologías ágiles</b> de trabajo como Scrum.</p>
            <p>Mis <b>habilidades principales</b> como desarrollador incluyen el manejo de estructuras de datos, crear código reutilizable y mantenible. Además desarrolle una sólida <b>gestión de proyectos y tareas,</b> lo que me permite mantener un equilibrio entre mis responsabilidades y mi actual pasatiempo. Sin embargo, reconozco que mi <b>punto más débil</b> es el diseño, y estoy comprometido a mejorar en ese aspecto.</p>
            <p>Actualmente busco orientar mi <b>perfil profesional</b> como desarrollador, <b>aportar mis conocimientos</b> en un grupo de trabajo, <b>continuar reforzando</b> mis conocimientos en el desarrollo de software y poder <b>invertir mi tiempo libre</b> en nuevas actividades como aprender inglés y/o portugués.</p>
          </div>
          <div className='sobreMi-aside'>
            <div className='sobreMi-foto'>
              <figure>
                <img src={profile} alt='mi-foto' />
              </figure>
            </div>
            <div className='ficha-contenedor'>
              <ul>
                {/* <li><b>Fecha de Nacimiento:</b> 25/11/1994</li>
                <li><b>Nacionalidad:</b> Argentino</li>
                <li><b>Domicilio:</b> Ciudad de Buenos Aires</li> */}
                <li className='liButton'>
                  <button>
                    <a href={cv} target='_blank' rel='noopener noreferrer'> Ver Curriculum Vitae </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
