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
            <p>Holy shit. They told me the vocals on this were insane but I was not expecting that. Hats off to sir McCartney</p>
            <p>Conor Dunmore Yeah I agree, I'm a big McCartney fan and still love his vocals on this track but John's voice would've worked better for it. I've got my own little theory on why Paul did the vocals on this but whatever the case I just appreciate it for what it is. Still impressive in my opinion

            </p>
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
