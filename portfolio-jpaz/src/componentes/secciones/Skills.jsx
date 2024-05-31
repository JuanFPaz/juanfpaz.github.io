/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import html from '../../assets/html-5.svg'
import css from '../../assets/css-3.svg'
import js from '../../assets/js.svg'
import ts from '../../assets/ts.svg'
import react from '../../assets/react.svg'
import angular from '../../assets/angular.svg'
import vite from '../../assets/vite.svg'
import bootstrap from '../../assets/bootstrap.svg'
import figma from '../../assets/figma.svg'
import node from '../../assets/node.svg'
import java from '../../assets/java.svg'
import notion from '../../assets/notion.svg'
import trello from '../../assets/trello.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import vscode from '../../assets/vs-code.svg'
import netbeans from '../../assets/apache-netbeans.svg'
import cloudflare from '../../assets/cloudflare.svg'
import './Section.css'

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
  {
    nombre: 'JavaScript',
    url: js,
    alt: 'Logo JavaScript',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'TypeScript',
    url: ts,
    alt: 'Logo TypeScript',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'React',
    url: react,
    alt: 'Logo React',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Angular',
    url: angular,
    alt: 'Logo Angular',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Vite',
    url: vite,
    alt: 'Logo Vite',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Bootstrap',
    url: bootstrap,
    alt: 'Logo Bootstrap',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Figma',
    url: figma,
    alt: 'Logo Figma',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Node.js',
    url: node,
    alt: 'Logo Node.js',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Java',
    url: java,
    alt: 'Logo Java',
    id: self.crypto.randomUUID()
  },
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
  },
  {
    nombre: 'NetBeans',
    url: netbeans,
    alt: 'Logo Apache NetBeans',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Cloudflare',
    url: cloudflare,
    alt: 'Logo Cloudflare',
    id: self.crypto.randomUUID()
  }
]

const softSkillsText = {
  es: [
    {
      id: 0,
      text: 'Gestion de proyectos'
    },
    {
      id: 1,
      text: 'Trabajo en equipo'
    },

    {
      id: 2,
      text: 'Comunicacion'
    },
    {
      id: 3,
      text: 'Resolucion de problemas'
    },
    {
      id: 4,
      text: 'Organizacion'
    },
    {
      id: 5,
      text: 'Colaboracion'
    },
    {
      id: 6,
      text: 'Pensamiento logico'
    },
    {
      id: 7,
      text: 'Rapido Aprendizaje'
    },
    {
      id: 8,
      text: 'Adaptabilidad'
    },
    {
      id: 9,
      text: 'Empatia'
    },
    {
      id: 10,
      text: 'Escucha activa'
    },
    {
      id: 11,
      text: 'Quejarme de rappi'
    }
  ],
  br: [
    {
      id: 0,
      text: 'Gestão de projetos'
    },
    {
      id: 1,
      text: 'Trabalho em equipe'
    },

    {
      id: 2,
      text: 'Comunicação'
    },
    {
      id: 3,
      text: 'Resolução de problemas'
    },
    {
      id: 4,
      text: 'Organizaçao'
    },
    {
      id: 5,
      text: 'Colaboração'
    },
    {
      id: 6,
      text: 'Pensamiento lógico'
    },
    {
      id: 7,
      text: 'Rapido Aprendizagem'
    },
    {
      id: 8,
      text: 'Adaptabilidade'
    },
    {
      id: 9,
      text: 'Empatia'
    },
    {
      id: 10,
      text: 'Escuta activa'
    },
    {
      id: 11,
      text: 'Quejarme de rappi'
    }
  ],
  en: [
    {
      id: 0,
      text: 'Project Management'
    },
    {
      id: 1,
      text: 'Teamwork'
    },

    {
      id: 2,
      text: 'Comunication'
    },
    {
      id: 3,
      text: 'Problem resolution'
    },
    {
      id: 4,
      text: 'Organization'
    },
    {
      id: 5,
      text: 'Collaboration'
    },
    {
      id: 6,
      text: 'Logical Thinking'
    },
    {
      id: 7,
      text: 'Fast Learning'
    },
    {
      id: 8,
      text: 'Adaptability'
    },
    {
      id: 9,
      text: 'Empathy'
    },
    {
      id: 10,
      text: 'Active listening'
    },
    {
      id: 11,
      text: 'Quejarme de rappi'
    }
  ]
}

function SoftSkills ({ lang }) {
  const [langSoft, setLangSoft] = useState(softSkillsText[lang])
  return (
    <div className='softSkills-contenedor'>
      <ul>
        {langSoft.map(({ id, text }) => (
          <li key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

function HardSkills () {
  const [img, setImage] = useState([...arrayDeImagenes])

  return (
    <div className='hardSkills-contenedor'>
      <div className='skills-grid'>
        {img.map((i) => (
          <OverlayTrigger key={i.id} overlay={<Tooltip id='tooltip-disabled'>{i.nombre}</Tooltip>}>
            <div className='skills-items'><img src={i.url} alt={i.alt} /></div>
          </OverlayTrigger>))}
      </div>
    </div>
  )
}

function Skills ({ id, lang }) {
  return (
    <section>
      <div id={id} className='skills-contenedor'>
        <div className='skills-encabezado'>
          <h1>{'{ Soft Skills }'}</h1>
        </div>
        <div className='skills-contenido'>
          <SoftSkills lang={lang} />
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
