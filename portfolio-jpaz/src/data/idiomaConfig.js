const appConfig = {
  es: [
    {
      attribute: 'lang',
      value: 'es',
      lang: 'es',
      title: 'Juan Paz : Desarrollador Web'
    }
  ],
  br: [
    {
      attribute: 'lang',
      value: 'pt',
      lang: 'br',
      title: 'Juan Paz : Desenvolvedor Web'
    }],
  en: [
    {
      attribute: 'lang',
      value: 'en',
      lang: 'en',
      title: 'Juan Paz : Web Developer'
    }
  ]
}

export const headerConfig = {
  offCanvasConfig: {
    es: [
      {
        id: 0,
        href: '#sobremi',
        list: 'Sobre Mi'
      },
      {
        id: 1,
        href: '#proyectos',
        list: 'Proyectos'
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
    ],
    br: [
      {
        id: 0,
        href: '#sobremi',
        list: 'Sobre Mim'
      },
      {
        id: 1,
        href: '#skills',
        list: 'Skills'
      },
      {
        id: 2,
        href: '#experiencia',
        list: 'Experiência'
      }, {
        id: 3,
        href: '#educacion',
        list: 'Educação'
      }
    ],
    en: [
      {
        id: 0,
        href: '#sobremi',
        list: 'About Me'
      },
      {
        id: 1,
        href: '#skills',
        list: 'Skills'
      },
      {
        id: 2,
        href: '#experiencia',
        list: 'Experience'
      },
      {
        id: 3,
        href: '#educacion',
        list: 'Education'
      }
    ]
  },
  dropDownConfig: {
    es: [
      {
        id: 0,
        flag: 'https://media.api-sports.io/flags/ar.svg',
        href: '/',
        language: 'Español (AR)'
      },
      {
        id: 1,
        flag: 'https://media.api-sports.io/flags/br.svg',
        href: '/br',
        language: 'Portugues (BR)'
      },
      {
        id: 2,
        flag: 'https://media.api-sports.io/flags/us.svg',
        href: '/en',
        language: 'Ingles (US)'
      }
    ],
    br: [
      {
        id: 0,
        flag: 'https://media.api-sports.io/flags/ar.svg',
        href: '/',
        language: 'Espanhol (AR)'
      },
      {
        id: 1,
        flag: 'https://media.api-sports.io/flags/br.svg',
        href: '/br',
        language: 'Português (BR)'
      },
      {
        id: 2,
        flag: 'https://media.api-sports.io/flags/us.svg',
        href: '/en',
        language: 'Inglês (US)'
      }
    ],
    en: [
      {
        id: 0,
        flag: 'https://media.api-sports.io/flags/ar.svg',
        href: '/',
        language: 'Spanish (AR)'
      },
      {
        id: 1,
        flag: 'https://media.api-sports.io/flags/br.svg',
        href: '/br',
        language: 'Portugese (BR)'
      },
      {
        id: 2,
        flag: 'https://media.api-sports.io/flags/us.svg',
        href: '/en',
        language: 'English (US)'
      }
    ]
  },
  flagConfig: {
    es: 'https://media.api-sports.io/flags/ar.svg',
    br: 'https://media.api-sports.io/flags/br.svg',
    en: 'https://media.api-sports.io/flags/us.svg'
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
  ],
  br: [
    {
      id: 0,
      message: 'Olá, meu nome é'
    },
    {
      id: 1,
      message: 'Juan Paz ☮'
    },
    {
      id: 2,
      message: 'Bem-venidos ao meu site.'
    },
    {
      id: 3,
      html: 'Sou um desenvolvedor web com experiência na criação de aplicações Frontend e Backend com Javascript, gerenciando eficazmente meus projetos e possuindo sólidos conhecimentos no uso de várias ferramentas de desenvolvimento e linguagens de programação. Atualmente, estou focado em crescer como profissional no desenvolvimento de aplicações (não apenas no desenvolvimento web). '
    }
  ],
  en: [
    {
      id: 0,
      message: 'Hi, my name is'
    },
    {
      id: 1,
      message: 'Juan Paz ☮'
    },
    {
      id: 2,
      message: 'Welcome to my website.'
    },
    {
      id: 3,
      html: "I'm a web developer with experience creating Frontend and Backend applications with Javascript, effectively managing my projects, and possessing solid knowledge of various development tools and programming languages. Currently, I'm focused on growing as a professional in application development (not only in web development)."

    }
  ]
}
export const sobreMiConfig = {
  sobreMiTitleConfig: {
    es: ['{ Sobre Mi }'],
    br: ['{ Sobre Mim }'],
    en: ['{ About Me }']
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
    ],
    br: [
      {
        id: 0,
        message: 'Olá! Meu nome é Juan Paz. Sou trabalhador autônomo em aplicativos de entrega e desenvolvedor web nos meus tempos livres. Interessei-me pelo desenvolvimento de aplicações em 2019 por curiosidade sobre como foram criados os jogos, aplicações e sites que costumo usar frequentemente.'
      },
      {
        id: 1,
        message: 'Comecei minha jornada na programação com Java, adquirindo uma base sólida em conceitos básicos e explorando o desenvolvimento de jogos com Gamemaker e Unity. Mais tarde, inscrevi-me no programa Argentina Programa, onde aprendi HTML, CSS, JavaScript, TypeScript, Ruby e frameworks como React, Angular e Springboot. Também reforcei meus conhecimentos em Java, diferentes paradigmas de programação, metodologias ágeis como SCRUM e ferramentas como Git e GitHub, entre outras coisas.'
      },
      {
        id: 2,
        message: 'Minhas principais habilidades como desenvolvedor incluem o manuseio de estruturas de dados, trabalhar com arrays e objetos em JavaScript e criar código reutilizável e sustentável. Gosto de desenvolver aplicações dinâmicas com React e, recentemente, comecei a usar Node.js para criar APIs e manipular dados, como arquivos JSON, do backend para enviar ao frontend. No entanto, reconheço que meu ponto mais fraco é o design, e estou comprometido a melhorar nesse aspecto.'
      },
      {
        id: 3,
        message: 'Atualmente, meus interesses estão focados em aprender inglês e português, na gestão de dados com MySQL para manipular grandes estruturas de dados e no desenvolvimento backend com Node.js, TypeScript ou Java.'
      }
    ],
    en: [
      {
        id: 0,
        message: 'Hello! My name is Juan Paz. I am self-employed in delivery applications and a web developer in my free time. I became interested in application development in 2019 out of curiosity about how the games, applications, and websites I frequently use were created.'
      },
      {
        id: 1,
        message: 'I began my programming journey with Java, acquiring a solid foundation in basic concepts and exploring game development with Gamemaker and Unity. Later, I enrolled in Argentina Programa, where I learned HTML, CSS, JavaScript, TypeScript, Ruby, and frameworks such as React, Angular, and Springboot. I also reinforced my knowledge in Java, different programming paradigms, agile methodologies like SCRUM, and tools like Git and GitHub, among other things.'
      },
      {
        id: 2,
        message: 'My main skills as a developer include handling data structures, working with arrays and objects in JavaScript, and creating reusable and maintainable code. I enjoy developing dynamic applications with React, and I have recently started using Node.js to create APIs and manipulate data, such as JSON files, from the backend to send to the frontend. However, I recognize that my weakest point is design, and I am committed to improving in this area.'
      },
      {
        id: 3,
        message: 'Currently, my interests are focused on learning English and Portuguese, managing data with MySQL to handle large data structures, and backend development with Node.js, TypeScript, or Java.'
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
    ],
    br: [
      {
        id: 0,
        text: 'Nome: Juan Paz'
      },
      {
        id: 1,
        text: 'Data de Nascimiento: 25/11/1994'
      },
      {
        id: 2,
        text: 'Nacionalidade: Argentino'
      },
      {
        id: 3,
        text: 'Endereço: Ciudad de Buenos Aires'
      },
      {
        id: 4,
        text: 'Ver Curriculo'
      }
    ],
    en: [
      {
        id: 0,
        text: 'Name: Juan Paz'
      },
      {
        id: 1,
        text: 'Date of Birth: 25/11/1994'
      },
      {
        id: 2,
        text: 'Nacionality: Argentinian'
      },
      {
        id: 3,
        text: 'Address: Ciudad de Buenos Aires'
      },
      {
        id: 4,
        text: 'View Resume'
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
    }
  ]
}

export const experienciaConfig = {
  experienciaTitleConfig: {
    es: ['{ Experiencia }'],
    br: ['{ Experiência }'],
    en: ['{ Experience }']
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
    ],
    br: [
      {
        id: 0,
        titulo: 'Desenvolvedor Web',
        subtitulo: 'Portfólio jpaz.ar',
        fechaToString: 'Outubro 2023 - Atualidade',
        descripcion: [
          'Incluo o desenvolvimento do meu portfólio como experiência porque é uma representação dos conhecimentos adquiridos ao longo desses anos.',
          'Configurei meu domínio web no Cloudflare, implantei meu portfólio com sucesso usando o Github Pages e implementei melhorias contínuas sem prejudicar o fluxo do meu projeto.',
          'Adquiri a habilidade de gerenciar meus projetos, implementando metodologias ágeis de trabalho como SCRUM e adaptando-as às minhas necessidades.'
        ],
        tecnologias: [
          'Javascript', 'HTML', 'CSS', 'React', 'Vite', 'Git', 'Github', 'Cloudflare', 'Notion'
        ]
      },
      {
        id: 1,
        titulo: 'Trabalhador autônomo',
        subtitulo: 'Aplicativos de entrega',
        fechaToString: 'Setembro 2020 - Atualidade',
        descripcion: [
          'Realizo entregas na Cidade de Buenos Aires e na região metropolitana Norte, utilizando plataformas como Pedidos Ya e Rappi.',
          'Desenvolvi habilidades para gerenciar, planejar e organizar meu trabalho para cumprir minhas obrigações financeiras de maneira consistente.',
          'Capaz de adaptar meus objetivos em situações imprevistas em um ambiente de trabalho dinâmico.',
          'Obtive minha primeira habilitação para conduzir e adquiri meu primeiro veículo motorizado, melhorando não apenas a eficiência das entregas, mas também me proporcionando segurança ao ter cobertura para qualquer tipo de sinistro.'
        ],
        tecnologias: [
          'Trello', 'Google Drive Sheets', 'Google Calendar'
        ]
      },
      {
        id: 2,
        titulo: 'Operador  de Telemarketing',
        subtitulo: 'Dyktel S.A.',
        fechaToString: 'Março 2017 - Setembro 2020',
        descripcion: [
          'Contactaba clientes para ofrecer los servicios de tarjetas de crédito del Banco Santander Río.',
          'Me adapte progresivamente con el tiempo, mejorando mis números de ventas, posicionándome entre los cinco mejores vendedores de la empresa.',
          'Implemente una eficaz gestión de datos utilizando Excel, para gestionar la información de clientes interesados que no aplicaban y posteriormente poder concretar las ventas.'
        ]
      }
    ],
    en: [
      {
        id: 0,
        titulo: 'Web Developer',
        subtitulo: 'Portfolio jpaz.ar',
        fechaToString: 'October 2023 - Present',
        descripcion: [
          'I include the development of my Portfolio as an experience because it is a representation of the knowledge I have acquired over these years.',
          'Configured my web domain using Cloudflare, successfully deployed my portfolio using GitHub Pages, and implemented continuous improvements without disrupting the flow of my project.',
          'I acquired the ability to manage my projects, implementing agile work methodologies such as SCRUM and adapting them to my needs.'
        ],
        tecnologias: [
          'Javascript', 'HTML', 'CSS', 'Figma', 'React', 'Vite', 'Nodejs', 'Git', 'Github', 'Cloudflare', 'Notion'
        ]
      },
      {
        id: 1,
        titulo: 'Self-Employed Worker',
        subtitulo: 'Delivery Applications',
        fechaToString: 'September 2020 - Present',
        descripcion: [
          'I perform delivery tasks in Buenos Aires City and GBA North using platforms such as Pedidos Ya and Rappi.',
          'Developed the ability to manage, plan, and organize my work to consistently meet my financial obligations.',
          'Capable of adjusting my goals in unforeseen situations in a dynamic work environment.',
          "Obtained my first driver's license and acquired my first motor vehicle, not only improving delivery efficiency but also providing security with coverage for any type of accident."
        ],
        tecnologias: [
          'Trello', 'Google Drive Sheets', 'Google Calendar'
        ]
      },
      {
        id: 2,
        titulo: 'Telemarketing Executive',
        subtitulo: 'Dyktel S.A.',
        fechaToString: 'March 2017 - September 2020',
        descripcion: [
          'Contacted clients to offer Bank Santander Río credit card services',
          'Adapted progressively over time, improving my sales numbers, positioning myself among the top five sellers in the company.',
          "Implemented an effective data management system using Excel to handle information from interested clients who didn't apply initially and subsequently closing sales."
        ]
      }
    ]
  }
}

export const educacionConfig = {
  educacionTitleConfig: {
    es: ['{ Educacion }'],
    br: ['{ Educação }'],
    en: ['{ Education }']
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
    ],
    br: [
      {
        id: 0,
        institucion: 'Universidad Tecnologica Nacional - Argentina Programa',
        ubicacion: 'Localizaçao: Buenos Aires.',
        titulo: 'Certificado: Desenvolvedor Front End React',
        fechaToString: 'Periodo: Fevreiro 2023 - Dezembro 2023'
      },
      {
        id: 1,
        institucion: 'Instituto Nacional de Tecnologia Industrial - Argentina Programa',
        ubicacion: 'Localizaçao: Buenos Aires.',
        titulo: 'Certificado: Desenvolvedor Full Stack',
        fechaToString: 'Periodo: Setembro  2022 - Dezembro 2022'
      },
      {
        id: 2,
        institucion: 'Centro Universitario Vicente Lopez',
        ubicacion: 'Localizaçao: Buenos Aires.',
        titulo: 'Certificado: Manutenção de PC',
        fechaToString: 'Periodo: Agosto 2018 - Dezembro  2018'
      },
      {
        id: 3,
        institucion: 'Colegio Julio Argentino Roca Nº8 DE 10',
        ubicacion: 'Localizaçao: Ciudad de Buenos Aires.',
        titulo: 'Certificado: Ensino Médio',
        fechaToString: 'Periodo: Março 2010 - Dezembro 2014'
      }
    ],
    en: [
      {
        id: 0,
        institucion: 'Universidad Tecnologica Nacional - Argentina Programa',
        ubicacion: 'Location: Buenos Aires.',
        titulo: 'Certificate: Front End React Developer',
        fechaToString: 'Period: February 2023 - December 2023'
      },
      {
        id: 1,
        institucion: 'Instituto Nacional de Tecnologia Industrial - Argentina Programa',
        ubicacion: 'Location: Buenos Aires.',
        titulo: 'Certificate: Full Stack Developer',
        fechaToString: 'Period: September 2022 - December 2022'
      },
      {
        id: 2,
        institucion: 'Centro Universitario Vicente Lopez',
        ubicacion: 'Location: Buenos Aires.',
        titulo: 'Certificate: PC Maintenance',
        fechaToString: 'Period: Agosto 2018 - Dezembro 2018'
      },
      {
        id: 3,
        institucion: 'Colegio Julio Argentino Roca Nº8 DE 10',
        ubicacion: 'Location: Ciudad de Buenos Aires.',
        titulo: 'Certificate: High School Diploma',
        fechaToString: 'Period: Março 2010 - Dezembro 2014'
      }
    ]
  }
}

export const footerConfig = {
  es: ['Desarrollado por Juan Paz.', 'Desplegado con Github Pages'],
  br: ['Desenvolvido por Juan Paz', 'Implementado com o GitHub Pages'],
  en: ['Developed by Juan Paz', 'Deployed with GitHub Pages']
}

export default appConfig
