/* eslint-disable react/display-name */
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import { NavLink } from 'react-router-dom'
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
    <div className='toggleIcon'>
      &#x25bc;
    </div>
  </button>
))

export default function DropdownNav ({ dropDownText, flagDropDown }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          id='dropdown-custom-components dropdown-autoclose-true'
        >
          <img src={flagDropDown} className='current-language' />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ul className='listLanguage'>
            {dropDownText.map(({ id, flag, href, language }) =>
              (
                <li key={id}>
                  <NavLink to={href}>
                    {language}
                    <img
                      src={flag}
                      className='select-language'
                    />
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
