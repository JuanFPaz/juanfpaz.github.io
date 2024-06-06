/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './Section.css'
import profile from '/assets/profile.jpg'
import cv from '/assets/CV-JuanPaz-2023.pdf'

function SobreMi ({ id, sobreMiText: { sobreMiTitle, sobreMiMainText, sobreMiAsideText } }) {
  return (
    <section>
      <div id={id} className='sobreMi-contenedor'>
        <div className='sobreMi-encabezado'>
          <h1>{sobreMiTitle}</h1>
        </div>
        <div className='sobreMi-contenido'>
          <div className='sobreMi-main'>
            {sobreMiMainText.map(({ id, message }) => (
              <p key={id}>
                {message}
              </p>
            ))}
            {/*
            <p>Mi interes por el desarrollo de Software nacio a mediados de 2018. En ese entonces, di mi primeros pasos con Java como autodidacta,adquiriendo una base solida sobre la programacion y desarrollando mi pensamiento logico.</p>
            <p>Mi camino se expandio con la oportunidad de estudiar en Argentina Programa, que me ayudo a orientarme en el mundo del desarrollo, donde conoci lenguajes como Ruby, Javascript, Typescript y herramientas como Angular, React, Node, Git y Github.</p>
            <p>Actualmente me especializo creando aplicaciones web dinamicas con React y Javascript, pero no me limito solo a una especializacion. Estoy comprometido con el aprendizaje continuo, y poder aportar en grupo de trabajo mi solida experiencia adquirida durante estos años.</p> */}
          </div>
          <div className='sobreMi-aside'>
            <div className='image-contenedor'>
              <img src={profile} alt='mi-foto' />
              {/* TODO: Hacer una mini ficha tecnica */}
            </div>
            <div className='ficha-contenedor'>
              <ul>
                <li>{sobreMiAsideText[0].text}</li>
                <li>{sobreMiAsideText[1].text}</li>
                <li>{sobreMiAsideText[2].text}</li>
                <li>{sobreMiAsideText[3].text}</li>
              </ul>
              <button>
                <a href={cv} target='_blank' rel='noopener noreferrer'> {sobreMiAsideText[4].text} </a>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
