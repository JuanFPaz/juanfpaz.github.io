import './Section.css'

function Experiencia ({ id }) {
  return (
    <section>
      <div id={id} className='experiencia-contenedor'>
        <div className='experiencia-encabezado'>
          <h1>{'{ Experiencias }'}</h1>
        </div>
        <div className='experiencia-contenido'>
          <div className='asd'>
            <ul>
              <li>Colaborador</li>
              <li>Desarrollador Frontend</li>
              <li>Autonomo</li>
              <li>Ejecutivo de Cuentas</li>
            </ul>
          </div>
          <div className='asdd'>
            <h1>Colaborador en Github</h1>
            <h3>Principios basicos de Javascript</h3>
            <h2>Noviembre 2023 - Actualidad</h2>
            <ul>
              <li>Miau</li>
              <li>Miau</li>
              <li>Miau</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experiencia
