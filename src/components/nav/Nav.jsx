import { useState } from 'react';
import './nav.css';

import { NAV_ELEMENTS } from '../../utils/consts';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('#');

  return (
    <nav className='floating-nav'>
      <ul>
        {NAV_ELEMENTS.map(({ icon, navLink, title }) => (
          <li key={navLink}>
            <a
              href={navLink}
              title={title}
              className={`floating-nav__link${activeLink === navLink ? ' active' : ''}`}
              onClick={() => setActiveLink(navLink)}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
