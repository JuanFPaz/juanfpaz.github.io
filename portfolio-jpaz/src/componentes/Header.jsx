import jpazLogo from '../assets/jp-logo-home-10.png'
import './Header.css'

function Header () {
  return (
    <header className='fixed-top'>
      <div className='logo-contenedor'>
        <a href='#' id='logo'>
          <img src={jpazLogo} alt='logo-jpaz' />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#section1'>Inicio</a>
          </li>
          <li>
            <a href='#section2'>Sobre Mi</a>
          </li>
          <li>
            <a href='#section3'>Mis Proyectos</a>
          </li>
          <li>
            <a href='#section4'>Curriculum Vitae</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
