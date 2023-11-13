// eslint-disable-next-line react/prop-types, no-unused-vars
export function NavElement({ label, onMouseEnter }) {

  return (
    <li className='nav-element' onMouseEnter={() => onMouseEnter(label)}>
      <a href="#">{label}</a>
    </li>
  );
}