import '../css/NavBarHeader.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavElement } from './NavItem';

//Elementos del menu
const menuList = [
  { name: 'Tienda', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'Mac', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'iPad', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'iPhone', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'Watch', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'AirPods', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'Tv y Casa', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'Entretenimiento', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'Accesorios', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
  { name: 'Soporte', url: '#', subMenu: [{name: 'Prueba', url: '#'}] },
]
function NavBarHeader() {

  const [canAnimate, setCanAnimate] = useState(true);
  const [menuActive, setMenuActive] = useState(null);
  const [prevMenuActive, setPrevMenuActive] = useState(null);

  
  

  return (
    <nav className='nav-container'>
      <ul className='nav-list'>
        <li className='nav-element'>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-apple" size="xl" style={{ color: "#ffffff9e", }} />
          </a>
        </li>
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
          />
        )}
        <li className='nav-element'>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" style={{ color: "#ffffff9e", }} />
          </a>
        </li>
        <li className='nav-element'>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" size="lg" style={{ color: "#ffffff9e", }} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarHeader;

