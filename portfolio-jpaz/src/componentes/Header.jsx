import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import jpazLogo from '../assets/jp-logo-home-10.png'
import './Header.css'

function Header () {
  const [show, setShow] = useState(false)

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
      <Button variant='primary' className='d-sm-none' onClick={handleShow}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-list' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
        </svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop responsive='sm' placement='end' name='end' className='d-flex'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul>
              <li>
                <a href='#sobremi' onClick={show ? handleClose : null}>Sobre Mi</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#experiencia'>Mi Experiencia</a>
              </li>
              <li>
                <a href='#estudios'>Mis Estudios</a>
              </li>
              <li>
                <a href='#contacto'>Contacto</a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}

export default Header
