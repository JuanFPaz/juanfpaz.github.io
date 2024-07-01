import OffcanvasNav from './nav-componentes/OffcanvasNav'

export default function NavHeader ({ offCanvasText }) {
  return (
    <div className='navHeader d-xl-flex flex-xl-row-reverse'>
      <OffcanvasNav offCanvasText={offCanvasText} />
    </div>
  )
}
