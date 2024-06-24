/* eslint-disable import/no-absolute-path */
import { useState, useEffect, useRef } from 'react'
// Iconos
import react from '/assets/react.svg'
import node from '/assets/nodejs-icon.svg'
import unity from '/assets/unity.svg'
import java from '/assets/java.svg'
import js from '/assets/js.svg'
// background
import reactFootballito from '/reactFootballito.png'
import apiFootballito from '/api.png'
import nasa from '/nasa.png'
import musica from '/image2.png'
import sistema from '/sistemav.png'
import jumpingGuy from '/jumpingGuy.png'
import './styles/Proyectos.css'

const proyectosBotones = {
  es: [
    {
      id: 0,
      titulo: 'React Footballito',
      src: react,
      alt: 'Logo de React'
    },
    {
      id: 1,
      titulo: 'API Footballito',
      src: node,
      alt: 'Logo de Node'
    },
    {
      id: 2,
      titulo: 'Reproductor de Musica',
      src: js,
      alt: 'Logo de js'
    },
    {
      id: 3,
      titulo: 'Space Oddity',
      src: js,
      alt: 'Logo de js'
    },
    {
      id: 4,
      titulo: 'Sistema Vacacional',
      src: java,
      alt: 'Logo de Java'
    },
    {
      id: 5,
      titulo: 'Jumping Guy',
      src: unity,
      alt: 'Logo de Unity'
    }
  ]
}

const proyectosContenido = {
  es: [
    {
      id: 0,
      background: reactFootballito,
      figDesc: 'Miniatura del propotito de la App.',
      titulo: 'React Footballito',
      repositorio: 'https://github.com/JuanFPaz/react-footballito',
      repoTitle: 'JuanFPaz/React-Footballito',
      url: 'https://www.figma.com/proto/o4lS9FkHAHoImlcbQuWQl1/Maqueta-de-React-Footballito?node-id=1-921&t=MU3faIi9OkeY1ZEZ-0&scaling=scale-down&page-id=0%3A1&content-scaling=fixed',
      urlTitle: 'Figma | Prototipo de React Footballito',
      tecUno: 'React - Javascript - Vite',
      tecDos:
        'VS Code - HTML - CSS - Figma - Git - Github - Notion',
      html: `
      <p><b>React Footballito</b> es una aplicacion <b>Front end</b> en desarrollo que visualiza los datos de diferentes ligas y copas de fútbol a nivel clubes y selecciones, inspirada en <a href='https://promiedos.com.ar'>promiedos.com.ar</a>.</p>
      <p>Fue un desafio construir la aplicacion desde cero y crear un estilo propio, pero celebro que pude completar el objetivo principal que era crear una estructura de componentes y distribucion de datos solida y reutilizable, para poder manejar y visualizar los datos obtenidos de <b>API Footballito</b> (aplicacion backend desarrollada en simultaneo).</p>
      <p>Actualmente me encuentro mejorando los estilos de la aplicacion para que sea más atractiva y para brindar una mejor experiencia al usuario y reduciendo codigo redudante.</p>
      <p>Para más detalles, podes visitar el <a target='_blank' href='https://www.figma.com/proto/o4lS9FkHAHoImlcbQuWQl1/Maqueta-de-React-Footballito?node-id=1-921&t=MU3faIi9OkeY1ZEZ-0&scaling=scale-down&page-id=0%3A1&content-scaling=fixed'>prototipo de la aplicacion</a> y chequear su estado actual.</p>
    `
    },
    {
      id: 1,
      background: apiFootballito,
      figDesc: 'Miniatura del archivo index.js del proyecto',
      titulo: 'API Footballito',
      repositorio: 'https://github.com/JuanFPaz/API-Football',
      repoTitle: 'JuanFPaz/API-Footballito',
      url: 'https://www.figma.com/proto/o4lS9FkHAHoImlcbQuWQl1/Maqueta-de-React-Footballito?node-id=1-921&t=MU3faIi9OkeY1ZEZ-0&scaling=scale-down&page-id=0%3A1&content-scaling=fixed',
      urlTitle: 'Figma | Prototipo de React Footballito',
      tecUno: 'Node.js - Express - Javascript',
      tecDos:
        'VS Code - Rest Client - JSON - Git - Github - Notion',
      html: `
        <p><b>API Footballito</b> es una aplicacion <b>Back end</b> en desarrollo con  Node.js y Express, que obtiene, procesa y almacena los datos de diferentes ligas y copas de la <a target='blank'>API Sports</a>, para luego <b>facilitar</b> el trabajo en el Front End, enviando los datos solicitados.</p>
        <p>Para desarrollar esta aplicacion, utilice los conocimientos aprendidos de diferentes fuentes como la <a>documentacon oficial de Express</a>, videos tutoriales sobre <a>Node.js</a>, y sobre todo mi <b>pensamiento logico</b> a la hora de crear logica de la aplicacion, creando patroñes de diseño, capturando errores y creando la estructura de datos.</p>
        <p>Actualmente me encuentro actualizando y obteniendo nuevos datos de la API (como la Copa America y Eurocopa), implementando nuevas mejoras y reduciendo codigo redundante.</p>
        <p>Para más detalle de la aplicacion, podes visitar la <a target='link de la doc api footballito'>documentacion sobre API Footballito</a></p>
        `
    },
    {
      id: 2,
      background: musica,
      figDesc: 'Miniatura del Reproductor de musica',
      titulo: 'Reproductor de musica',
      repositorio: 'https://github.com/JuanFPaz/API-Football',
      repoTitle: 'JuanFPaz/API-Footballito',
      url: 'https://musica.jpaz.ar',
      urlTitle: 'musica.jpaz.ar',
      tecUno: 'Javascript - Vite',
      tecDos:
        'VS Code - Git - Github - Notion',
      html: `
        <p><b>Reproductor de música</b> es una aplicación <i>personal</i> desarrollada con JavaScript y configurada con Vite. La creé como una alternativa a las plataformas de <i>streaming</i> para reducir el uso de recursos en mi ordenador mientras programo y para ahorrar batería en mi celular durante mis jornadas laborales.</p>
        <p>Aunque el estilo de la aplicacion es muy simple, <b>destaco</b> la idea inicial de reutilizar la logica de un reproductor de musica que aprendí en el <a href='https://hektorprofe.net/'>curso de <b>Unity</b> y <b>C#</b></a>, adaptarlo a un entorno diferente como el navegador con Javascript utilizando la <a href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio'>documentacion oficial de Mozilla</a></p>
        <p>Actualmente, me encuentro estructurando los datos de los artistas, albumnes y canciones para poder crear diferentes playlist de acuerdo al genero musical y configurando el proyecto para utilizar React.</p>
        `
    },
    {
      id: 3,
      background: nasa,
      titulo: 'Space Oddity',
      figDesc: 'Miniatura de Space Oddity',
      repositorio: 'https://github.com/JuanFPaz/API-Nasa',
      repoTitle: 'JuanFPaz/API-Nasa',
      url: 'https://spaceoddity.jpaz.ar',
      urlTitle: 'spaceoddity.jpaz.ar',
      tecUno: 'Javascript - Vite',
      tecDos:
        'VS Code - Bootstrap 5 - Rest Client - Git - Github - Notion',
      html: `
        <p>Space Oddity es una aplicación frontend desarrollada con JavaScript y configurada con Vite. Esta aplicación obtiene imágenes y videos desde 1996 hasta la fecha actual de la API APOD (Astronomic Picture of the Day) de la NASA.</p>
        <p>Implementar la lógica para obtener los datos de la API fue sencillo gracias a la clara documentación proporcionada por la NASA. El verdadero reto fue diseñar un estilo propio para la aplicación. Con la ayuda y feedback de colegas experimentados, pude adaptar mis necesidades para mejorar el diseño.</p>
        <p>Actualmente, estoy realizando mejoras para brindar una mejor experiencia de usuario, adaptando la aplicación a diferentes dispositivos y manejando errores internos de la API.</p>
        `
    },
    {
      id: 4,
      background: sistema,
      titulo: 'Sistema Vacacional',
      figDesc: 'Miniatura de Space Oddity',
      repositorio: 'https://github.com/JuanFPaz/API-Nasa',
      repoTitle: 'JuanFPaz/API-Nasa',
      url: 'https://spaceoddity.jpaz.ar',
      urlTitle: 'spaceoddity.jpaz.ar',
      tecUno: 'Java - Maven',
      tecDos:
        'Apache Neatbeans - Git - Github - Notion',
      html: `
        <p>Space Oddity es una aplicación frontend desarrollada con JavaScript y configurada con Vite. Esta aplicación obtiene imágenes y videos desde 1996 hasta la fecha actual de la API APOD (Astronomic Picture of the Day) de la NASA.</p>
        <p>Implementar la lógica para obtener los datos de la API fue sencillo gracias a la clara documentación proporcionada por la NASA. El verdadero reto fue diseñar un estilo propio para la aplicación. Con la ayuda y feedback de colegas experimentados, pude adaptar mis necesidades para mejorar el diseño.</p>
        <p>Actualmente, estoy realizando mejoras para brindar una mejor experiencia de usuario, adaptando la aplicación a diferentes dispositivos y manejando errores internos de la API.</p>
        `
    },
    {
      id: 5,
      background: jumpingGuy,
      titulo: 'Jumping Guy',
      figDesc: 'Miniatura de Jumping Guy',
      repositorio: 'https://github.com/JuanFPaz/API-Nasa',
      repoTitle: 'JuanFPaz/API-Nasa',
      url: 'https://spaceoddity.jpaz.ar',
      urlTitle: 'spaceoddity.jpaz.ar',
      tecUno: 'Unity - C#',
      tecDos:
        'VS Code - Git - Github - Notion',
      html: `
        <p>Space Oddity es una aplicación frontend desarrollada con JavaScript y configurada con Vite. Esta aplicación obtiene imágenes y videos desde 1996 hasta la fecha actual de la API APOD (Astronomic Picture of the Day) de la NASA.</p>
        <p>Implementar la lógica para obtener los datos de la API fue sencillo gracias a la clara documentación proporcionada por la NASA. El verdadero reto fue diseñar un estilo propio para la aplicación. Con la ayuda y feedback de colegas experimentados, pude adaptar mis necesidades para mejorar el diseño.</p>
        <p>Actualmente, estoy realizando mejoras para brindar una mejor experiencia de usuario, adaptando la aplicación a diferentes dispositivos y manejando errores internos de la API.</p>
        `
    }
  ],
  br: [],
  en: []
}

function Proyectos ({ id }) {
  const [boton, setBoton] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) {
      console.log('Ref es :' + ref)
    } else {
      ref.current.innerHTML = proyectosContenido.es[boton].html
    }
  }, [boton])

  function handleButton (idx) {
    setBoton(idx)
  }

  return (
    <section>
      <div id={id} className='proyectos-contenedor'>
        <div className='proyectos-encabezado'>
          <h1>{'{ Proyectos }'}</h1>
        </div>
        <div className='proyectos-contenido d-lg-flex'>
          <div className='proyectos-botones'>
            <ul className='d-flex flex-lg-column'>
              {proyectosBotones.es.map(b => (
                <li key={b.id}>
                  <button id={boton === b.id ? 'seleccionado' : ''} style={{ display: 'flex' }} onClick={() => { handleButton(b.id) }}>
                    <div style={{ width: '20px', height: 'auto' }}>
                      <img
                        src={b.src}
                        className='img-fluid'
                        alt={b.alt}
                      />
                    </div>
                    <span style={{ display: 'block' }}>{b.titulo}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='proyectos-descripcion'>
            <div className='proyectos-encabezado'>
              <h1>{proyectosContenido.es[boton].titulo}</h1>
            </div>
            <div className='proyectos-contenido d-lg-flex flex-md-row-reverse'>
              <div className='proyectos-tool'>
                <div className='proyectos-img'>
                  <figure>
                    <img src={proyectosContenido.es[boton].background} />
                    <figcaption><i>{proyectosContenido.es[boton].figDesc}</i></figcaption>
                  </figure>
                  {/* <div
                    className='js'
                    style={{ backgroundImage: `url(${proyectosContenido.es[boton].background})` }}
                  /> */}
                </div>
                <div className='ficha-contenedor'>
                  <ul>
                    <li><b>Repositorio:</b><a href={proyectosContenido.es[boton].repositorio}>{proyectosContenido.es[boton].repoTitle}</a> </li>
                    <li><b>URL:</b> <a href={proyectosContenido.es[boton].url}>{proyectosContenido.es[boton].urlTitle}</a></li>
                    <li><b>Desarrollado con:</b> {proyectosContenido.es[boton].tecUno}</li>
                    <li><b>Otras Herramientas:</b> {proyectosContenido.es[boton].tecDos}</li>
                  </ul>
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
