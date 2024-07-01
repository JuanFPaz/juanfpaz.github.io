const appConfig = {
  es: [
    {
      attribute: 'lang',
      value: 'es',
      lang: 'es',
      title: 'Juan Paz : Desarrollador Web'
    }
  ]
}

export const headerConfig = {
  offCanvasConfig: {
    es: [
      {
        id: 0,
        href: '#proyectos',
        list: 'Proyectos'
      },
      {
        id: 1,
        href: '#sobremi',
        list: 'Sobre Mi'
      },
      {
        id: 2,
        href: '#skills',
        list: 'Skills'
      },
      {
        id: 3,
        href: '#experiencia',
        list: 'Experiencia'
      },
      {
        id: 4,
        href: '#educacion',
        list: 'Educacion'
      }
    ]
  }
}
export const inicioConfig = {
  es: [
    {
      id: 0,
      message: 'Hola, mi nombre es'
    },
    {
      id: 1,
      message: 'Juan Paz ☮'
    },
    {
      id: 2,
      message: 'Bienvenido a mi sitio web.'
    },
    {
      id: 3,
      html: `
      <p>
        Soy un desarrollador web especializado en Javascript creando aplicaciones Front end y Back end, gestionando eficazmente mis proyectos y con conocimientos solidos utilizando diferentes herramientas de desarrollo y lenguajes de programacion. Actualmente estoy enfocado en crecer como profesional en el desarrollo de aplicaciones (no solo en el desarrollo web).
      </p>
      `
      // html: 'Soy un desarrollador web y actualmente me especializo creando aplicaciones Front end y Back end con Javascript, gestionando eficazmente mis proyectos y con conocimientos solidos utilizando diferentes herramientas de desarrollo y lenguajes de programacion. Actualmente estoy enfocado en crecer como profesional en el desarrollo de aplicaciones (no solo en el desarrollo web).'
    }
  ]
}
export const sobreMiConfig = {
  sobreMiTitleConfig: {
    es: ['{ Sobre Mi }']
  },
  sobreMiMainConfig: {
    es: [
      {
        id: 0,
        message: 'Soy trabajador autónomo en aplicaciones de reparto y desarrollador web en mis tiempos libres. Me interesé por el desarrollo de aplicaciones en 2019 por la curiosidad de saber cómo se crearon los juegos, aplicaciones y sitios web que suelo recurrir frecuentemente.'
      },
      {
        id: 1,
        message: 'Comencé mi viaje en la programación con Java, adquiriendo una base sólida en conceptos básicos y exploré el desarrolo de videojuegos con Gamemaker y Unity. Más tarde, me inscribí en Argentina Programa, donde reforce mis conocimientos con nuevas tecnologias como Javascript, React, Vite, Node, Git, Github y metodologias de trabajo como Scrum.'
      },
      {
        id: 2,
        message: 'Mis habilidades principales como desarrollador incluyen el manejo de estructuras de datos, crear código reutilizable y mantenible. Ademas desarrolle una solida gestion de proyectos y tareas, lo que me permite mantener un equilibrio entre mi responsabilidades y mi actual pasatiempo. Sin embargo, reconozco que mi punto más débil es el diseño, y estoy comprometido a mejorar en ese aspecto.'
      },
      {
        id: 3,
        message: 'Actualmente, mis intereses se enfocan en aprender inglés y portugués, en la gestión de datos con MySQL para manipular grandes estructuras de datos, y en el desarrollo backend con Node.js, TypeScript, o Java.'
      }
    ]
  },
  sobreMiAsideConfig: {
    es: [
      {
        id: 0,
        text: 'Nombre: Juan Paz'
      },
      {
        id: 1,
        text: 'Fecha de Nacimiento: 25/11/1994'
      },
      {
        id: 2,
        text: 'Nacionalidad: Argentino'
      },
      {
        id: 3,
        text: 'Domicilio: Ciudad de Buenos Aires'
      },
      {
        id: 4,
        text: 'Ver Curriculum Vitae'
      }
    ]
  }
}

export const softSkillsConfig = {
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
    }
  ]
}

export const experienciaConfig = {
  experienciaTitleConfig: {
    es: ['{ Experiencia }']
  },
  experienciaListConfig: {
    es: [
      {
        id: 0,
        titulo: 'Desarrollador Web',
        subtitulo: 'Portfolio jpaz.ar',
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
        fechaToString: 'Marzo 2017 - Septiembre 2020',
        descripcion: [
          'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
          'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
          'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
        ]
      }
    ]
  }
}

export const educacionConfig = {
  educacionTitleConfig: {
    es: ['{ Educacion }']
  },
  educacionListConfig: {
    es: [
      {
        id: 0,
        institucion: 'Universidad Tecnologica Nacional - Argentina Programa',
        ubicacion: 'Ubicacion: Buenos Aires.',
        titulo: 'Titulo: Desarrollador Front End React',
        fechaToString: 'Periodo: Febrero 2023 - Diciembre 2023'
      },
      {
        id: 1,
        institucion: 'Instituto Nacional de Tecnologia Industrial - Argentina Programa',
        ubicacion: 'Ubicacion: Buenos Aires.',
        titulo: 'Titulo: Desarrollador Full Stack',
        fechaToString: 'Periodo: Septiembre 2022 - Diciembre 2022'
      },
      {
        id: 2,
        institucion: 'Centro Universitario Vicente Lopez',
        ubicacion: 'Ubicacion: Buenos Aires.',
        titulo: 'Titulo: Mantenimiento de PC',
        fechaToString: 'Periodo: Agosto 2018 - Diciembre 2018'
      },
      {
        id: 3,
        institucion: 'Colegio Julio Argentino Roca Nº8 DE 10',
        ubicacion: 'Ubicacion: Ciudad de Buenos Aires.',
        titulo: 'Titulo: Bachiller',
        fechaToString: 'Periodo: Marzo 2010 - Diciembre 2014'
      }
    ]
  }
}

export const footerConfig = {
  es: ['Desarrollado por Juan Paz.', 'Desplegado con Github Pages']
}

export default appConfig
