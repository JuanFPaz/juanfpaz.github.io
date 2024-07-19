/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './styles/Experiencia.css'

const experienciaList = [
  {
    id: 0,
    titulo: 'Desarrollador Web',
    subtitulo: 'Portfolio jpaz.ar',
    fechaToString: 'Octubre 2023 - Actualidad',
    descripcion: [
      'Incluyo el desarrollo de mi Portfolio como experiencia porque es una representación de mis conocimientos adquiridos en estos años.',
      'Incluye una sección con unos breves resúmenes sobre mis proyectos, repasando los objetivos, y aspectos positivo y a mejorar de cada uno.',
      'Desarrolle mi Portfolio utilizando React y Javascript, configure mi dominio web personalizado y adquirí la habilidad para gestionar mis proyectos implementando metodologías de trabajo como SCRUM.'
    ]
  },
  {
    id: 1,
    titulo: 'Trabajo autónomo',
    subtitulo: 'Aplicaciones de reparto',
    fechaToString: 'Septiembre 2020 - Actualidad',
    descripcion: [
      'Realizo tareas de reparto en la Ciudad de Buenos Aires y GBA Zona Norte, utilizando plataformas como Pedidos Ya y Rappi.',
      'Desarrolle y mejore progresivamente la habilidad para gestionar, planificar y organizar mi trabajo, para cumplir con mis obligaciones financieras de manera consistente.',
      'Capaz de adaptar mis objetivos y solucionar problemas en situaciones imprevistas en un entorno de trabajo dinámico.'
    ]
  },
  {
    id: 2,
    titulo: 'Ejecutivo de Telemarketing ',
    subtitulo: 'Dyktel S.A.',
    fechaToString: 'Marzo 2017 - Septiembre 2020',
    descripcion: [
      'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
      'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
      'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
    ]
  }
]

function Experiencia ({ id }) {
  const [exp, setExp] = useState(experienciaList[0])
  const [boton, setBoton] = useState(0)

  useEffect(() => {
    setExp(experienciaList[boton])
  }, [boton, experienciaList])

  function handleButton (idx) {
    setBoton(idx)
  }
  return (
    <section>
      <div id={id} className='experiencia-contenedor'>
        <div className='experiencia-encabezado'>
          <h1>{'{ Experiencia }'}</h1>
        </div>
        <div className='experiencia-contenido d-lg-flex flex-lg-row-reverse'>
          <div className='experiencia-botones'>
            <ul className='d-flex flex-lg-column'>
              {experienciaList.map(exps => (
                <li key={exps.id}> <button id={boton === exps.id ? 'seleccionado' : ''} onClick={() => { handleButton(exps.id) }}><span>{`${exps.id + 1}. ${exps.titulo}`}</span></button> </li>
              ))}
            </ul>
          </div>
          <div className='experiencia-descripcion'>
            <h1>{exp.titulo} - {exp.subtitulo}</h1>
            <h2>{exp.fechaToString}</h2>
            <ul>
              {exp.descripcion.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experiencia
