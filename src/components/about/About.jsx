import ME from '../../assets/me.jpg';
import { ABOUT_ELEMENTS } from '../../utils/consts';
import Button from '../button/Button';
import AboutCard from './AboutCard';

import './about.css';

const About = () => {
  return (
    <section className='about' id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about_image-container'>
          <img className='about_image' src={ME} alt='developers portrait' />
        </div>
        <div>
          {/* About Elements */}
          <div className='about_elements'>
            {ABOUT_ELEMENTS.map((item, idx) => (
              <AboutCard {...item} key={item.name + idx} />
            ))}
          </div>
          {/* Profile text */}
          <div className='profile'>
            I am a frontend developer who likes everything related to coding and the web.
            I like to improve myself and constantly learn new things on the Internet
          </div>

          <div className='about_button'>
            <Button href='#contact' tagName={'a'}>
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
