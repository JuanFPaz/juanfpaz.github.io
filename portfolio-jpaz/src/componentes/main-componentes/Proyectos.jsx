/* eslint-disable import/no-absolute-path */
import './Section.css'
import react from '/assets/react.svg'
import unity from '/assets/unity.svg'
import node from '/assets/nodejs-icon.svg'
import nodeOri from '/assets/node.svg'
import java from '/assets/java.svg'
import js from '/assets/js.svg'

function Proyectos ({ id }) {
  return (
    <section>
      <div id={id} className='proyectos-contenedor'>
        <div className='proyectos-encabezado'>
          <h1>{'{ Proyectos }'}</h1>

        </div>
        <div className='proyectos-contenido'>
          <div className='experiencia-botones'>
            <ul>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={react} className='img-fluid' alt='Logito de react' /></div> React Footballito </button></li>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={node} className='img-fluid' alt='Logito de node' /></div> API Footballito </button></li>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={java} className='img-fluid' alt='Logito de java' /></div> Coffee & Java </button></li>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={java} className='img-fluid' alt='Logito de java' /></div> Registro Vacacional </button></li>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={js} className='img-fluid' alt='Logito de js' /></div> Reproductor de Musica </button></li>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={js} className='img-fluid' alt='Logito de js' /></div> API Nasa</button></li>
              <li><button style={{ display: 'flex' }}> <div style={{ width: '20px', height: 'auto' }}><img src={unity} className='img-fluid' alt='Logito de js' /></div> Jumping Guy</button></li>
            </ul>
          </div>
          <div className='experiencia-descripcion'>
            <div className='proyectos-text'>
              <h1>React Footballito</h1>
              <h2>Repositorio Github:</h2>
            </div>
            <div className='proyectos-img'>
              <div className='js' style={{ backgroundImage: `url(${react})` }} />
            </div>
          </div>
          <div className='experiencia-descripcion'>
            <div className='proyectos-text'>
              <h1>API Footballito</h1>
              <h2>Repositorio Github:</h2>
            </div>
            <div className='proyectos-img'>
              <div className='js' style={{ backgroundImage: `url(${nodeOri})` }} />
            </div>
          </div>
          <div className='experiencia-descripcion'>
            <div className='proyectos-text'>
              <h1>Coffee & Java</h1>
              <h2>Repositorio Github:</h2>
            </div>
            <div className='proyectos-img'>
              <div className='js' style={{ backgroundImage: `url(${java})` }} />
            </div>
          </div>
          <div className='experiencia-descripcion miau'>
            <div className='proyectos-text'>
              <h1>Reproductor de musica</h1>
              <h2>Repositorio Github:</h2>
            </div>
            <div className='proyectos-img'>
              <div className='js' style={{ backgroundImage: `url(${js})` }} />
            </div>
          </div>
          <div className='experiencia-descripcion miau'>
            <div className='proyectos-text'>
              <h1>Jumping Guy</h1>
              <h2>Repositorio Github:</h2>
            </div>
            <div className='proyectos-img'>
              <div className='js unity' id style={{ backgroundImage: `url(${unity})` }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Proyectos
