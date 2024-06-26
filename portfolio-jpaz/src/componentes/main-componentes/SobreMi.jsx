/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './Section.css'
import './styles/SobreMi.css'
import profile from '/assets/profile.jpg'
import cv from '/assets/CV-JuanPaz-2024.pdf'

function SobreMi ({ id, sobreMiText: { sobreMiTitle, sobreMiMainText, sobreMiAsideText } }) {
  return (
    <section>
      <div id={id} className='sobreMi-contenedor'>
        <div className='sobreMi-encabezado'>
          <h1>{sobreMiTitle}</h1>
        </div>
        <div className='sobreMi-contenido d-flex flex-lg-row'>
          <div className='sobreMi-main'>
            {sobreMiMainText.map(({ id, message }) => (
              <p key={id}>
                {message}
              </p>
            ))}
          </div>
          <div className='sobreMi-aside'>
            <div className='sobreMi-foto'>
              <figure>
                <img src={profile} alt='mi-foto' />
              </figure>
            </div>
            <div className='ficha-contenedor'>
              <ul>
                <li>{sobreMiAsideText[1].text}</li>
                <li>{sobreMiAsideText[2].text}</li>
                <li>{sobreMiAsideText[3].text}</li>
              </ul>
            </div>
            <div className='button-contenedor'>
              <button>
                <a href={cv} target='_blank' rel='noopener noreferrer'> {sobreMiAsideText[4].text} </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
