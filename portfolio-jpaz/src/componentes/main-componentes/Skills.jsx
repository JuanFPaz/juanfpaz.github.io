/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import html from '/icons/html-5.svg'
import css from '/icons/css-3.svg'
import js from '/icons/js.svg'
import express from '/icons/express.svg'
import react from '/icons/react.svg'
import maven from '/icons/maven.svg'
import vite from '/icons/vite.svg'
import bootstrap from '/icons/bootstrap.svg'
import figma from '/icons/figma.svg'
import node from '/icons/node.svg'
import java from '/icons/java.svg'
import notion from '/icons/notion.svg'
import trello from '/icons/trello.svg'
import git from '/icons/git.svg'
import github from '/icons/github.svg'
import vscode from '/icons/vs-code.svg'
import netbeans from '/icons/apache-netbeans.svg'
import cloudflare from '/icons/cloudflare.svg'
import unity from '/icons/unity.svg'
import csharp from '/icons/CSharp.svg'
import './Section.css'
import './styles/Skills.css'

const arrayDeImagenes = [
  {
    nombre: 'HTML 5',
    url: html,
    alt: 'Logo HTML 5',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'CSS 3',
    url: css,
    alt: 'Logo CSS 3',
    id: self.crypto.randomUUID()
  },
  // {
  //   nombre: 'Bootstrap',
  //   url: bootstrap,
  //   alt: 'Logo Bootstrap',
  //   id: self.crypto.randomUUID()
  // },
  {
    nombre: 'JavaScript',
    url: js,
    alt: 'Logo JavaScript',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'React',
    url: react,
    alt: 'Logo React',
    id: self.crypto.randomUUID()
  },
  // {
  //   nombre: 'Vite',
  //   url: vite,
  //   alt: 'Logo Vite',
  //   id: self.crypto.randomUUID()
  // },
  {
    nombre: 'Java',
    url: java,
    alt: 'Logo Java',
    id: self.crypto.randomUUID()
  },
  // {
  //   nombre: 'Apacahe Maven',
  //   url: maven,
  //   alt: 'Logo Apache Maven',
  //   id: self.crypto.randomUUID()
  // },
  {
    nombre: 'Node.js',
    url: node,
    alt: 'Logo Node.js',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Express.js',
    url: express,
    alt: 'Logo Express.js',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Unity Engine',
    url: unity,
    alt: 'Logo Unity',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'C# (CSharp)',
    url: csharp,
    alt: 'Logo CSharp',
    id: self.crypto.randomUUID()
  },
  // {
  //   nombre: 'Figma',
  //   url: figma,
  //   alt: 'Logo Figma',
  //   id: self.crypto.randomUUID()
  // },
  {
    nombre: 'Notion',
    url: notion,
    alt: 'Logo Notion',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Trello',
    url: trello,
    alt: 'Logo Trello',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Git',
    url: git,
    alt: 'Logo Git',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'GitHub',
    url: github,
    alt: 'Logo GitHub',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'VS Code',
    url: vscode,
    alt: 'Logo Visual Studio Code',
    id: self.crypto.randomUUID()
  }
  // {
  //   nombre: 'Apache NetBeans',
  //   url: netbeans,
  //   alt: 'Logo Apache NetBeans',
  //   id: self.crypto.randomUUID()
  // },
  // {
  //   nombre: 'Cloudflare',
  //   url: cloudflare,
  //   alt: 'Logo Cloudflare',
  //   id: self.crypto.randomUUID()
  // }
]

const softSkillsText = [
  {
    id: 0,
    text: 'Gestión de proyectos'
  },
  {
    id: 1,
    text: 'Trabajo en equipo'
  },

  {
    id: 2,
    text: 'Comunicación'
  },
  {
    id: 3,
    text: 'Resolución  de problemas'
  },
  {
    id: 4,
    text: 'Organización'
  },
  {
    id: 5,
    text: 'Colaboración'
  },
  {
    id: 6,
    text: 'Pensamiento lógico'
  },
  {
    id: 7,
    text: 'Rápido Aprendizaje'
  },
  {
    id: 8,
    text: 'Adaptabilidad'
  },
  {
    id: 9,
    text: 'Empatía'
  },
  {
    id: 10,
    text: 'Escucha activa'
  },
  {
    id: 11,
    text: 'Compromiso'
  }
]

function SoftSkills () {
  return (
    <div className='softSkills-contenedor'>
      <div className='skills-titulo'>
        <h2>
          Soft Skills
        </h2>
      </div>
      <ul>
        {softSkillsText.map(({ id, text }) => (
          <li key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

function HardSkills () {
  return (
    <>
      <div className='hardSkills-contenedor'>
        <div className='skills-titulo'>
          Hard Skills
        </div>
      </div>
    </>
  )
}

// function HardSkills () {
//   const [img, setImage] = useState([...arrayDeImagenes])

//   return (
//     <div className='hardSkills-contenedor'>
//       <div className='skills-titulo'>
//         <h2>
//           Hard Skills
//         </h2>
//       </div>
//       <div className='skills-grid'>
//         {img.map((i) => (
//           <OverlayTrigger key={i.id} overlay={<Tooltip id='tooltip-disabled'>{i.nombre}</Tooltip>}>
//             <div className='skills-items'>
//               <div className='skills-img-container'>
//                 <img src={i.url} alt={i.alt} />
//               </div>
//             </div>
//           </OverlayTrigger>))}
//       </div>
//     </div>
//   )
// }

function Skills ({ id }) {
  return (
    <section>
      <div id={id} className='skills-contenedor'>
        <div className='skills-encabezado'>
          <h1>{'{ Habilidades }'}</h1>
        </div>
        <div className='skills-contenido'>
          <SoftSkills />
          <HardSkills />
        </div>
      </div>
    </section>

  )
}

export default Skills
