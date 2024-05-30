/* eslint-disable react/display-name */
import Dropdown from 'react-bootstrap/Dropdown'
import React, { useEffect, useState } from 'react'
import './Languaje.css'

const dropDownText = {
  es:
      {
        listUno: 'Español (AR)',
        listDos: 'Portugues (BR)',
        listTres: 'Ingles (US)'
      },
  en:
    {
      listUno: 'Spanish (AR)',
      listDos: 'Portuguese (BR)',
      listTres: 'English (US)'
    },
  br:
    {
      listUno: 'Espanhol (AR)',
      listDos: 'Português (BR)',
      listTres: 'Inglês (US)'
    }
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

export default function Languaje () {
  const [flag, setFlag] = useState('')
  const [lang, setLang] = useState('es')
  const [langDrop, setDrop] = useState({})

  useEffect(() => {
    const currentPath = window.location.pathname
    if (currentPath === '/') {
      setFlag('https://media.api-sports.io/flags/ar.svg')
      setLang('es')
    } else if (currentPath === '/br') {
      setFlag('https://media.api-sports.io/flags/br.svg')
      setLang('br')
    } else if (currentPath === '/en') {
      setFlag('https://media.api-sports.io/flags/us.svg')
      setLang('en')
    }
  }, [])

  useEffect(() => {
    setDrop(dropDownText[lang])
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
          <Dropdown.Item href='/' className={lang === 'es' ? 'active' : ''}>
            {langDrop.listUno}
            <img
              src='https://media.api-sports.io/flags/ar.svg'
              className='select-languaje'
            />
          </Dropdown.Item>
          <Dropdown.Item href='/br ' className={lang === 'pt' ? 'active' : ''}>
            {langDrop.listDos}
            <img
              src='https://media.api-sports.io/flags/br.svg'
              className='select-languaje'
            />
          </Dropdown.Item>
          <Dropdown.Item href='/en' className={lang === 'en' ? 'active' : ''}>
            {langDrop.listTres}
            <img
              src='https://media.api-sports.io/flags/us.svg'
              className='select-languaje'
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
