import Button from '../button/Button';

const PortfolioCard = ({ imageUrl, title, descr, ghLink, liveLink }) => {
  return (
    <div className='work_card'>
      <div className='work_card_image'>
        <img src={imageUrl} alt='project-1' />
      </div>
      <div className='work_card_body'>
        <h6 className='work_card_title'>{title}</h6>
        <p className='work_card_descr'>{descr}</p>
        <div className='button_container'>
          <Button href={ghLink} target='_blank' tagName='a' className='outline'>
            Github
          </Button>
          <Button tagName='a' target='_blank' href={liveLink}>
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
