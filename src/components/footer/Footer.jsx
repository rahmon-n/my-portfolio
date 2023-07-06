import { BiLogoInstagram, BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

import './footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <h2 className='footer__title'>DevfNRa</h2>
      <nav className='footer__links'>
        <ul>
          <li>
            {/* eslint-disable-next-line */}
            <a href='#' className='footer__link'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#experience' className='footer__link'>
              Experience
            </a>
          </li>
          <li>
            <a href='#portfolio' className='footer__link'>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#contact' className='footer__link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='footer__socials'>
        <a
          href='https://www.instagram.com/rahmon__n/'
          target='_blank'
          rel='noreferrer'
          className='footer__social'
        >
          <BiLogoInstagram />
        </a>
        <a
          href='https://www.facebook.com/raxa.najimov'
          target='_blank'
          rel='noreferrer'
          className='footer__social'
        >
          <BiLogoFacebook />
        </a>
        <a
          href='https://www.linkedin.com/in/rahmon-najimov/'
          target='_blank'
          rel='noreferrer'
          className='footer__social'
        >
          <BiLogoLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
