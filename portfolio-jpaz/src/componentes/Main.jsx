import SobreMi from './secciones/SobreMi'
import Inicio from './secciones/Inicio'
import Skills from './secciones/Skills'
import Experiencia from './secciones/Experiencia'
import Estudios from './secciones/Estudios'
// import Contacto from './secciones/Contacto'
import './Main.css'

function Main ({ lang }) {
  return (
    <main>
      <Inicio id='inicio' lang={lang} />
      <SobreMi id='sobremi' lang={lang} />
      <Skills id='skills' lang={lang} />
      <Experiencia id='experiencia' lang={lang} />
      <Estudios id='estudios' lang={lang} />
      {/* <Contacto id='contacto' /> */}
    </main>
  )
}

export default Main
