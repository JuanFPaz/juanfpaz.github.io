/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Section.css'

const experiencias = [
  {
    id: 0,
    titulo: 'Desarrollador Web',
    subtitulo: 'Portfolio jpaz.ar',
    url: 'https://github.com/JuanFPaz/juanfpaz.github.io',
    fechaToString: 'Octubre 2023 - Actualidad',
    descripcion: [
      'Incluyo el desarrollo de mi Portfolio como experiencia porque es una representación de mis conocimientos adquiridos en estos años.',
      'Configuré mi dominio web Cloudflare, desplegué mi portfolio con éxito utilizando Github Pages e implementé mejoras continuas sin dañar el flujo de mi proyecto.',
      'Adquirí la habilidad de gestionar mis proyectos, implementado metodologías agiles de trabajo como SCRUM y adaptándolas a mis necesidades.'
    ],
    tecnologias: [
      'Javascript', 'HTML', 'CSS', 'Figma', 'React', 'Vite', 'Nodejs', 'Git', 'Github', 'Cloudflare', 'Notion'
    ]
  },
  {
    id: 1,
    titulo: 'Trabajo autónomo',
    subtitulo: 'Aplicaciones de reparto',
    fechaToString: 'Septiembre 2020 - Actualidad',
    descripcion: [
      'Realizo tareas de reparto en la Ciudad de Buenos Aires y GBA Zona Norte, utilizando plataformas como Pedidos Ya y Rappi.',
      'Desarrollo la habilidad para gestionar, planificar y organizar mi trabajo para cumplir con mis obligaciones financieras de manera consistente.',
      'Capaz de adaptar mis objetivos en situaciones imprevistas en un entorno de trabajo dinámico.',
      'Obtuve mi primera licencia de conducir y adquirí mi primer vehículo motorizado, no solo mejorando la eficiencia de las entregas, sino que también me brinda seguridad al tener una cobertura ante cualquier tipo de siniestro.'
    ],
    tecnologias: [
      'Trello', 'Google Drive Sheets', 'Google Calendar'
    ]
  },
  {
    id: 2,
    titulo: 'Ejecutivo de Telemarketing ',
    subtitulo: 'Dyktel S.A.',
    fechaToString: 'Marzo 2017 - Octubre 2020',
    descripcion: [
      'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
      'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
      'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
    ]
  },
  {
    id: 3,
    titulo: 'Gastronomico',
    subtitulo: 'BBQ Town',
    fechaToString: 'Marzo 2017 - Octubre 2020',
    descripcion: [
      'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
      'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
      'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
    ]
  },
  {
    id: 4,
    titulo: 'Repositor',
    subtitulo: 'Bazar Variedades',
    fechaToString: 'Marzo 2017 - Octubre 2020',
    descripcion: [
      'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
      'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
      'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
    ]
  },
  {
    id: 5,
    titulo: 'Repositor',
    subtitulo: 'Cinemark Hoyts',
    fechaToString: 'Marzo 2017 - Octubre 2020',
    descripcion: [
      'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
      'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
      'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
    ]
  }
]

const experienciasText = {
  es: [
    {
      id: 1,
      titulo: 'Desarrollador Front End',
      subtitulo: 'Portfolio jpaz.ar',
      url: 'https://github.com/JuanFPaz/juanfpaz.github.io',
      fechaToString: 'Octubre 2023 - Presente',
      descripcion: [
        'Configuré mi dominio web, desplegué mi portfolio con éxito e implementé mejoras continuas sin dañar el flujo de mi proyecto.'
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
                <li key={exps.id}> <button id={boton === exps.id ? 'seleccionado' : ''} onClick={() => { handleButton(exps.id) }}>{`${exps.id + 1}. ${exps.subtitulo}`}</button> </li>
              ))}
            </ul>
          </div>
          <div className='experiencia-descripcion'>
            <h1>{exp.titulo} - {exp.subtitulo}</h1>
            <h3>{exp.fechaToString}</h3>
            <ul>
              {exp.descripcion.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {exp.tecnologias && (
              <>
                <h4>Habilidades Tecnicas</h4>
                <ul id='tec'>
                  {exp.tecnologias.map((tec, idx) => (
                    <li key={idx}>{tec}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experiencia
