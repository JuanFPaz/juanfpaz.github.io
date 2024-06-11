/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './Section.css'

function Experiencia ({ id, experienciaText: { experienciaTitle, experienciaList } }) {
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
          <h1>{experienciaTitle}</h1>
        </div>
        <div className='experiencia-contenido'>
          <div className='experiencia-botones'>
            <ul>
              {experienciaList.map(exps => (
                <li key={exps.id}> <button id={boton === exps.id ? 'seleccionado' : ''} onClick={() => { handleButton(exps.id) }}>{`${exps.id + 1}. ${exps.subtitulo}`}</button> </li>
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
            {exp.tecnologias && (
              <>
                <h3>Habilidades Tecnicas</h3>
                <ul id='tec'>
                  {exp.tecnologias.map((tec, idx) => (
                    <li key={idx}>{tec}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experiencia
