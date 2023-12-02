export function NavIcon ({url='#', children, icon}){
    return (
        <li className={`nav-element ${icon}`}>
          <a className = 'nav-link' href={url}>
            {children}
          </a>
        </li>
    );
}