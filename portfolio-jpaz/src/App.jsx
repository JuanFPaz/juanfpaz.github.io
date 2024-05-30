import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Main from './componentes/Main'
import { useEffect, useState } from 'react'

function App () {
  const [lang, setLang] = useState('es')
  useEffect(() => {
    console.log('Holaa')
    const currentPath = window.location.pathname
    if (currentPath === '/') {
      document.querySelector('html').setAttribute('lang', 'es')
      setLang('es')
    } else if (currentPath === '/br') {
      document.querySelector('html').setAttribute('lang', 'pt')
      setLang('br')
    } else if (currentPath === '/en') {
      document.querySelector('html').setAttribute('lang', 'en')
      setLang('en')
    }
  }, [])
  return (
    <>
      <Header lang={lang} />
      <Main />
      <Footer />
    </>
  )
}

export default App
