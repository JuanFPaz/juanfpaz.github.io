/* eslint-disable react-refresh/only-export-components */
import SobreMi from './main-componentes/SobreMi'
import Inicio from './main-componentes/Inicio'
import Skills from './main-componentes/Skills'
import Experiencia from './main-componentes/Experiencia'
import Proyectos from './main-componentes/Proyectos'
// import Estudios from './main-componentes/Estudios'
// import Contacto from './secciones/Contacto'
import './Main.css'
import './main-componentes/Section.css'

function Main () {
  return (
    <main>
      <Inicio id='inicio' />
      <Proyectos id='proyectos' />
      <SobreMi id='sobremi' />
      <Skills id='skills' />
      <Experiencia id='experiencia' />
    </main>
  )
}

export default Main
