import { useState, useEffect } from 'react'
import SobreMi from './secciones/SobreMi'
import Inicio from './secciones/Inicio'
import Skills from './secciones/Skills'
import Experiencia from './secciones/Experiencia'
import Estudios from './secciones/Estudios'
// import Contacto from './secciones/Contacto'
import './Main.css'

function Main ({ lang }) {
  const [langMain, setLangMain] = useState(null)

  useEffect(() => {
    setLangMain(lang)
  }, [lang])

  return (
    <main>
      {langMain && (
        <>
          <Inicio id='inicio' lang={langMain} />
          <SobreMi id='sobremi' lang={langMain} />
          <Skills id='skills' lang={langMain} />
          <Experiencia id='experiencia' lang={langMain} />
          <Estudios id='estudios' lang={langMain} />
          {/* <Contacto id='contacto' /> */}
        </>
      )}
    </main>
  )
}

export default Main
