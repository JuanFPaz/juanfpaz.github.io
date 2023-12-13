import SobreMi from './secciones/SobreMi'
import Inicio from './secciones/Inicio'
import Skills from './secciones/Skills'
import Experiencia from './secciones/Experiencia'
import Estudios from './secciones/Estudios'
// import Contacto from './secciones/Contacto'
import './Main.css'

function Main () {
  return (
    <main>
      <Inicio id='inicio' />
      <SobreMi id='sobremi' />
      <Skills id='skills' />
      <Experiencia id='experiencia' />
      <Estudios id='estudios' />
      {/* <Contacto id='contacto' /> */}
    </main>
  )
}

export default Main
