import { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import jpazLogo from '../assets/jp-logo-home-10.png'
import './Header.css'
import Languaje from './secciones/Languaje'

const headerText =
  {
    es:
      {
        sobreMi: 'Sobre Mi',
        skills: 'Skills',
        experiencia: 'Experiencia',
        estudios: 'Estudios'
      },
    en:
      {
        sobreMi: 'About Me',
        skills: 'Skills',
        experiencia: 'Experience',
        estudios: 'Education'
      },
    br:
      {
        sobreMi: 'Sobre Mim',
        skills: 'Skills',
        experiencia: 'Experiência',
        estudios: 'Educação'
      }
  }

function Header ({ lang }) {
  const [show, setShow] = useState(false)
  const [langHeader, setLangHeader] = useState({})
  useEffect(() => {
    setLangHeader(headerText[lang])
  }, [lang])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <header className='fixed-top'>
      <div className='logo-contenedor'>
        <a href='#inicio' id='logo'>
          <img src={jpazLogo} alt='logo-jpaz' />
        </a>
      </div>

      {/* Comeinza el offcanvas reactBootstrap del navlink */}
      <div className='miLittleChinaGirl'>
        <Languaje />
        <button className='d-lg-none' onClick={handleShow}>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#ff2c2c' className='bi bi-list' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
          </svg>
        </button>
        <Offcanvas show={show} backdrop responsive='lg' placement='end' name='end' className='d-flex'>
          <Offcanvas.Header>
            <button onClick={handleClose}>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#ff2c2c' className='bi bi-x-lg' viewBox='0 0 16 16'>
                <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
              </svg>
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav>
              <ul>
                <li>
                  <a href='#sobremi' onClick={show ? handleClose : null}>{langHeader.sobreMi}</a>
                </li>
                <li>
                  <a href='#skills' onClick={show ? handleClose : null}>{langHeader.skills}</a>
                </li>
                <li>
                  <a href='#experiencia' onClick={show ? handleClose : null}>{langHeader.experiencia}</a>
                </li>
                <li>
                  <a href='#estudios' onClick={show ? handleClose : null}>{langHeader.estudios}</a>
                </li>
                {/* <li>
                <a href='#contacto' onClick={show ? handleClose : null}>Contacto</a>
              </li> */}
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

    </header>
  )
}

export default Header
