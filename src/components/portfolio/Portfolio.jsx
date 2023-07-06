import PortfolioCard from './PortfolioCard';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
