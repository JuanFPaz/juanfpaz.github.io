/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import html from '/assets/html-5.svg'
import css from '/assets/css-3.svg'
import js from '/assets/js.svg'
import express from '/assets/express.svg'
import react from '/assets/react.svg'
import maven from '/assets/maven.svg'
import vite from '/assets/vite.svg'
import bootstrap from '/assets/bootstrap.svg'
import figma from '/assets/figma.svg'
import node from '/assets/node.svg'
import java from '/assets/java.svg'
import notion from '/assets/notion.svg'
import trello from '/assets/trello.svg'
import git from '/assets/git.svg'
import github from '/assets/github.svg'
import vscode from '/assets/vs-code.svg'
import netbeans from '/assets/apache-netbeans.svg'
import cloudflare from '/assets/cloudflare.svg'
import unity from '/assets/unity.svg'
import csharp from '/assets/CSharp.svg'
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
  {
    nombre: 'Bootstrap',
    url: bootstrap,
    alt: 'Logo Bootstrap',
    id: self.crypto.randomUUID()
  },
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
  {
    nombre: 'Vite',
    url: vite,
    alt: 'Logo Vite',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Java',
    url: java,
    alt: 'Logo Java',
    id: self.crypto.randomUUID()
  },
  {
    nombre: 'Apacahe Maven',
    url: maven,
    alt: 'Logo Apache Maven',
    id: self.crypto.randomUUID()
  },
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
  {
    nombre: 'Figma',
    url: figma,
    alt: 'Logo Figma',
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

function SoftSkills ({ softSkillsText }) {
  return (
    <div className='softSkills-contenedor'>
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
  const [img, setImage] = useState([...arrayDeImagenes])

  return (
    <div className='hardSkills-contenedor'>
      <div className='skills-grid'>
        {img.map((i) => (
          <OverlayTrigger key={i.id} overlay={<Tooltip id='tooltip-disabled'>{i.nombre}</Tooltip>}>
            {/* <div className='skills-items'>1</div> */}
            <div className='skills-items'>
              <div className='skills-img-container'>
                <img src={i.url} alt={i.alt} />
              </div>
            </div>
          </OverlayTrigger>))}
      </div>
    </div>
  )
}

function Skills ({ id, softSkillsText }) {
  return (
    <section>
      <div id={id} className='skills-contenedor'>
        <div className='skills-encabezado'>
          <h1>{'{ Soft Skills }'}</h1>
        </div>
        <div className='skills-contenido'>
          <SoftSkills softSkillsText={softSkillsText} />
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
