import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function OffcanvasNav () {
  const [show, setShow] = useState(false)
  /* Eventos para el offcanvas del header */
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button className='d-xl-none' onClick={handleShow}>
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#84a0fc' className='bi bi-list' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
        </svg>
      </button>
      <Offcanvas show={show} backdrop responsive='xl' placement='end' name='end' className='d-flex'>
        <Offcanvas.Header>
          <button onClick={handleClose}>
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#84a0fc' className='bi bi-x-lg' viewBox='0 0 16 16'>
              <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
            </svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex justify-content-xl-center'>
          <nav>
            <ul>
              <li onClick={show ? handleClose : null}>
                <a href='#proyectos'>Proyectos</a>
              </li>
              <li onClick={show ? handleClose : null}>
                <a href='#sobremi'>Sobre Mi</a>
              </li>
              <li onClick={show ? handleClose : null}>
                <a href='#skills'>Skills</a>
              </li>
              <li onClick={show ? handleClose : null}>
                <a href='#experiencia'>Experiencia</a>
              </li>
              <li onClick={show ? handleClose : null}>
                <a href='#contacto'>Contacto</a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
