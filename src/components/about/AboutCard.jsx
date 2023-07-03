const AboutCard = ({ name, icon, descr }) => {
  return (
    <div className='about_element'>
      <span className='about_element_icon'>{icon}</span>
      <h5 className='about_element_name'>{name}</h5>
      <p className='about_element_descr'>{descr}</p>
    </div>
  );
};

export default AboutCard;
