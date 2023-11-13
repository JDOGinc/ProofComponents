import '../css/NavBarHeader.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavElement } from './NavItem';
import { useMenuContext } from '../context/MenuContext';

function NavBarHeader() {

  const [menuActive, setMenuActive] = useState('Tienda');
  const [currentMenuActive, setCurrentMenuActive] = useState(null);
  const [prevMenuActive, setPrevMenuActive] = useState(null);

  const { menu, isMenuOpen, setIsMenuOpen } = useMenuContext();

  useEffect(() => {
    if (menuActive) {
      const _subMenu = menu.filter(item => item.name === menuActive)[0].subMenu;
      setCurrentMenuActive(_subMenu);
    }
  }, [menuActive, menu]);

  const handleHoverMenu = (label) => {
    setMenuActive(label);
    !isMenuOpen && setIsMenuOpen(true);
  }

  const resetMenu = () => {
    setMenuActive(null);
    setCurrentMenuActive(null);
    setPrevMenuActive(null);
    setIsMenuOpen(false);
  }

  return (
    <nav className='nav-container' onMouseLeave={resetMenu}>
      <ul className='nav-list'>
        <li className='nav-element'>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-apple" size="xl" style={{ color: "#ffffff9e", }} />
          </a>
        </li>
        {menu.map((item, index) =>
          <NavElement
            key={`${index}-${item.name}`}
            label={item.name}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            prevMenuActive={prevMenuActive}
            setPrevMenuActive={setPrevMenuActive}
            onMouseEnter={handleHoverMenu}
          />
        )}
        <div
          className={`menu-dropDown-container ${isMenuOpen ? 'shownAnimation' : 'hiddenAnimation'}`}
        >
          {/*  <div
          className={'menu-dropDown-container shownAnimation'}
        > */}
          {currentMenuActive && currentMenuActive.map((item, index) => (
            <div key={`${index}-${item.name}`} className='menu-dropDown-item'>
              <a href="#">{item.name}</a>
            </div>
          ))
          }
        </div>

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

