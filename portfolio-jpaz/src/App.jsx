import jpazLogo from './assets/jp-logo-home-10.png'

function App() {
  return (
    <main>
      <section className="content" id="Inicio">
        <h1>Disculpe las molestias</h1>
        <p>Me encuentro creando nuevo contenido para mi sitio web.</p>
        <p>Nos vemos pronto.</p>
        <div className="container">
          <a
            id="logo"
            href="https://github.com/JuanFPaz"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="logo-img"
              src={jpazLogo}
              alt="jp - logo home"
            />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
