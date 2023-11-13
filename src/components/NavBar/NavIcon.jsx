export function NavIcon ({url='#', children}){
    return (
        <li className='nav-element'>
          <a className = 'nav-link' href={url}>
            {children}
          </a>
        </li>
    );
}