import { useState, useEffect } from 'react'
import './Footer.css'

const footerText = {
  es: ['Desarrollado por Juan Paz.', 'Desplegado con Github Pages'],
  br: ['Desenvolvido por Juan Paz', 'Implementado com o GitHub Pages'],
  en: ['Developed by Juan Paz', 'Deployed with GitHub Pages']
}

function Footer ({ lang }) {
  const [langFooter, setFooter] = useState([])
  useEffect(() => {
    setFooter(footerText[lang])
  }, [lang])
  return (
    <footer>
      <ul>
        <li>{langFooter[0]}</li>
        <li>{langFooter[1]}</li>
        <li>2023 - 2024</li>
      </ul>
    </footer>
  )
}

export default Footer
