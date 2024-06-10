const appConfig = {
  es: [
    {
      attribute: 'lang',
      value: 'es',
      lang: 'es'
    }
  ],
  br: [
    {
      attribute: 'lang',
      value: 'pt',
      lang: 'br'
    }],
  en: [
    {
      attribute: 'lang',
      value: 'en',
      lang: 'en'
    }
  ]
}

export const footerConfig = {
  es: ['Desarrollado por Juan Paz.', 'Desplegado con Github Pages'],
  br: ['Desenvolvido por Juan Paz', 'Implementado com o GitHub Pages'],
  en: ['Developed by Juan Paz', 'Deployed with GitHub Pages']
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
        href: '#skills',
        list: 'Skills'
      },
      {
        id: 2,
        href: '#experiencia',
        list: 'Experiencia'
      }, {
        id: 3,
        href: '#estudios',
        list: 'Estudios'
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
        href: '#estudios',
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
        href: '#estudios',
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
      message: 'Soy un desarrollador web y actualmente me especializo creando aplicaciones Front end y Back end con Javascript, gestionando eficazmente mis proyectos y con conocimientos solidos utilizando diferentes herramientas de desarrollo y lenguajes de programacion. Actualmente estoy enfocado en crecer como profesional en el desarrollo de aplicaciones (no solo en el desarrollo web).'
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
      message: 'Sou um desenvolvedor web com experiência na criação de aplicações Frontend e Backend com Javascript, gerenciando eficazmente meus projetos e possuindo sólidos conhecimentos no uso de várias ferramentas de desenvolvimento e linguagens de programação. Atualmente, estou focado em crescer como profissional no desenvolvimento de aplicações (não apenas no desenvolvimento web). '
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
      message: "I'm a web developer with experience creating Frontend and Backend applications with Javascript, effectively managing my projects, and possessing solid knowledge of various development tools and programming languages. Currently, I'm focused on growing as a professional in application development (not only in web development)."

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
        message: '¡Hola! Me llamo Juan Paz. Soy trabajador autónomo de aplicaciones de reparto y desarrollador web en mis tiempos libres. Me interesé por el desarrollo de aplicaciones en 2019 por la curiosidad de saber cómo se crearon los juegos, aplicaciones y sitios web que suelo recurrir frecuentemente.'
      },
      {
        id: 1,
        message: 'Comencé mi viaje en la programación con Java, adquiriendo una base sólida en conceptos básicos y exploré el desarrollo de videojuegos con Gamemaker y Unity. Más tarde, me inscribí en Argentina Programa, donde aprendí HTML, CSS, JavaScript, TypeScript, Ruby y frameworks como React, Angular y Springboot. También reforcé mis conocimientos en Java, diferentes paradigmas de programación, metodologías ágiles como SCRUM y el uso de herramientas como Git y GitHub, entre otras cosas.'
      },
      {
        id: 2,
        message: 'Mis habilidades principales como desarrollador incluyen el manejo de estructuras de datos, trabajar con arreglos y objetos en JavaScript, y crear código reutilizable y mantenible. Disfruto desarrollando aplicaciones dinámicas con React y recientemente he comenzado a utilizar Node.js para crear APIs y manipular datos, como archivos JSON por ejemplo, desde el backend para enviarlos al frontend. Sin embargo, reconozco que mi punto más débil es el diseño, y estoy comprometido a mejorar en ese aspecto.'
      },
      {
        id: 3,
        message: 'Actualmente, mis intereses se enfocan en aprender inglés y portugués, en la gestión de datos con MySQL para manipular grandes estructuras de datos, y en el desarrollo backend con Node.js, TypeScript, o Java.'
      }
    ],
    br: [
      {
        id: 0,
        message: 'Olá! Meu nome é Juan Paz. Sou trabalhador autônomo de aplicativos de entrega e desenvolvedor web nos meus tempos livres. Interessei-me pelo desenvolvimento de aplicações em 2019 por curiosidade sobre como foram criados os jogos, aplicações e sites que costumo usar frequentemente.'
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
        message: 'Hello! My name is Juan Paz. I am a freelance delivery app worker and a web developer in my free time. I became interested in application development in 2019 out of curiosity about how the games, applications, and websites I frequently use were created.'
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

export default appConfig
