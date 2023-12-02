import NavBarHeader from './components/NavBar/NavbarHeader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faShoppingBag, faBars, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons'
library.add(faMagnifyingGlass, faShoppingBag,faApple,faBars,faAngleRight, faAngleLeft);

function App() { 
  return (
    <NavBarHeader></NavBarHeader>
  )
}

export default App
