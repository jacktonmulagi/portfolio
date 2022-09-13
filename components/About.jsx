import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/jackton.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
    
          <p className='py-2 text-gray-600'>
            Detail-oriented, organized and meticulous employee.Works at fast pace to meet tight deadlines.Enthusiastic team player ready to contribute to company success.Amenable Software Engineer gifted at translating basic client requirements into technical development plans.Communicates productively with both technical and non-technical personnel and clients.Friendly provider of deep programming knowledge and invaluable final products.Forward-thinking Software Engineer with background working productively in dynamic environments.Fluent in Javascript,python and java programming languages used to develop software.Proud team player focused on achieving project objectives with speed and accuracy.Versatile Software Engineer talented at contributing to team-developed projects.Collaborative designer of useful solutions and perfectly customized products.Knowledgeable in programming and gifted at creating unique art.Customer-focused software professional with superior communication skills and expertise in various technical platforms.Understands and meets both client and employer needs and develops highly functional, robust and easy-to-use applications.Excels as hands-on developer and oversees work of software teams.Complex problem-solver with analytical and driven mindset.Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.Organized and dependable candidate successful at managing multiple priorities with a positive attitude.Willingness to take on added responsibilities to meet team goals.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
