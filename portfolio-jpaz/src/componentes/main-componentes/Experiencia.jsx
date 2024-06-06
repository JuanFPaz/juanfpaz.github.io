/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Section.css'

const experiencias = [
  {
    id: 0,
    titulo: 'Colaborador en Github',
    subtitulo: 'Proyectos Basicos sobre Javascript',
    url: '',
    fechaToString: 'Noviembre 2023 - Actualidad',
    descripcion: [
      ''
      // 'Colabore con el dueño del proyecto, aportando mi conocimiento sobre Javascript Ası́ncrono.',
      // 'Conseguı́ resultados positivos al realizar mi primer Fork y los pull request sin dañar el flujo del proyecto.',
      // 'Resúmenes claros y concisos para introducir sobre la asincronia a nuevos usuarios.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'NodeJs', 'Git', 'Github', 'Notion'
    ]
  },
  {
    id: 1,
    titulo: 'Desarrollador Front End',
    subtitulo: 'Portfolio jpaz.ar',
    url: 'https://github.com/JuanFPaz/juanfpaz.github.io',
    fechaToString: 'Octubre 2023 - Diciembre 2023',
    descripcion: [
      'Desarrolle mi portfolio web utilizando React Vite.',
      'Realice pruebas para el despliegue de mi sitio web para garantizar una óptima experiencia a los usuarios.',
      'Implemente con éxito el despliegue en Github Pages como servicio de hosting.',
      'Adquirı́ conocimientos sobre la configuración de un servidor DNS para mi primer dominio web.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'Figma', 'React', 'Vite', 'Nodejs', 'Git', 'Github', 'Cloudflare', 'Notion'
    ]
  },
  {
    id: 2,
    titulo: 'Trabajo autónomo',
    subtitulo: 'Mensajería y Repartos',
    url: null,
    fechaToString: 'Septiembre 2020 - Actualidad',
    descripcion: [
      'Planifico mi trabajo eficientemente, obteniendo flexibilidad en mis horarios.',
      'Capaz de gestionar mis ingresos semanales, garantizando una administración sólida y eficiente.',
      'Ayudo y asisto a mis colegas en diferentes situaciones, consolidando buenas relaciones.',
      'Adquirí mi primera licencia de conducir y mi propio vehículo, que me garantiza movilidad propia.'
    ],
    tecnologias: [
      'Trello', 'Google Drive Sheets', 'Google Calendar'
    ]
  }
]

const experienciasText = {
  es: [
    {
      id: 0,
      titulo: 'Colaborador en Github',
      subtitulo: 'Proyectos Basicos sobre Javascript',
      url: '',
      fechaToString: 'Noviembre 2023 - Actualidad',
      descripcion: [
        ''
      // 'Colabore con el dueño del proyecto, aportando mi conocimiento sobre Javascript Ası́ncrono.',
      // 'Conseguı́ resultados positivos al realizar mi primer Fork y los pull request sin dañar el flujo del proyecto.',
      // 'Resúmenes claros y concisos para introducir sobre la asincronia a nuevos usuarios.'
      ],
      tecnologias: [
        'Javascript', 'HTML', 'CSS', 'NodeJs', 'Git', 'Github', 'Notion'
      ]
    },
    {
      id: 1,
      titulo: 'Desarrollador Front End',
      subtitulo: 'Portfolio jpaz.ar',
      url: 'https://github.com/JuanFPaz/juanfpaz.github.io',
      fechaToString: 'Octubre 2023 - Diciembre 2023',
      descripcion: [
        'Desarrolle mi portfolio web utilizando React Vite.',
        'Realice pruebas para el despliegue de mi sitio web para garantizar una óptima experiencia a los usuarios.',
        'Implemente con éxito el despliegue en Github Pages como servicio de hosting.',
        'Adquirı́ conocimientos sobre la configuración de un servidor DNS para mi primer dominio web.'
      ],
      tecnologias: [
        'Javascript', 'HTML', 'CSS', 'Figma', 'React', 'Vite', 'Nodejs', 'Git', 'Github', 'Cloudflare', 'Notion'
      ]
    },
    {
      id: 2,
      titulo: 'Trabajo autónomo',
      subtitulo: 'Mensajería y Repartos',
      url: null,
      fechaToString: 'Septiembre 2020 - Actualidad',
      descripcion: [
        'Planifico mi trabajo eficientemente, obteniendo flexibilidad en mis horarios.',
        'Capaz de gestionar mis ingresos semanales, garantizando una administración sólida y eficiente.',
        'Ayudo y asisto a mis colegas en diferentes situaciones, consolidando buenas relaciones.',
        'Adquirí mi primera licencia de conducir y mi propio vehículo, que me garantiza movilidad propia.'
      ],
      tecnologias: [
        'Trello', 'Google Drive Sheets', 'Google Calendar'
      ]
    }
  ],
  br: [{
    id: 0,
    titulo: 'Colaborador en Github',
    subtitulo: 'Proyectos Basicos sobre Javascript',
    url: '',
    fechaToString: 'Noviembre 2023 - Actualidad',
    descripcion: [
      ''
    // 'Colabore con el dueño del proyecto, aportando mi conocimiento sobre Javascript Ası́ncrono.',
    // 'Conseguı́ resultados positivos al realizar mi primer Fork y los pull request sin dañar el flujo del proyecto.',
    // 'Resúmenes claros y concisos para introducir sobre la asincronia a nuevos usuarios.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'NodeJs', 'Git', 'Github', 'Notion'
    ]
  },
  {
    id: 1,
    titulo: 'Desarrollador Front End',
    subtitulo: 'Portfolio jpaz.ar',
    url: 'https://github.com/JuanFPaz/juanfpaz.github.io',
    fechaToString: 'Octubre 2023 - Diciembre 2023',
    descripcion: [
      'Desarrolle mi portfolio web utilizando React Vite.',
      'Realice pruebas para el despliegue de mi sitio web para garantizar una óptima experiencia a los usuarios.',
      'Implemente con éxito el despliegue en Github Pages como servicio de hosting.',
      'Adquirı́ conocimientos sobre la configuración de un servidor DNS para mi primer dominio web.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'Figma', 'React', 'Vite', 'Nodejs', 'Git', 'Github', 'Cloudflare', 'Notion'
    ]
  },
  {
    id: 2,
    titulo: 'Trabajo autónomo',
    subtitulo: 'Mensajería y Repartos',
    url: null,
    fechaToString: 'Septiembre 2020 - Actualidad',
    descripcion: [
      'Planifico mi trabajo eficientemente, obteniendo flexibilidad en mis horarios.',
      'Capaz de gestionar mis ingresos semanales, garantizando una administración sólida y eficiente.',
      'Ayudo y asisto a mis colegas en diferentes situaciones, consolidando buenas relaciones.',
      'Adquirí mi primera licencia de conducir y mi propio vehículo, que me garantiza movilidad propia.'
    ],
    tecnologias: [
      'Trello', 'Google Drive Sheets', 'Google Calendar'
    ]
  }],
  en: [{
    id: 0,
    titulo: 'Colaborador en Github',
    subtitulo: 'Proyectos Basicos sobre Javascript',
    url: '',
    fechaToString: 'Noviembre 2023 - Actualidad',
    descripcion: [
      ''
    // 'Colabore con el dueño del proyecto, aportando mi conocimiento sobre Javascript Ası́ncrono.',
    // 'Conseguı́ resultados positivos al realizar mi primer Fork y los pull request sin dañar el flujo del proyecto.',
    // 'Resúmenes claros y concisos para introducir sobre la asincronia a nuevos usuarios.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'NodeJs', 'Git', 'Github', 'Notion'
    ]
  },
  {
    id: 1,
    titulo: 'Desarrollador Front End',
    subtitulo: 'Portfolio jpaz.ar',
    url: 'https://github.com/JuanFPaz/juanfpaz.github.io',
    fechaToString: 'Octubre 2023 - Diciembre 2023',
    descripcion: [
      'Desarrolle mi portfolio web utilizando React Vite.',
      'Realice pruebas para el despliegue de mi sitio web para garantizar una óptima experiencia a los usuarios.',
      'Implemente con éxito el despliegue en Github Pages como servicio de hosting.',
      'Adquirı́ conocimientos sobre la configuración de un servidor DNS para mi primer dominio web.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'Figma', 'React', 'Vite', 'Nodejs', 'Git', 'Github', 'Cloudflare', 'Notion'
    ]
  },
  {
    id: 2,
    titulo: 'Trabajo autónomo',
    subtitulo: 'Mensajería y Repartos',
    url: null,
    fechaToString: 'Septiembre 2020 - Actualidad',
    descripcion: [
      'Planifico mi trabajo eficientemente, obteniendo flexibilidad en mis horarios.',
      'Capaz de gestionar mis ingresos semanales, garantizando una administración sólida y eficiente.',
      'Ayudo y asisto a mis colegas en diferentes situaciones, consolidando buenas relaciones.',
      'Adquirí mi primera licencia de conducir y mi propio vehículo, que me garantiza movilidad propia.'
    ],
    tecnologias: [
      'Trello', 'Google Drive Sheets', 'Google Calendar'
    ]
  }]
}

function Experiencia ({ id }) {
  const [exp, setExp] = useState(experiencias[0])
  const [boton, setBoton] = useState(0)

  function handleButton (idx) {
    setExp(experiencias[idx])
    setBoton(idx)
  }
  return (
    <section>
      <div id={id} className='experiencia-contenedor'>
        <div className='experiencia-encabezado'>
          <h1>{'{ Experiencias }'}</h1>
        </div>
        <div className='experiencia-contenido'>
          <div className='experiencia-botones'>
            <ul>
              {experiencias.map(exps => (
                <li key={exps.id}> <button id={boton === exps.id ? 'seleccionado' : ''} onClick={() => { handleButton(exps.id) }}>{`${exps.id + 1}. ${exps.titulo}`}</button> </li>
              ))}
              {/* <li> <button> Ejecutivo de Cuentas</button></li> Lo agrego? na */}
            </ul>
          </div>
          <div className='experiencia-descripcion'>
            <h1>{exp.titulo}</h1>
            <h2>{exp.subtitulo}</h2>
            <h3>{exp.fechaToString}</h3>
            <ul>
              {exp.descripcion.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <h4>Habilidades Tecnicas</h4>
            <ul id='tec'>
              {exp.tecnologias.map((tec, idx) => (
                <li key={idx}>{tec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experiencia
