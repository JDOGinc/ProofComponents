// import Login from './components/Login';
import NavBarHeader from './components/NavbarHeader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { MenuProvider } from './context/MenuContext';
library.add(faMagnifyingGlass, faShoppingBag, faApple);

function App() {
  return (
    <MenuProvider>
      <NavBarHeader />
    </MenuProvider>
  )
}

export default App
