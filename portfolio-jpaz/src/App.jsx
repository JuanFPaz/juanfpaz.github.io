/* eslint-disable react-refresh/only-export-components */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import { useEffect } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import appConfig, { footerConfig, headerConfig } from './data/idiomaConfig.js'

export function appLoader ({ request }) {
  const url = new URL(request.url)

  const langPath = url.pathname === '/' ? 'es' : url.pathname.replace(/\//g, '')

  const [{ attribute, value }] = appConfig[langPath]
  const footerText = footerConfig[langPath]
  const { offCanvasConfig, dropDownConfig, flagConfig } = headerConfig

  const offCanvasText = offCanvasConfig[langPath]
  const dropDownText = dropDownConfig[langPath]
  const flagImg = flagConfig[langPath]
  const headerText = { offCanvasText, dropDownText, flagImg }

  return { renderApp: true, attribute, value, footerText, headerText }
}

function App () {
  const { renderApp, attribute, value, footerText, headerText } = useLoaderData()

  useEffect(() => {
    document.querySelector('html').setAttribute(attribute, value)
  }, [attribute, value])
  return (
    <>
      {renderApp && (
        <>
          {console.log(headerText)}
          <Header headerText={headerText} />
          <Outlet />
          <Footer footerText={footerText} />
        </>
      )}
    </>
  )
}

export default App
