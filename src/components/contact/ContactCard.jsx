const ContactCard = (props) => {
  const { option, link, data, icon } = props;
  return (
    <div className='contact__card'>
      <span>{icon}</span>
      <h5 className='contact__option'>{option}</h5>
      <p className='contact__data'>{data}</p>
      <a href={link} target={props?.target}>
        Send a message
      </a>
    </div>
  );
};

export default ContactCard;
