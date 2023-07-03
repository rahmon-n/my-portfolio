const ExperienceCard = ({ title, items }) => {
  return (
    <div className='experience_card'>
      <h4>{title}</h4>

      <div className='experience_card_body'>
        {items.map(({ name, exp, icon }) => (
          <div className='experience_card_item' key={name}>
            <span>{icon}</span>
            <div>
              <h5>{name}</h5>
              <p>{exp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
