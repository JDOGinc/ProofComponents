import '../css/NavBarHeader.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBarHeader() {
  const [isDropdownShow, setIsDropdownShow] = useState(null);


  return (
    <nav className='nav-container' onMouseLeave={() => setIsDropdownShow(null)}>
      <ul className='nav-list'>
        <li className='nav-element'>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-apple" size="xl" style={{ color: "#ffffff9e", }} />
          </a>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('tienda')}
            href="#">Tienda</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'tienda' ? ' shown' : ''}`}
            >
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('mac')}
            href="#">Mac</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'mac' ? ' shown' : ''}`}
            >
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('ipad')}
            href="#">iPad</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'ipad' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('iphone')}
            href="#">iPhone</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'iphone' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('watch')}
            href="#">Watch</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'watch' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('airpods')}
            href="#">AirPods</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'airpods' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('tv')}
            href="#">Tv y Casa</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'tv' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('entretenimiento')}
            href="#">Entretenimiento</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'entretenimiento' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('accesorios')}
            href="#">Accesorios</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'accesorios' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
        <li className='nav-element'>
          <a
            onMouseEnter={() => setIsDropdownShow('soporte')}
            href="#">Soporte</a>
          <div
            className={`menu-dropDown-container${isDropdownShow === 'soporte' ? ' shown' : ' hidden'}`}
            onMouseLeave={() => setIsDropdownShow(null)}>
          </div>
        </li>
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
