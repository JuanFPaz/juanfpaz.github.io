import './Section.css'
import profile from '../../assets/profile.jpg'
import cv from '../../assets/CV-JuanPaz-2023.pdf'

function SobreMi ({ id }) {
  return (
    <section>
      <div id={id} className='sobreMi-contenedor'>
        <div className='sobreMi-encabezado'>
          <h1>{'{ Sobre Mi }'}</h1>
        </div>
        <div className='sobreMi-contenido'>
          <div className='sobreMi-main'>
            <p>Mi interes por el desarrollo de Software nacio a mediados de 2018. En ese entonces, di mi primeros pasos con Java como autodidacta,adquiriendo una base solida sobre la programacion y desarrollando mi pensamiento logico.</p>
            <p>Mi camino se expandio con la oportunidad de estudiar en Argentina Programa, que me ayudo a orientarme en el mundo del desarrollo, donde conoci lenguajes como Ruby, Javascript, Typescript y herramientas como Angular, React, Node, Git y Github.</p>
            <p>Actualmente me especializo creando aplicaciones web dinamicas con React y Javascript, pero no me limito solo a una especializacion. Estoy comprometido con el aprendizaje continuo, y poder aportar en grupo de trabajo mi solida experiencia adquirida durante estos años.</p>
          </div>
          <div className='sobreMi-aside'>
            <div className='image-contenedor'>
              <img src={profile} alt='mi-foto' />
              {/* TODO: Hacer una mini ficha tecnica */}
            </div>
            <div className='ficha-contenedor'>
              <ul>
                <li>Nombre: Juan Paz</li>
                <li>Fecha de Nacimiento: 25/11/1994</li>
                <li>Nacionalidad: Argentino</li>
                <li>Domicilio: Ciudad de Buenos Aires</li>
              </ul>
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
