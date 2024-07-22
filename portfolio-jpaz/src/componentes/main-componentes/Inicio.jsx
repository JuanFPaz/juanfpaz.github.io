/* eslint-disable no-unused-vars */
import './styles/Inicio.css'

function Inicio ({ id }) {
  return (
    <>
      <section>
        <div id={id}>
          <h1>Hola, mi nombre es</h1>
          <h2>Juan Paz</h2>
          <h3>Bienvenido a mi sitio web.</h3>
          <p>
            Soy un <b>desarrollador web</b>  especializado en Javascript creando aplicaciones Front end y Back end, gestionando eficazmente mis proyectos y con conocimientos sólidos utilizando diferentes lenguajes de programación y herramientas de desarrollo.
            <br />
            <br />
            Actualmente estoy <b>enfocado</b> en crecer como profesional en el <b>desarrollo de aplicaciones.</b>
          </p>
        </div>
      </section>
    </>
  )
}

export default Inicio
