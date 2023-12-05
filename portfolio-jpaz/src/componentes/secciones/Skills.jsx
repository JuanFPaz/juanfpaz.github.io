import './Section.css'
import html from '../../assets/html-5.svg'
import css from '../../assets/css-3.svg'
import js from '../../assets/js.svg'
import ts from '../../assets/ts.svg'
import node from '../../assets/node.svg'
import react from '../../assets/react.svg'
import vite from '../../assets/vite.svg'
import angular from '../../assets/angular.svg'
import java from '../../assets/java.svg'
import notion from '../../assets/notion.svg'
import trello from '../../assets/trello.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import bootstrap from '../../assets/bootstrap.svg'
import figma from '../../assets/figma.svg'
import vscode from '../../assets/vs-code.svg'
import netbeans from '../../assets/apache-netbeans.svg'
import cloudflare from '../../assets/cloudflare.svg'

function SoftSkills () {
  return (
    <div className='softSkills-contenedor'>
      <ul>
        <li>Gestion de proyectos</li>
        <li>Trabajo en equipo</li>
        <li>Comunicacion</li>
        <li>Resolucion de problemas</li>
        <li>Organizacion</li>
        <li>Proactivo</li>
        <li>Colaboracion</li>
        <li>Pensamiento Logico</li>
        <li>Rapido aprendizaje</li>
        <li>Adaptabilidad</li>
        <li>Empatia</li>
        <li>Escucha Activa</li>
      </ul>
    </div>
  )
}

function HardSkills () {
  return (
    <div className='hardSkills-contenedor'>
      <div className='skills-grid'>
        <div className='skills-items'><img src={html} alt='' /></div>
        <div className='skills-items'><img src={css} alt='' /></div>
        <div className='skills-items'><img src={js} alt='' /></div>
        <div className='skills-items'><img src={ts} alt='' /></div>
        <div className='skills-items'><img src={react} alt='' /></div>
        <div className='skills-items'><img src={angular} alt='' /></div>
        <div className='skills-items'><img src={vite} alt='' /></div>
        <div className='skills-items'><img src={bootstrap} alt='' /></div>
        <div className='skills-items'><img src={figma} alt='' /></div>
        <div className='skills-items'><img src={node} alt='' /></div>
        <div className='skills-items'><img src={java} alt='' /></div>
        <div className='skills-items'><img src={notion} alt='' /></div>
        <div className='skills-items'><img src={trello} alt='' /></div>
        <div className='skills-items'><img src={git} alt='' /></div>
        <div className='skills-items'><img src={github} alt='' /></div>
        <div className='skills-items'><img src={vscode} alt='' /></div>
        <div className='skills-items'><img src={netbeans} alt='' /></div>
        <div className='skills-items'><img src={cloudflare} alt='' /></div>
      </div>
    </div>
  )
}

function Skills ({ id }) {
  return (
    <section>
      <div id={id} className='skills-contenedor'>
        <div className='skills-encabezado'>
          <h1>{'{ Soft Skills }'}</h1>
        </div>
        <div className='skills-contenido'>
          <SoftSkills />
        </div>
        <div className='skills-encabezado'>
          <h1>{'{ Hard Skills }'}</h1>
        </div>
        <div className='skills-contenido'>
          <HardSkills />
        </div>
      </div>
    </section>

  )
}

export default Skills
