import { useState } from 'react'
import './Section.css'

const estudios = [
  {
    id: 0,
    institucion: 'Universidad Tecnologica Nacional - Argentina Programa',
    ubicacion: 'Buenos Aires.',
    titulo: 'Desarrollador Front End React',
    fechaToString: 'Febrero 2023 - Diciembre 2023',
    finalizado: true
  },
  {
    id: 1,
    institucion: 'Instituto Nacional de Tecnologia Industrial - Argentina Programa',
    ubicacion: 'Buenos Aires.',
    titulo: 'Desarrollador Full Stack',
    fechaToString: 'Septiembre 2022 - Actualidad',
    finalizado: false
  },
  {
    id: 2,
    institucion: 'Centro Universitario Vicente Lopez',
    ubicacion: 'Buenos Aires.',
    titulo: 'Reparacion de PC',
    fechaToString: 'Agosto 2018 - Diciembre 2018',
    finalizado: true
  },
  {
    id: 3,
    institucion: 'Colegio Julio Argentino Roca Nº8 DE 10',
    ubicacion: 'Ciudad de Buenos Aires.',
    titulo: 'Bachiller',
    fechaToString: 'Marzo 2010 - Diciembre 2014',
    finalizado: true
  }
]

function Estudios ({ id }) {
  const [est, setEst] = useState(estudios[0])
  const [boton, setBoton] = useState(0)

  function handleButton (idx) {
    setEst(estudios[idx])
    setBoton(idx)
  }
  return (
    <section>
      <div id={id} className='estudios-contenedor'>
        <h1>{'{ Estudios }'}</h1>
        <div className='estudios-contenido'>
          <div className='estudios-botones'>
            <ul>
              {estudios.map(estu => (
                <li key={estu.id}> <button id={boton === estu.id ? 'seleccionado' : ''} onClick={() => { handleButton(estu.id) }}>{`${estu.id + 1}. Titulo: ${estu.titulo}`}</button> </li>
              ))}
            </ul>
          </div>
          <div className='estudios-descripcion'>
            <ul>
              <li>Titulo: {est.titulo}</li>
              <li>Institucion: {est.institucion}</li>
              <li>Ubicacion: {est.ubicacion}</li>
              <li>Periodo: {est.fechaToString}</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Estudios
