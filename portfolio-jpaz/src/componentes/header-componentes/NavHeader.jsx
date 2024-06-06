import { useState, useEffect } from 'react'
import DropdownNav from './nav-componentes/DropdownNav'
import OffcanvasNav from './nav-componentes/OffcanvasNav'

const offCanvasText = {
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
      href: '#educacion',
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
}

const dropDownText = {
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
}
const flagImg = {
  es: 'https://media.api-sports.io/flags/ar.svg',
  br: 'https://media.api-sports.io/flags/br.svg',
  en: 'https://media.api-sports.io/flags/us.svg'
}

export default function NavHeader ({ lang }) {
  const [langOffCanvas, setLangOffCanvas] = useState(offCanvasText[lang])
  const [langDropDown, setLangDropDown] = useState(dropDownText[lang])
  const [flagDropDown, setFlagDropDown] = useState(flagImg[lang])

  useEffect(() => {
    setLangOffCanvas(offCanvasText[lang])
    setLangDropDown(dropDownText[lang])
    setFlagDropDown(flagImg[lang])
  }, [lang])

  return (
    <div className='navHeader'>
      <DropdownNav dropDownText={langDropDown} flagDropDown={flagDropDown} />
      <OffcanvasNav offCanvasText={langOffCanvas} />
    </div>
  )
}
