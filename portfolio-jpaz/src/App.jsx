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

  const [{ attribute, value, title }] = appConfig[langPath]
  const footerText = footerConfig[langPath]
  const { offCanvasConfig } = headerConfig

  const offCanvasText = offCanvasConfig[langPath]
  const headerText = { offCanvasText }

  return { renderApp: true, attribute, value, title, footerText, headerText }
}

function App () {
  const { renderApp, attribute, value, title, footerText, headerText } = useLoaderData()

  useEffect(() => {
    document.querySelector('html').setAttribute(attribute, value)
    document.querySelector('title').textContent = title
  }, [attribute, value])
  return (
    <>
      {renderApp && (
        <>
          <Header headerText={headerText} />
          <Outlet />
          <Footer footerText={footerText} />
        </>
      )}
    </>
  )
}

export default App
