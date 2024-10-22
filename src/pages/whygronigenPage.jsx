// src/pages/Home.js
import React from 'react';
import workgroningen from '../assets/whygroningen.jpg';
import { Link } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';
import ActivityCard from '../Components/activity';
import SmallPageCard from '../Components/smallpageCard';
import workphoto from '../assets/Group.jpg';
import liveingroningenphoto from '../assets/liveingroningen.jpg'
import studyingroningenphoto from '../assets/studyingroningen.jpg'
import NavigationOnClick from '../Components/navigationClick';


function WhyGroningen () {

  const pagedata = [
    {
      image:workgroningen,
      imagetitle:`Why Groningen Region.`,
      desc: 'Groningen has a divers group range of sectors and internationalized job opportunities.',

  }
]

const workingingroningen =[{
  image:workphoto,
  desc:'Working in gronigen.',
}]

const liveingroningen =[{
  image:liveingroningenphoto,
  desc:'living in gronigen',
}]

const studyingroningen =[{
  image:studyingroningenphoto,
  desc:'Study in gronigen',
}]

  return (
    <div className="flex flex-col">
      <div>
      <Link to='/whygroningen'/>
      {pagedata.map((page,index) =>
        <PageLayout 
        key={index}
        image={page.image}
        imageTitle={page.imagetitle}
        desc={page.desc}
        />
      )}  
      </div>
      <div className='flex lg:flex-row flex-col w-full bg-blue-200 p-4 items-center justify-center'>
      <Link to='/workingingroningen' className='block w-auto flex items-center'>
          {workingingroningen.map((small,index)=>(
                  <SmallPageCard
                  key={index}
                  image={small.image}
                  desc={small.desc}/>
                    )) }
            </Link>
  
            <Link to='/livingingroningen' className='block w-auto flex items-center'>
          {liveingroningen.map((small,index)=>(
                        <SmallPageCard
                        key={index}
                        image={small.image}
                        desc={small.desc} />
                    ))}
                  </Link>
                  <Link to='/studyingroningen' className='block w-auto flex items-center' >                
        {studyingroningen.map((small,index)=>(
                        <SmallPageCard
                        key={index}
                        image={small.image}
                        desc={small.desc} />
                    ))}
                    </Link>
      </div>
      <div className='m-10'>
        <div className='text-xl font-black-500'>You can expore more about it ...</div>
        <ActivityCard/>
      </div>
  </div>
);
};

export default WhyGroningen;
