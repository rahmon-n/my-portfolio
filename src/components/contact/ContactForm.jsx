import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import Button from '../button/Button';

const ContactForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const envVar = process.env;

  const sendEmail = () => {
    emailjs
      .sendForm(
        envVar.REACT_APP_SERVICE_ID,
        envVar.REACT_APP_TEMPLATE_ID,
        form.current,
        envVar.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className='contact__form' ref={form} onSubmit={handleSubmit(sendEmail)}>
      <input
        placeholder='Your full name'
        {...register('userName', {
          required: '*Full name is required'
        })}
        aria-invalid={errors.userName ? 'true' : 'false'}
      />
      {errors.userName && <p role='alert'>{errors.userName?.message}</p>}

      <input
        placeholder='Your email'
        {...register('userEmail', {
          required: '*Email address is required',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: '*Invalid email address'
          }
        })}
        aria-invalid={errors.userEmail ? 'true' : 'false'}
      />
      {errors.userEmail && <p role='alert'>{errors.userEmail?.message}</p>}

      <textarea
        rows='6'
        placeholder='Your message'
        {...register('message', { required: '*Please write a message to send' })}
        aria-invalid={errors.message ? 'true' : 'false'}
      />
      {errors.message && <p role='alert'>{errors.message?.message}</p>}

      <Button
        style={{ marginTop: 20 }}
        disabled={errors.message || errors.userEmail || errors.userName}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
