import { EXPERIENCE_ELEMENTS } from '../../utils/consts';
import ExperienceCard from './ExperienceCard';
import './experience.css';

const Experience = () => {
  return (
    <section className='experience' id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        {EXPERIENCE_ELEMENTS.map((elem) => {
          const { title, items } = elem;
          return <ExperienceCard key={title} title={title} items={items} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
