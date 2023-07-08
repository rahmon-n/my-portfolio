import PortfolioCard from './PortfolioCard';
import { PROJECTS_DATA } from '../../utils/consts';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {PROJECTS_DATA.map((data) => (
          <PortfolioCard {...data} key={data.ghLink} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
