export function NavElement({ label, canAnimate, setCanAnimate, menuActive, setMenuActive, prevMenuActive, setPrevMenuActive  }) {

  const menuDropDownClass = () => {
    console.log(menuActive, label, canAnimate)
    if (menuActive === label) {
      if(canAnimate){
        return ' shownAnimation';
      }
      return ' shown'
    } else if (menuActive == null ) {
      if(canAnimate){
        return ' hiddenAnimation'
      }
      return ' hidden';
    } else if (menuActive !== label) {
      return ' hidden';
    }
    return ''
  }
  
  //funcion para decidir si se anima o no segun el label, el menuActive y el prevMenuActive
  const setStates = (label) =>{

    //comprobamos si al entrar el prevMenuActive es null, si es asi, se puede animar
    if (prevMenuActive === null){
      setCanAnimate(true)
    }else{ //si no es null, no se puede animar
      setCanAnimate(false)    
    }
    //se seta el prevMenuActive y el menuActive con el label
    setPrevMenuActive(label)
    setMenuActive(label)
  }
  const resetStates = () =>{
    setCanAnimate(true)
    setMenuActive(null)
    setPrevMenuActive(null)
  }

  
    return (
      <li className='nav-element'>
        <a
          onMouseEnter={() => setStates(label)}
          href="#">{label}</a>
        <div
          className={`menu-dropDown-container ${menuDropDownClass()}`}
          onMouseLeave={() => resetStates()}
         >
        </div>
      </li>
    );
  }