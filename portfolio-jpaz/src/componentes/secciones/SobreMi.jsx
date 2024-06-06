/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './Section.css'
import { useState } from 'react'
import profile from '/assets/profile.jpg'
import cv from '/assets/CV-JuanPaz-2023.pdf'

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

const sobreMiMainText = {
  es: [
    {
      id: 0,
      message: 'Mi interes por el desarrollo de Software nacio a mediados de 2018. En ese entonces, di mi primeros pasos con Java como autodidacta,adquiriendo una base solida sobre la programacion y desarrollando mi pensamiento logico.'
    }, {
      id: 1,
      message: 'Mi camino se expandio con la oportunidad de estudiar en Argentina Programa, que me ayudo a orientarme en el mundo del desarrollo, donde conoci lenguajes como Ruby, Javascript, Typescript y herramientas como Angular, React, Node, Git y Github.'
    }, {
      id: 2,
      message: 'Actualmente me especializo creando aplicaciones web dinamicas con React y Javascript, pero no me limito solo a una especializacion. Estoy comprometido con el aprendizaje continuo, y poder aportar en grupo de trabajo mi solida experiencia adquirida durante estos años.'
    }
  ],
  br: [
    {
      id: 0,
      message: 'Meu interesse pelo desenvolviento de Software nasceu en meados de 2018. Nessa época, dei meus primeiros passos com Java como autodidata., adquirindo uma base sólida em programação e desemvolvendo meu pensamiento lógico.'
    },
    {
      id: 1,
      message: 'Minha trajetoira se expandiu com a oportunidade de estudar no Argentina Programa, o que me ajudau a me orientar no mundo do desenvolvimento, onde aprendi sobre linguajes como Ruby, Javascript, Typescript e ferramenta como Angular, React, Vite, Node, Git y Github.'
    },
    {
      id: 2,
      message: 'Atualmente sou especialista em criação de aplicações web dinâmicas com React e Javascript, mas não me limito a apenas uma especialização. Estou comprometido com o aprendizado continuo e em poder contribuir com minha sólida experiência adquirida nesses anos para o grupo de trabalho.'
    }
  ],
  en: [
    {
      id: 0,
      message: 'My intereset in software developed was born in mid-2018. At the time, I took my first steps with Java as a self-taught person, acquiring a solid foundation in programming and developing my logical thinking.'
    },
    {
      id: 1,
      message: 'My path expanded with the opportunity to study in Argentina Programa, wich helped me orient myself in the world of development, where i learned about languages such Ruby, Javascript, Typescript and tools such as Angular, React, Vite, Node, Git and Github.'
    },
    {
      id: 2,
      message: 'I currently specialize in creating dynamic web applications witch React and Javascript, but I do not limit myself to just one specialization. I am commited to continues learning and to be able to contribute my solid experience acquired during these years to the work group.'
    }
  ]
}

const sobreMiTitle = {
  es: ['{ Sobre Mi }'],
  br: ['{ Sobre Mim }'],
  en: ['{ About Me }']
}

function SobreMi ({ id, lang }) {
  const [langAside, setLangAside] = useState(sobreMiAsideText[lang])
  const [langMain, setLangMain] = useState(sobreMiMainText[lang])
  const [langTitle, setLangTitle] = useState(sobreMiTitle[lang])
  return (
    <section>
      <div id={id} className='sobreMi-contenedor'>
        <div className='sobreMi-encabezado'>
          <h1>{langTitle[0]}</h1>
        </div>
        <div className='sobreMi-contenido'>
          <div className='sobreMi-main'>
            {langMain.map(({ id, message }) => (
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
