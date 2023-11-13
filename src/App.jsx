import NavBarHeader from './components/NavBar/NavbarHeader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons'
library.add(faMagnifyingGlass, faShoppingBag,faApple);

function App() { 
  return (
    <NavBarHeader></NavBarHeader>
  )
}

export default App
