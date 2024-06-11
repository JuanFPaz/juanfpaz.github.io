import { useState, useEffect } from 'react'
import './Section.css'

function Estudios ({ id, educacionText: { educacionTitle, educacionList } }) {
  const [est, setExp] = useState(educacionList[0])
  const [boton, setBoton] = useState(0)

  useEffect(() => {
    setExp(educacionList[boton])
  }, [boton, educacionList])

  function handleButton (idx) {
    setBoton(idx)
  }
  return (
    <section>
      <div id={id} className='estudios-contenedor'>
        <div className='estudios-encabezado'>
          <h1>{educacionTitle}</h1>
        </div>
        <div className='estudios-contenido'>
          <div className='estudios-botones'>
            <ul>
              {educacionList.map(estu => (
                <li key={estu.id}> <button id={boton === estu.id ? 'seleccionado' : ''} onClick={() => { handleButton(estu.id) }}>{`${estu.id + 1}. ${estu.institucion}`}</button> </li>
              ))}
            </ul>
          </div>
          <div className='estudios-descripcion'>
            <h1>{est.institucion}</h1>
            <ul>
              <li>{est.titulo}</li>
              <li>{est.ubicacion}</li>
              <li>{est.fechaToString}</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Estudios
