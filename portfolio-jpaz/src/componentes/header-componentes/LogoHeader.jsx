/* eslint-disable import/no-absolute-path */
import jpazLogo from '/img/jp-logo-home-10.png'

export default function Logo () {
  return (
    <div className='logo-contenedor'>
      <a href='#inicio' id='logo'>
        <img src={jpazLogo} alt='logo-jpaz' />
      </a>
    </div>
  )
}
