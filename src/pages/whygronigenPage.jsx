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
import Gridpara from '../Components/gridpara';
import citygroningen from '../assets/martinitoren.jpg';
import ourplateform from '../assets/communitymain.jpg';

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

const bimage = citygroningen;
const btitle='City and Province';
const bdesc= 'Amidst vast green fields lies the economic heart of the Northern Netherlands, the city of Groningen. The city has transformed itself into a hotbed of modern technology and research.';
const image2 = ourplateform;
const title2 = 'Our plateforms';
const desc2 =`Groningen, the region that offers entrepreneurs fertile ground to grow and innovate. Whether you want to launch a startup, expand your business or are simply looking for business opportunities, Groningen has everything to support you.`;

  return (
    <div className="flex flex-col">
      <div>
      {/*<Link to='/whygroningen'/>*/}
      {pagedata.map((page,index) =>
        <PageLayout 
        key={index}
        image={page.image}
        imageTitle={page.imagetitle}
        desc={page.desc}
        />
      )}  
      </div>
      <div className='flex justify-center items-center m-5'>
          <div className='animationarrow'></div>
      </div>
      <div className=" justify-center items-center mx-auto lg:w-2/3 border rounded-lg shadow-md p-9 m-5 font-trirong text-xl" style={{fontSize:'20px'}}>
                <div className="introdiv text-center" style={{lineHeight:'2.0'}}>Under the fog of the Martinitoren lies a vibrant city full of energy.Groningen has everything.  With its cozy city center, beautiful nature and great cultural offerings, there is more than enough to experience. Around it lies a province full of hidden gems and adventures. In Groningen, life is good. Discover here everything you want to know about Groningen.</div>
          </div>
      <div>
        <Link to='citynprovince'> <Gridpara image={bimage}  title={btitle} desc={bdesc} image2={image2} title2={title2} desc2={desc2}/></Link>
      </div>
      <div className='flex lg:flex-row flex-col w-full p-4 items-center justify-center'>
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
