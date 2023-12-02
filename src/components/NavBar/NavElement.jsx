import { Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavElement({ label, canAnimate, setCanAnimate, menuActive, setMenuActive, prevMenuActive, setPrevMenuActive, showCollapsedMenu, children }) {

  const menuDropDownClass = () => {
    if (menuActive === label) {
      if (canAnimate) {
        return 'shownAnimation';
      }
      return 'shown'
    } else if (menuActive == null) {
      if (canAnimate) {
        return 'hiddenAnimation'
      }
      return 'hidden';
    } else if (menuActive !== label) {
      return 'hidden';
    }
    return ''
  }

  //funcion para decidir si se anima o no segun el label, el menuActive y el prevMenuActive
  const setStates = (label) => {

    //comprobamos si al entrar el prevMenuActive es null, si es asi, se puede animar
    if (prevMenuActive === null) {
      setCanAnimate(true)
    } else { //si no es null, no se puede animar
      setCanAnimate(false)
    }
    //se seta el prevMenuActive y el menuActive con el label
    setPrevMenuActive(label)
    setMenuActive(label)
  }
  const resetStates = () => {
    setCanAnimate(true)
    setMenuActive(null)
    setPrevMenuActive(null)
  }
  const handleMouseEnter = (event) => {
    event.stopPropagation();
    console.log('handleMouseEnter');
    if (showCollapsedMenu == false) {
      setStates(label);
    }
  };
  
  const handleMouseLeave = (event) => {
    event.stopPropagation();
    console.log('handleMouseLeave');
    if (showCollapsedMenu == false) {
      resetStates();
    }
  };
  
  const handleMouseClick = (event) => {
    event.stopPropagation();
    if (event.isPropagationStopped()) {
      console.log("El evento ha sido detenido de propagar.");
    }
    event.stopPropagation();
    console.log('handleMouseClick');
    setPrevMenuActive(null);
    setStates(label);
  };
  return (
    <li className='nav-element' onClick={handleMouseClick}>
      <a className={`nav-link ${menuActive === label && !showCollapsedMenu ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        href="#">
        {label}
      </a>
      <FontAwesomeIcon className="icon-next" icon="fa-solid fa-angle-right" size="lg" style={{color: "#ffffff"}} />
      <div
        className={`menu-dropDown-container ${menuDropDownClass()}`}
        onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </li>
  );
}