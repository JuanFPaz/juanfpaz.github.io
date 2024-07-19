/* eslint-disable import/no-absolute-path */
import gm from '/icons/gmail.svg'
import linkedin from '/icons/linkedin.svg'
import './styles/Contacto.css'

function Contacto ({ id }) {
  return (
    <section>
      <div id={id}>
        <h1>
          {'{ Contacto }'}
        </h1>
        <div className='contacto-contenido'>
          <p><b>¡Gracias por haber visitado mi Portfolio!</b> Espero que haya sido de tu agrado y que hayas encontrado interesante el contenido de mi sitio.</p>
          <p>Si deseas <b>contactarte conmigo</b>, a continuacion encontraras unos <b>enlaces</b> para que puedas enviarme un mensaje a mi <b>perfil de linkedin</b> o mi <b>correo electronico.</b></p>
          <ul>
            <li><a className='miau' style={{ backgroundImage: `url(${linkedin})` }} href='https://www.linkedin.com/in/jpaz94/' target='blank' /></li>
            <li><a className='miau' style={{ backgroundImage: `url(${gm})` }} href='mailto:jpaz.dev94@gmail.com' target='blank' /></li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Contacto
