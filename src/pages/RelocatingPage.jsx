// src/pages/Home.js
import React from 'react';
import liveingroningen from '../assets/livinggroningen.jpg'
import { Link } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';
import ActivityCard from '../Components/activity';
import Gridpara from '../Components/gridpara';
import martinitoren from '../assets/martinitoren.jpg';
import street from '../assets/street.jpg';



function Relocating() {

  const bimage = martinitoren;
  const btitle='Before You move...';
  const bdesc= `If you're moving to Groningen soon, it is best to be well-prepared before you leave. Where can you find a good place to live? What do you need to know before heading over? We're here to help you transition as comfortably as possible.`;
  const image2 = street;
  const title2 = 'When You arrive...';
  const desc2 =`When you arrive in Groningen, there are a couple of things that you should arrange in your first week here. On this page, you can find an overview of important practical matters to take care of.`;

  const pagedata = [
    {
      image:liveingroningen,
      imagetitle:`Living in the Groningen Region`,
      desc: 'Lush greenery, get away with the bike ride anywhere,Gronigen is an amazing palce to live',

  }
]



  return (
    <div className="flex flex-col">
      <div>
      <Link to='/relocating'/>
      {pagedata.map((page,index) =>
        <PageLayout 
        key={index}
        image={page.image}
        imageTitle={page.imagetitle}
        desc={page.desc}
        />

      )}</div>
      <div className='flex justify-center items-center'>
          <div className=" bg-white  mx-auto lg:w-2/3 border rounded-lg shadow-md p-9 m-5 font-trirong text-xl" style={{fontSize:'20px'}}>
                <div className="introdiv text-center" style={{lineHeight:'2.0'}}>Are you moving to Groningen? How lovely! Life in Groningen is great, but before you can start enjoying it, there are a few things to take care of. Where's the best place to find a house? And what documents do you need? Here, you'll find all the information you need before moving to Groningen. We warmly welcome you to the most beautiful city in the Netherlands.</div>
          </div></div>
          <div className="p-10 " style={{fontSize:'40px', fontFamily:'Arial,Sofia',fontWeight:'bold'}}> All you want to know is......</div>

      <div className=''>
        <Link to='beforeyoumove'><Gridpara image={bimage} title={btitle} desc={bdesc} image2={image2} title2={title2} desc2={desc2}/> </Link>
      </div>
      <div className='flex bg-blue-100 justify-center items-center'>
        <ActivityCard/>
      </div>
    
  </div>
);
};

export default Relocating;
