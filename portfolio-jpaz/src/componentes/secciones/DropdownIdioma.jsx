/* eslint-disable react/display-name */
import Dropdown from 'react-bootstrap/Dropdown'
import React, { useEffect, useState } from 'react'
import './Languaje.css'

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

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
  >
    {children}
    <span className='toggleIcon'>
      &#x25bc;
    </span>
  </button>
))

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState('')

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className='list-unstyled'>
          {React.Children.toArray(children).filter(
            (child) => !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    )
  }
)

export default function DropdownIdioma ({ lang }) {
  /* Por defecto dejamos todo en español owo */
  const [flag, setFlag] = useState('')
  const [langDrop, setLangDrop] = useState([])

  useEffect(() => {
    setLangDrop(dropDownText[lang])
    if (lang === 'es') {
      setFlag(dropDownText[lang][0].flag)
    } else if (lang === 'br') {
      setFlag(dropDownText[lang][1].flag)
    } else if (lang === 'en') {
      setFlag(dropDownText[lang][2].flag)
    }
  }, [lang])

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          id='dropdown-custom-components'
          variant='success'
        >
          <img src={flag} className='current-languaje' />
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          {langDrop.map(({ id, flag, href, language }) =>
            (
              <Dropdown.Item key={id} href={href} className={lang === 'es' ? 'active' : ''}>
                {language}
                <img
                  src={flag}
                  className='select-languaje'
                />
              </Dropdown.Item>
            )
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
