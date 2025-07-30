/* eslint-disable import/no-absolute-path */
import { useState, useEffect, useRef } from 'react'
// Iconos
import enlace from '/icons/enlace-blue.svg'
import ghBlue from '/icons/gh-blue.svg'
import react from '/icons/react.svg'
import node from '/icons/nodejs-icon.svg'
import java from '/icons/java.svg'
import js from '/icons/js.svg'
// background
import reactFootballito from '/img/proyectos/reactFBrowser.png'
import apiFootballito from '/img/proyectos/apiF.png'
import nasa from '/img/proyectos/spaceOddity.png'
import musica from '/img/proyectos/musica-2.png'
import sistema from '/img/proyectos/sistemav.png'
import jumpingGuy from '/img/proyectos/jg.png'
import './styles/Proyectos.css'

const proyectosBotones = [
  {
    id: 0,
    titulo: 'React Footballito',
    src: react,
    class: 'react-icon'
  },
  {
    id: 1,
    titulo: 'API Footballito',
    src: node,
    class: 'node-icon'
  },
  {
    id: 2,
    titulo: 'Reproductor de Musica',
    src: js,
    class: 'js-icon'
  },
  {
    id: 3,
    titulo: 'Space Oddity',
    src: js,
    class: 'js-icon'
  },
  {
    id: 4,
    titulo: 'Sistema Vacacional',
    src: java,
    class: 'java-icon'
  }
]

const proyectosContenido = [
  {
    id: 0,
    background: reactFootballito,
    titulo: 'React Footballito',
    repositorio: 'https://github.com/JuanFPaz/react-footballito',
    repoTitle: 'JuanFPaz/React-Footballito',
    // url: 'https://www.figma.com/proto/o4lS9FkHAHoImlcbQuWQl1/Maqueta-de-React-Footballito?node-id=0-1&t=U4jttj3mTXMLHjrE-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    urlTitle: 'Figma | Prototipo de React Footballito',
    tecUno: 'React - Javascript - Vite',
    tecDos:
        'VS Code - Figma - Git - Github - Notion',
    html: `
    <p><b>React Footballito</b> es una aplicacion en <b>desarrollo</b> creada <b>React y Javascript.</b>. Esta proyecto visualiza los datos de diferentes ligas y copas de fútbol a nivel clubes y selecciones, inspirada en <a href='https://promiedos.com.ar' target='blank'>promiedos.com.ar</a>.</p>
    `,
    nohtml: `
      <p><b>React Footballito</b> es una aplicacion <b>Front end</b> en desarrollo que visualiza los datos de diferentes ligas y copas de fútbol a nivel clubes y selecciones, inspirada en</p>
      <p><b>Fue un desafio</b> construir la aplicacion desde cero y crear un estilo propio, pero celebro que pude completar el <b>objetivo principal</b> que era crear una estructura de componentes y distribucion de datos solida y reutilizable, para poder manejar y <b>visualizar</b> los datos obtenidos de <b>API Footballito</b> (aplicacion backend desarrollada en simultaneo).</p>
      <p>Actualmente me encuentro <b>mejorando los estilos</b> de la aplicacion para que sea más atractiva y para brindar una mejor experiencia al usuario y <b>documentar</b> los avances para tener un seguimiento del desarrollo de la aplicacion. <b>Para más detalles</b>, podes visitar el <a target='_blank' href='https://www.figma.com/proto/o4lS9FkHAHoImlcbQuWQl1/Maqueta-de-React-Footballito?node-id=0-1&t=U4jttj3mTXMLHjrE-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'>prototipo de la aplicacion</a> y chequear su estado actual.</p>
    `
  },
  {
    id: 1,
    background: apiFootballito,
    figDesc: 'Miniatura del archivo index.js del proyecto',
    titulo: 'API Footballito',
    repositorio: 'https://github.com/JuanFPaz/API-Football',
    repoTitle: 'JuanFPaz/API-Footballito',
    url: '',
    urlTitle: '',
    tecUno: 'Node.js - Express - Javascript',
    tecDos:
        'VS Code - Rest Client - JSON - Git - Github - Notion',
    html: `
        <p><b>API Footballito</b> es una aplicacion <b>Back end</b> en desarrollo con  <b>Node.js y Express</b>, que obtiene, procesa y almacena los datos de diferentes ligas y copas de la <a target='blank' href='https://api-sports.io/documentation/football/v3'>API Sports</a>, para luego <b>facilitar</b> el trabajo en el Front End, enviando los datos solicitados.</p>
        <p>Para desarrollar esta aplicacion, utilice los conocimientos aprendidos de diferentes fuentes como la <a target='blank' href='https://expressjs.com/'>documentacon oficial de Express</a>, videos tutoriales sobre <a target='blank' href='https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7'>Node.js</a>, y sobre todo mi <b>pensamiento logico</b> a la hora de crear logica de la aplicacion.</p>`
  },
  {
    id: 2,
    background: musica,
    figDesc: 'Vista previa del Reproductor de musica en movil.',
    titulo: 'Reproductor de musica',
    repositorio: 'https://github.com/JuanFPaz/reproductor-de-musica',
    repoTitle: 'JuanFPaz/Reproductor-de-musica',
    url: 'https://musica.jpaz.ar',
    urlTitle: 'musica.jpaz.ar',
    tecUno: 'Javascript - Vite',
    tecDos:
        'VS Code - Git - Github - Notion',
    html: `
        <p><b>Reproductor de música</b> es una aplicación <b>personal</b> desarrollada con <b>JavaScript</b> y configurada con <b>Vite</b>. La creé como una alternativa a las plataformas de <b>streaming</b> para reducir el consumo de la bateria de mi movil mientras realizo mis <b>jornadas laborales</b>.</p>
        <p>Aunque el estilo de la aplicacion es muy simple, <b>destaco</b> la idea inicial de reutilizar la logica de un reproductor de musica que aprendí en el <a target='blank' href='https://hektorprofe.net/'>curso de <b>Unity</b> y <b>C#</b></a>, adaptarlo a un entorno diferente como el navegador con <b>Javascript</b>.</p>
        <p>La aplicacion actualmente se encuentra desplegada en <a target='blank' href='https://musica.jpaz.ar'>musica.jpaz.ar</a>.</p>
        `
  },
  {
    id: 3,
    background: nasa,
    titulo: 'Space Oddity',
    figDesc: 'Vista previa de Spaceoddity.jpaz.ar',
    repositorio: 'https://github.com/JuanFPaz/space-oddity',
    repoTitle: 'JuanFPaz/Space-Oddity',
    url: 'https://spaceoddity.jpaz.ar',
    urlTitle: 'spaceoddity.jpaz.ar',
    tecUno: 'Javascript - Vite',
    tecDos:
        'VS Code - Bootstrap 5 - Rest Client - Git - Github - Notion',
    html: `
        <p><b>Space Oddity</b> es una aplicación <b>frontend</b> desarrollada con <b>JavaScript</b> y configurada con <b>Vite</b>. Esta aplicación obtiene imágenes y videos desde 1996 hasta la fecha actual de la <a target='blank' href='https://api.nasa.gov/'>API APOD</a> (Astronomic Picture of the Day) de la <b>NASA</b>.</p>
        <p>Implementar la lógica para obtener los datos de la API fue <b>sencillo</b> gracias a la clara documentación proporcionada por la NASA. <b>El verdadero reto</b> fue diseñar un estilo propio para la aplicación. Con la <b>ayuda y feedback</b> de colegas experimentados, pude adaptar mis necesidades para mejorar el diseño.</p>
        <p>La aplicacion actualmente se encuentra finalizada y desplegada en <a target='blank'  href='https://spaceoddity.jpaz.ar'>spaceoddity.jpaz.ar</a>.</p>
        `
  },
  {
    id: 4,
    background: sistema,
    titulo: 'Sistema Vacacional',
    figDesc: 'Vista previa del Sistema Vacacional.',
    repositorio: 'https://github.com/JuanFPaz/Sistema-Vacacional',
    repoTitle: 'JuanFPaz/Sistema-Vacacional',
    url: null,
    urlTitle: null,
    tecUno: 'Java - Maven',
    tecDos: 'Apache Neatbeans - Git - Github - Notion',
    html: `
      <p><b>Sistema Vacacional</b> es una aplicacion de <b>escritorio</b> desarrollada con <b>Java</b> y configurada con <b>Maven</b>. Este <b>proyecto integra</b> lo aprendido en el <a target='blank' href='https://www.youtube.com/watch?v=L1oMLsiMusQ'>curso de Java</a> en mis inicios como programador.</p>
      <p>El objetivo de esta aplicacion es realizar el calculo de las vacaciones de un empleado, en base a su antigüedad y su puesto en la empresa. Pero lo que <b>destaco</b> de este proyecto, son los <b>conceptos tecnicos</b> y <b>basicos</b> de la programacion, que me permitieron <b>adaptarme</b> más rapido a nuevos lenguajes como <b>Javascript</b>, entre otras cosas.</p>
    `
  },
  {
    id: 5,
    background: jumpingGuy,
    titulo: 'Jumping Guy',
    figDesc: 'Vista previa de Jumping Guy',
    repositorio: 'https://github.com/JuanFPaz/Jumping-Guy',
    repoTitle: 'JuanFPaz/Jumping-Guy',
    url: '',
    urlTitle: '',
    tecUno: 'Unity - C#',
    tecDos: 'VS Code - Git - Github - Notion',
    html: `
      <p><b>Jumping Guy</b> es un <b>videojuego 2D</b> desarrollado en <b>Unity Engine</b> y <b>C#</b>. Este <b>proyecto integrada</b> lo aprendido en el <a target='blank' href='https://hektorprofe.net/'>curso de Unity</a>.</p>
      <p>La jugabilidad es similar al juego del <b>Dino Chrome</b>, el personaje principal debe esquivar la mayor cantidad de obstaculos posibles. Lo que <b>destaco</b> de este proyecto, son los <b>conceptos tecnicos</b> aprendidos sobre el desarrollo de videojuegos, a configurar un escenario, creacion y movimiento de personajes, sobre fisicas 2D y la creacion de scripts con <b>C#</b>, entre otras cosas más.</p>      `
  }
]

function Proyectos ({ id }) {
  const [boton, setBoton] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) {
      console.log('Ref es :' + ref)
    } else {
      ref.current.innerHTML = proyectosContenido[boton].html
    }
  }, [boton])

  function handleButton (idx) {
    setBoton(idx)
  }

  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='proyectos-encabezado'>
          <h1>Proyectos</h1>
        </div>
        <div className='proyectos-contenido d-lg-flex flex-lg-row'>
          <div className='proyectos-botones'>
            <ul className='d-flex flex-lg-column'>
              {proyectosBotones.map(b => (
                <li key={b.id}>
                  <button className={boton === b.id ? 'seleccionado' : ''} onClick={() => { handleButton(b.id) }}>
                    <div className={`iconTec ${b.class}`} style={{ backgroundImage: `url(${b.src})` }} />
                    {b.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='proyectos-descripcion'>
            <div className='proyectos-titulo'>
              <h2>{proyectosContenido[boton].titulo}</h2>
            </div>
            <div className='proyectos-resumen'>
              <div className='proyectos-img-container'>

                <div className='proyectos-img'>
                  <img src={proyectosContenido[boton].background} alt={proyectosContenido[boton].figDesc} />
                </div>
                <div className='proyectos-enlaces-container'>
                  <h3 style={{ color: '#fff' }}>Enlaces:</h3>
                  <div className='proyectos-enlaces'>
                    {proyectosContenido[boton].url
                      ? (
                        <a href={proyectosContenido[boton].url} target='blank'>
                          <img src={enlace} alt={`Link a enlace del proyecto ${proyectosContenido[boton].titulo}`} />
                        </a>)
                      : (<></>)}
                    <a href={proyectosContenido[boton].repositorio} target='blank'>
                      <img src={ghBlue} alt={`Link a enlace del repositorio de ${proyectosContenido[boton].titulo}`} />
                    </a>
                  </div>
                </div>
              </div>
              <div className='proyectos-text'>
                <div ref={ref} className='proyectos-parrafos' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos
