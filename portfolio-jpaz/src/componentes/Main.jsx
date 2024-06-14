/* eslint-disable react-refresh/only-export-components */
import SobreMi from './main-componentes/SobreMi'
import Inicio from './main-componentes/Inicio'
import Skills from './main-componentes/Skills'
import Experiencia from './main-componentes/Experiencia'
import Estudios from './main-componentes/Estudios'
import Proyectos from './main-componentes/Proyectos'
// import Contacto from './secciones/Contacto'
import './Main.css'
import { useLoaderData } from 'react-router-dom'
import { inicioConfig, sobreMiConfig, softSkillsConfig, experienciaConfig, educacionConfig } from '../data/idiomaConfig'

export function mainLoader ({ request }) {
  const url = new URL(request.url)

  const langPath = url.pathname === '/' ? 'es' : url.pathname.replace(/\//g, '')

  const { sobreMiTitleConfig, sobreMiMainConfig, sobreMiAsideConfig } = sobreMiConfig
  const sobreMiTitle = sobreMiTitleConfig[langPath]
  const sobreMiMainText = sobreMiMainConfig[langPath]
  const sobreMiAsideText = sobreMiAsideConfig[langPath]
  const sobreMiText = { sobreMiTitle, sobreMiMainText, sobreMiAsideText }

  // EXPERIENCIAAS

  const { experienciaTitleConfig, experienciaListConfig } = experienciaConfig
  const experienciaTitle = experienciaTitleConfig[langPath]
  const experienciaList = experienciaListConfig[langPath]
  const experienciaText = { experienciaTitle, experienciaList }

  // ESTUDIOS

  const { educacionTitleConfig, educacionListConfig } = educacionConfig
  const educacionTitle = educacionTitleConfig[langPath]
  const educacionList = educacionListConfig[langPath]
  const educacionText = { educacionTitle, educacionList }

  return { renderMain: true, inicioText: inicioConfig[langPath], sobreMiText, softSkillsText: softSkillsConfig[langPath], experienciaText, educacionText }
}

function Main () {
  const { renderMain, inicioText, sobreMiText, softSkillsText, experienciaText, educacionText } = useLoaderData()

  return (
    <main>
      <>
        {renderMain && (
          <>
            <Inicio id='inicio' inicioText={inicioText} />
            <SobreMi id='sobremi' sobreMiText={sobreMiText} />
            <Proyectos id='proyectos' />
            <Skills id='skills' softSkillsText={softSkillsText} />
            <Experiencia id='experiencia' experienciaText={experienciaText} />
            <Estudios id='educacion' educacionText={educacionText} />
          </>
        )}
        {/* <Contacto id='contacto' /> */}
      </>
    </main>
  )
}

export default Main
