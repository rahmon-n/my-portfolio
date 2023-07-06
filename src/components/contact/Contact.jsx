import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import { CONTACT_ELEMENTS } from '../../utils/consts';

import './contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div>
          {CONTACT_ELEMENTS.map((option) => (
            <ContactCard {...option} key={option.option} />
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
