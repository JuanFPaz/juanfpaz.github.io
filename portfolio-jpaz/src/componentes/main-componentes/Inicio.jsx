/* eslint-disable no-unused-vars */
import './Section.css'

// const inicioText = {
//   es: [
//     {
//       id: 0,
//       message: 'Hola, mi nombre es'
//     },
//     {
//       id: 1,
//       message: 'Juan Paz ☮'
//     },
//     {
//       id: 2,
//       message: 'Te doy la bienvenida a mi sitio web.'
//     }
//   ],
//   br: [
//     {
//       id: 0,
//       message: 'Olá, meu nome é'
//     },
//     {
//       id: 1,
//       message: 'Juan Paz ☮'
//     },
//     {
//       id: 2,
//       message: 'Sejam bem-venidos ao meu site.'
//     }
//   ],
//   en: [
//     {
//       id: 0,
//       message: 'Hi, my name is'
//     },
//     {
//       id: 1,
//       message: 'Juan Paz ☮'
//     },
//     {
//       id: 2,
//       message: 'Welcome to my website.'
//     }
//   ]
// }

function Inicio ({ id, inicioText }) {
  return (
    <section>
      <div className='backgroundContainer'>
        <div id={id}>
          <h1>{inicioText[0].message}</h1>
          <h2>{inicioText[1].message}</h2>
          <h3>{inicioText[2].message}</h3>
        </div>
      </div>
    </section>
  )
}

export default Inicio
