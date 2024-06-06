import { useState, useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function OffcanvasNav ({ offCanvasText }) {
  const [show, setShow] = useState(false)
  const [langOffCanvas, setLangOffCanvas] = useState(offCanvasText)
  /* Eventos para el offcanvas del header */
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    setLangOffCanvas(offCanvasText)
  }, [offCanvasText])

  return (
    <>
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
              {langOffCanvas.map(({ id, href, list }) =>
                (
                  <li key={id} onClick={show ? handleClose : null}>
                    <a href={href}>{list}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
