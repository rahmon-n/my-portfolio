import Button from '../button/Button';
import AligarhShop from '../../assets/project-1.jpg';

const PortfolioCard = ({ name, imageUrl, descr, ghLink, prLink }) => {
  return (
    <div className='work_card'>
      <img src={AligarhShop} alt='project-1' className='work_card_image' />
      <div className='work_card_body'>
        <h6 className='work_card_title'>Aligarh Online shop</h6>
        <p className='work_card_descr'>Online shop with Auth & Payment method</p>
        <div className='button_container'>
          <Button
            href='https://github.com/rahmon-n/aligarh-shop'
            target='_blank'
            tagName='a'
            className='outline'
          >
            Github
          </Button>
          <Button tagName='a' target='_blank' href='https://aligarh-shop.netlify.app/'>
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
