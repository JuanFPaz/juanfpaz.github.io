/* eslint-disable no-unused-vars */
import './Section.css'

function Inicio ({ id, inicioText }) {
  return (
    <section>
      <div id={id}>
        <h1>{inicioText[0].message}</h1>
        <h2>{inicioText[1].message}</h2>
        <h3>{inicioText[2].message}</h3>
        <p>{inicioText[3] ? inicioText[3].message : ''}</p>
        <p>{inicioText[4] ? inicioText[4].message : ''}</p>
      </div>
    </section>
  )
}

export default Inicio
