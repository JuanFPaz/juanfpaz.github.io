/* eslint-disable import/no-absolute-path */
import { useEffect, useState } from 'react'
import Logo from './header-componentes/LogoHeader'
import NavHeader from './header-componentes/NavHeader'
import './Header.css'

function Header ({ lang }) {
  const [langHeader, setLangHeader] = useState(null)

  useEffect(() => {
    setLangHeader(lang)
  }, [lang])

  return (
    <header className='fixed-top'>
      {langHeader && (
        <>
          <Logo />
          <NavHeader lang={langHeader} />
        </>
      )}
    </header>
  )
}

export default Header
