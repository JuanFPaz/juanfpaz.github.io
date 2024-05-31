import './Section.css'
import { useState } from 'react'
import profile from '../../assets/profile.jpg'
import cv from '../../assets/CV-JuanPaz-2023.pdf'

const sobreMiAsideText = {
  es: [
    {
      id: 0,
      text: 'Nombre: Juan Paz'
    },
    {
      id: 1,
      text: 'Fecha de Nacimiento: 25/11/1994'
    },
    {
      id: 2,
      text: 'Nacionalidad: Argentino'
    },
    {
      id: 3,
      text: 'Domicilio: Ciudad de Buenos Aires'
    },
    {
      id: 4,
      text: 'Ver Curriculum Vitae'
    }
  ],
  br: [
    {
      id: 0,
      text: 'Nome: Juan Paz'
    },
    {
      id: 1,
      text: 'Data de Nascimiento: 25/11/1994'
    },
    {
      id: 2,
      text: 'Nacionalidade: Argentino'
    },
    {
      id: 3,
      text: 'Endereço: Ciudad de Buenos Aires'
    },
    {
      id: 4,
      text: 'Ver Curriculo'
    }
  ],
  en: [
    {
      id: 0,
      text: 'Name: Juan Paz'
    },
    {
      id: 1,
      text: 'Date of Birth: 25/11/1994'
    },
    {
      id: 2,
      text: 'Nacionality: Argentino'
    },
    {
      id: 3,
      text: 'Address: Ciudad de Buenos Aires'
    },
    {
      id: 4,
      text: 'View Resume'
    }
  ]
}

function SobreMi ({ id, lang }) {
  const [langAside] = useState(sobreMiAsideText[lang])
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
                <li>{langAside[0].text}</li>
                <li>{langAside[1].text}</li>
                <li>{langAside[2].text}</li>
                <li>{langAside[3].text}</li>
              </ul>
              <button>
                <a href={cv} target='_blank' rel='noopener noreferrer'> {langAside[4].text} </a>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
