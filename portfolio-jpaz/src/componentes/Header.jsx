/* eslint-disable import/no-absolute-path */
import Logo from './header-componentes/LogoHeader'
import NavHeader from './header-componentes/NavHeader'
import './Header.css'
function Header ({ headerText }) {
  return (
    <header className='fixed-top'>
      <Logo />
      <NavHeader {...headerText} />
    </header>
  )
}

export default Header
