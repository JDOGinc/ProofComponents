/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';


const menuList = [
  {
    name: 'Tienda', url: '#',
    subMenu: [
      { name: 'Comprar lo último', url: '#' },
      { name: 'Mac', url: '#' },
      { name: 'iPad', url: '#' },
      { name: 'iPhone', url: '#' },
      { name: 'Watch', url: '#' },
      { name: 'AirPods', url: '#' },
      { name: 'Tv y Casa', url: '#' },
      { name: 'Entretenimiento', url: '#' },
      { name: 'Accesorios', url: '#' },
      { name: 'Soporte', url: '#' },
    ]
  },
  {
    name: 'Mac', url: '#', subMenu: [
      { name: 'Ver todos los macs', url: '#' },
      { name: 'MacBook Air', url: '#' },
      { name: 'MacBook Pro', url: '#' },
      { name: 'iMac', url: '#' },
      { name: 'iMac Pro', url: '#' },
      { name: 'Mac Pro', url: '#' },
      { name: 'Mac mini', url: '#' },
      { name: 'Accesorios', url: '#' },
      { name: 'Mojave', url: '#' },
      { name: 'Comparar', url: '#' },
    ]
  },
  { name: 'iPad', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'iPhone', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'Watch', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'AirPods', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'Tv y Casa', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'Entretenimiento', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'Accesorios', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
  { name: 'Soporte', url: '#', subMenu: [{ name: 'Prueba', url: '#' }] },
];

const MenuContext = React.createContext();
// eslint-disable-next-line react/prop-types
const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menu, setMenu] = React.useState(menuList);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, menu, setMenu, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenuContext() {
  const context = React.useContext(MenuContext);

  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }

  return context;
}

export {
  MenuProvider,
  useMenuContext,
};