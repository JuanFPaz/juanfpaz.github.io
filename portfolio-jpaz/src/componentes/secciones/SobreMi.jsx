import './Section.css'
import profile from '../../assets/profile.jpg'
import cv from '../../assets/CV-JuanPaz-2023.pdf'

function SobreMi ({ id }) {
  return (
    <section>
      <div id={id} className='sobreMi-contenedor'>
        <div className='sobreMi-encabezado'>
          <h1>{'{ Sobre Mi }'}</h1>
        </div>
        <div className='sobreMi-contenido'>
          <div className='sobreMi-main'>
            <p>Me interese por el desarrollo de Software nacio a mediados de 2019. En ese entonces, durante mis tiempos libres ,di mi primeros pasos con Java como autodidacta,adquiriendo una base solida sobre la programacion y desarrollando mi pensamiento logico</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veniam sapiente fugiat, autem perspiciatis consequuntur delectus provident optio saepe maiores esse ducimus quod, recusandae non animi reiciendis laudantium voluptatem! Consequuntur?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis maiores voluptas hic placeat rem animi blanditiis, cumque quaerat consequuntur eveniet! Illo cupiditate quidem quisquam incidunt consequuntur vero a eos laborum?</p>
            <a href={cv} target='_blank' rel='noopener noreferrer'> CV </a>
          </div>
          <div className='sobreMi-aside'>
            <div className='image-contenedor'>
              <img src={profile} alt='mi-foto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
