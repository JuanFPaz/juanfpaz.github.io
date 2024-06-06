import './Section.css'

function Contacto ({ id }) {
  return (
    <section>
      <div id={id}>
        <h1>
          {'{ Contacto }'}
        </h1>
        <div className='contacto-contenido'>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Gmail</li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Contacto
