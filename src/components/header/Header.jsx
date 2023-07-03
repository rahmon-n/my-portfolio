import Button from '../button/Button';
import CV from '../../assets/CV-en.pdf';
import Avatar from '../../assets/avatar.png';

import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <h5>Hello, I'm</h5>
        <h1>Rahmon Najimov</h1>
        <h5>Frontend Developer</h5>
        {/* CTA BLOCK */}
        <div className='cta'>
          <Button href={CV} download className='outline' tagName={'a'}>
            Download CV
          </Button>
          <Button href='#contact' tagName={'a'}>
            Let's Talk
          </Button>
        </div>
        {/* Header Image */}
        <img className='avatar' src={Avatar} alt='human avatar' />
      </div>
    </header>
  );
};

export default Header;
