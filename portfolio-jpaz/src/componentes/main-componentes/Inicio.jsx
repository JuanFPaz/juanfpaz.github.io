/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from 'react'
import './styles/Inicio.css'

function Inicio ({ id, inicioText }) {
  const refInicio = useRef(null)
  useEffect(() => {
    console.log(inicioText)
    refInicio.current.innerHTML = inicioText[3].html
  }, [inicioText])
  return (
    <>
      {refInicio && (
        <section>
          <div id={id}>
            <h1>{inicioText[0].message}</h1>
            <h2>{inicioText[1].message}</h2>
            <h3>{inicioText[2].message}</h3>
            <span className='refInicio' ref={refInicio} />
          </div>
        </section>
      )}
    </>
  )
}

export default Inicio
