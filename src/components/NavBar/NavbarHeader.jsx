import '../../css/NavBarHeader.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavElement } from './NavElement';
import { NavIcon } from './NavIcon';
import { SubMenu } from './SubMenu';

//Elementos del menu
const menuList = [
  { name: 'Home', url: '#', subMenu: [{name: 'Tienda Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Portafolio', url: '#', subMenu: [{name: 'Mac Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Sobre mi', url: '#', subMenu: [{name: 'iPad Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
  { name: 'Fotografía', url: '#', subMenu: [{name: 'iPhone Opcion 1', url: '#'},{name: 'Opcion 2', url: '#'}] },
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
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    if(showCollapsedMenu === true){
      setCanAnimate(true)
      setMenuActive(null)
      setPrevMenuActive(null)
    }
    setShowCollapsedMenu(!showCollapsedMenu);
  }
  return (
    <nav className='nav-container'>
      <ul className='nav-list'>
        <NavIcon url='#' icon='apple'> 
          <FontAwesomeIcon icon="fa-brands fa-apple" size="xl" style={{ color: "#ffffff9e", }} />
        </NavIcon>
        <div className={showCollapsedMenu ? 'nav-element-container open':'nav-element-container'}>
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
              showCollapsedMenu={showCollapsedMenu}
            >
              <SubMenu item={item.subMenu}></SubMenu>
            </NavElement>
          )}
        </div>
        <NavIcon url='#' icon='glass'> 
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" style={{ color: "#ffffff9e", }} />
        </NavIcon>
        <NavIcon url='#' icon='bag'> 
          <FontAwesomeIcon icon="fa-solid fa-bag-shopping" size="lg" style={{ color: "#ffffff9e", }} />
        </NavIcon>
        <button onClick={handleMenuClick} className={`nav-element bars-button ${showCollapsedMenu ? 'open' :''}`}>
          <FontAwesomeIcon icon="fa-solid fa-bars" size='lg' style={{color: "#ffffff9e",}} />
        </button>
      </ul>
    </nav>
  );
}

export default NavBarHeader;

