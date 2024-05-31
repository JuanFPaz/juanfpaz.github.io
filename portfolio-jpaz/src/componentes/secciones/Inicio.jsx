/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './Section.css'

const inicioText = {
  es: [
    {
      id: 0,
      message: 'Hola, mi nombre es'
    },
    {
      id: 1,
      message: 'Juan Paz ☮'
    },
    {
      id: 2,
      message: 'Te doy la bienvenida a mi sitio web.'
    }
  ],
  br: [
    {
      id: 0,
      message: 'Olá, meu nome é'
    },
    {
      id: 1,
      message: 'Juan Paz ☮'
    },
    {
      id: 2,
      message: 'Sejam bem-venidos ao meu site.'
    }
  ],
  en: [
    {
      id: 0,
      message: 'Hi, my name is'
    },
    {
      id: 1,
      message: 'Juan Paz ☮'
    },
    {
      id: 2,
      message: 'Welcome to my website.'
    }
  ]
}

function Inicio ({ id, lang }) {
  const [langInicio, setLangInicio] = useState(inicioText[lang])

  return (
    <section>
      <div className='backgroundContainer'>
        <div id={id}>
          <h1>{langInicio[0].message}</h1>
          <h2>{langInicio[1].message}</h2>
          <h3>{langInicio[2].message}</h3>
        </div>
      </div>
    </section>
  )
}

export default Inicio
