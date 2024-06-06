import { useState, useEffect } from 'react'
import './Footer.css'

// const footerText = {
//   es: ['Desarrollado por Juan Paz.', 'Desplegado con Github Pages'],
//   br: ['Desenvolvido por Juan Paz', 'Implementado com o GitHub Pages'],
//   en: ['Developed by Juan Paz', 'Deployed with GitHub Pages']
// }

function Footer ({ footerText }) {
  return (
    <footer>
      <ul>
        <li>{footerText[0]}</li>
        <li>{footerText[1]}</li>
        <li>2023 - 2024</li>
      </ul>
    </footer>
  )
}

export default Footer
