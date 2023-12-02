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

function Skills ({ id }) {
  return (
    <section>
      <div id={id} className='skills-contenedor'>
        <div className='skills-encabezado'>
          <h1>{'{ Skills }'}</h1>
        </div>
        <div className='skills-contenido'>
          <div className='skills-grid'>
            <div className='skills-items'><img src={html} alt='' /></div>
            <div className='skills-items'><img src={css} alt='' /></div>
            <div className='skills-items'><img src={js} alt='' /></div>
            <div className='skills-items'><img src={ts} alt='' /></div>
            <div className='skills-items'><img src={node} alt='' /></div>
            <div className='skills-items'><img src={react} alt='' /></div>
            <div className='skills-items'><img src={vite} alt='' /></div>
            <div className='skills-items'><img src={angular} alt='' /></div>
            <div className='skills-items'><img src={java} alt='' /></div>
            <div className='skills-items'><img src={notion} alt='' /></div>
            <div className='skills-items'><img src={trello} alt='' /></div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills
