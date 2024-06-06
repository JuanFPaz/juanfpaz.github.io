/* eslint-disable react-refresh/only-export-components */
import SobreMi from './main-componentes/SobreMi'
import Inicio from './main-componentes/Inicio'
import Skills from './main-componentes/Skills'
import Experiencia from './main-componentes/Experiencia'
import Estudios from './main-componentes/Estudios'
// import Contacto from './secciones/Contacto'
import './Main.css'
import { useLoaderData } from 'react-router-dom'
import { inicioConfig, sobreMiConfig, softSkillsConfig } from '../data/idiomaConfig'

export function mainLoader ({ request }) {
  const url = new URL(request.url)

  const langPath = url.pathname === '/' ? 'es' : url.pathname.replace(/\//g, '')

  const { sobreMiTitleConfig, sobreMiMainConfig, sobreMiAsideConfig } = sobreMiConfig
  const sobreMiTitle = sobreMiTitleConfig[langPath]
  const sobreMiMainText = sobreMiMainConfig[langPath]
  const sobreMiAsideText = sobreMiAsideConfig[langPath]
  const sobreMiText = { sobreMiTitle, sobreMiMainText, sobreMiAsideText }

  return { renderMain: true, inicioText: inicioConfig[langPath], sobreMiText, softSkillsText: softSkillsConfig[langPath] }
}

function Main () {
  const { renderMain, inicioText, sobreMiText, softSkillsText } = useLoaderData()

  return (
    <main>
      <>
        {renderMain && (
          <>
            <Inicio id='inicio' inicioText={inicioText} />
            <SobreMi id='sobremi' sobreMiText={sobreMiText} />
            <Skills id='skills' softSkillsText={softSkillsText} />
            <Experiencia id='experiencia' lang='es' />
            <Estudios id='estudios' lang='es' />
          </>
        )}
        {/* <Contacto id='contacto' /> */}
      </>
    </main>
  )
}

export default Main
