
import React from 'react';
import amazonimg from '../../public/images/skills/amazon.png';
import elev from '../../public/images/skills/12A98EF4-FD75-45DE-A69C-AB76AD0BFD78_1_201_a.jpeg';
import flut from '../../public/images/skills/082ce6e7-8f38-4999-aba2-43b002620017-cover.png';
import acc from '../../public/images/skills/car-crash-accident-side-impact-illustration-concept-in-cartoon-vector.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#7e20d5]'>
          Projects
        </p>
        <h2 className='py-4 text-[#fff]'>My Works</h2>
        <div className='grid md:grid-cols-2 gap-10'>
          <ProjectItem
            title='Amazon Clone'
            backgroundImg={amazonimg}
            projectUrl='/amazon'
            tech='Html css Js'
          />
          <ProjectItem
            title='Flutter Weather App'
            backgroundImg={flut}
            projectUrl='https://github.com/Nanthan-s-Nair/Weather-app-flutter'
            tech='Flutter Dart'
          />
          <ProjectItem
            title='Smart Electronic Voting Machine'
            backgroundImg={elev}
            projectUrl='https://github.com/Nanthan-s-Nair/smart-electronic-voting-machine'
            tech='Arduino'
          />
          <ProjectItem
            title='Accident Severity Prediction Neural Network'
            backgroundImg={acc}
            projectUrl='https://github.com/Nanthan-s-Nair/accidentseverity'
            tech='keras'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
