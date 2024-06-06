/* eslint-disable react/display-name */
import Dropdown from 'react-bootstrap/Dropdown'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Languaje.css'

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

export default function DropdownNav ({ dropDownText, flagDropDown }) {
  /* Por defecto dejamos todo en español owo */
  const [flag, setFlag] = useState(flagDropDown)
  const [langDrop, setLangDrop] = useState(dropDownText)

  useEffect(() => {
    setLangDrop(dropDownText)
    setFlag(flagDropDown)
  }, [dropDownText, flagDropDown])

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
              <Link to={href} key={id}>
                {language}
                <img
                  src={flag}
                  className='select-languaje'
                />
              </Link>
            )
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
