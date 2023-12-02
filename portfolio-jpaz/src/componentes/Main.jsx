import SobreMi from './secciones/SobreMi'
import Inicio from './secciones/Inicio'
import Skills from './secciones/Skills.jsx'
import MiExperiencia from './secciones/MiExperiencia.jsx'
import './Main.css'
import MisEstudios from './secciones/MisEstudios.Jsx'
import Curriculum from './secciones/Curriculum.jsx'

function Main () {
  return (
    <main>
      <Inicio id='inicio' />
      <SobreMi id='sobremi' />
      <Skills id='skills' />
      <MiExperiencia id='miexperiencia' />
      <MisEstudios id='misestudios' />
      <Curriculum id='curriculum' />
    </main>
  )
}

export default Main
