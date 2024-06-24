import DropdownNav from './nav-componentes/DropdownNav'
import OffcanvasNav from './nav-componentes/OffcanvasNav'

export default function NavHeader ({ offCanvasText, dropDownText, flagImg }) {
  return (
    <div className='navHeader d-xl-flex flex-xl-row-reverse'>
      <DropdownNav dropDownText={dropDownText} flagDropDown={flagImg} />
      <OffcanvasNav offCanvasText={offCanvasText} />
    </div>
  )
}
