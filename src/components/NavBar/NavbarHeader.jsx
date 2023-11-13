import '../../css/NavBarHeader.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavElement } from './NavItem';
import { NavIcon } from './NavIcon';
//Elementos del menu
const menuList = [
  { name: 'Tienda', url: '#', subMenu: [{name: 'Tienda Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Mac', url: '#', subMenu: [{name: 'Mac Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'iPad', url: '#', subMenu: [{name: 'iPad Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'iPhone', url: '#', subMenu: [{name: 'iPhone Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Watch', url: '#', subMenu: [{name: 'Watch Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'AirPods', url: '#', subMenu: [{name: 'AirPods Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Tv y Casa', url: '#', subMenu: [{name: 'Tv y Casa Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Entretenimiento', url: '#', subMenu: [{name: 'Entrete Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Accesorios', url: '#', subMenu: [{name: 'Acces Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Soporte', url: '#', subMenu: [{name: 'Soporte Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
]
function NavBarHeader() {

  const [canAnimate, setCanAnimate] = useState(true);
  const [menuActive, setMenuActive] = useState(null);
  const [prevMenuActive, setPrevMenuActive] = useState(null);

  return (
    <nav className='nav-container'>
      <ul className='nav-list'>
        <NavIcon url='#'> 
          <FontAwesomeIcon icon="fa-brands fa-apple" size="xl" style={{ color: "#ffffff9e", }} />
        </NavIcon>
        {menuList.map((item, index) => 
          <NavElement 
            key={`${index}-${item.name}`}
            label={item.name}
            canAnimate={canAnimate}
            setCanAnimate={setCanAnimate}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            prevMenuActive={prevMenuActive}
            setPrevMenuActive={setPrevMenuActive}
          >
            <SubMenu>
          </NavElement>
        )}
        <NavIcon url='#'> 
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" style={{ color: "#ffffff9e", }} />
        </NavIcon>
        <NavIcon url='#'> 
          <FontAwesomeIcon icon="fa-solid fa-bag-shopping" size="lg" style={{ color: "#ffffff9e", }} />
        </NavIcon>
      </ul>
    </nav>
  );
}

export default NavBarHeader;

