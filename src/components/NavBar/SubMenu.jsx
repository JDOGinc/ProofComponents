export function SubMenu(item) {
    return (
        <ul className='subMenu-list'>
            {item.subMenu.map((subItem, subIndex) =>
                <li className='subMenu-element' key={`${subIndex}-${subItem.name}`}>
                    <a href={subItem.url}>{subItem.name}</a>
                </li>
            )}
        </ul>
    );
}