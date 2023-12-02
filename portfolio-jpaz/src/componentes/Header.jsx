import jpazLogo from '../assets/jp-logo-home-10.png'
import './Header.css'

function Header () {
  return (
    <header className='fixed-top'>
      <div className='logo-contenedor'>
        <a href='#inicio' id='logo'>
          <img src={jpazLogo} alt='logo-jpaz' />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#sobremi'>Sobre Mi</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#miexperiencia'>Mi Experiencia</a>
          </li>
          <li>
            <a href='#misestudios'>Mis Estudios</a>
          </li>
          <li>
            <a href='#curriculum'>Curriculum</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
