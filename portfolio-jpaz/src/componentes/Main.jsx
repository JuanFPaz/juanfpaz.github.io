import SobreMi from './secciones/SobreMi'
import Inicio from './secciones/Inicio'
import Skills from './secciones/Skills.jsx'
import Experiencia from './secciones/Experiencia.jsx'
import Estudios from './secciones/Estudios.Jsx'
import Contacto from './secciones/Contacto.jsx'
import './Main.css'

function Main () {
  return (
    <main>
      <Inicio id='inicio' />
      <SobreMi id='sobremi' />
      <Skills id='skills' />
      <Experiencia id='experiencia' />
      <Estudios id='estudios' />
      <Contacto id='contacto' />
    </main>
  )
}

export default Main
