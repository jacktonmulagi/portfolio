import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Mulagi | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel="icon" href="/mulagiLogo.png" />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Mulagi Jackton</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jackton-mulagi-a622b2176/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jacktonmulagi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> Python (flask) <span className='px-2'>|</span>
            UI/UX <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> java (spring boot)
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Front End Developer
            </span>
            <span className='px-2'>|</span>Nairobi,Kenya
          </p>
          <p className='py-1 italic'>Africom media limited (Aug 2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Followed SDLC best practices within Agile environment to produce rapid iterations for clients.
            </li>
            <li>
              Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.
            </li>
            <li>
              Improved tools to boost user interaction and deliver design versatility.
            </li>
            <li>
              Designing UI/UX
            </li>
            <li>
              Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.
            </li>
            <li>
              Researched emerging web technologies and trends for possible incorporation into sites.
            </li>
            <li>
              Tested web-based product functionality and delivered iterations to customer.
            </li>
            <li>
              Produced websites compatible with multiple browsers.
            </li>
            <li>
              Use regulatory and compliance standards for user interface designs.
            </li>
            <li>
              Worked cooperatively with client services, sales and design team in deadline-driven environment.
            </li>
            <li>
              Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Technical Assistant</span>
            <span className='px-2'>|</span>Nairobi,Kenya 
          </p>
          <p className='py-1 italic'>Epitech solutions  (Jan 2020 - May 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Installed technical hardware and software in deskside support environment.
            </li>
            <li>
              Gathered, organized and distributed technical documentation.
            </li>
            <li>
              Liaised with customers, communicating and resolving problems and concerns.
            </li>
            <li>
              Recorded information surrounding system failure to assist future rebuilds.
            </li>
            <li>
              Troubleshot malfunctioning hardware and software deployments to support nonstop operations.
            </li>
            <li>
              Provided technical guidance and support to team members.
            </li>
            <li>
              Researched common technology performance issues to assist with diagnoses.
            </li>
  
          </ul>
        </div>
        {/* Experience */}
       
      </div>
    </>
  );
};

export default resume;
