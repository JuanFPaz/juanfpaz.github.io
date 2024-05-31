import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Main from './componentes/Main'
import { useEffect, useState } from 'react'

function App () {
  const [lang, setLang] = useState(null)
  useEffect(() => {
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
      {lang && (
        <>
          <Header lang={lang} />
          <Main lang={lang} />
          <Footer lang={lang} />
        </>
      )}
    </>
  )
}

export default App
