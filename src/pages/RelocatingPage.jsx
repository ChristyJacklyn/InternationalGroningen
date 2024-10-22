// src/pages/Home.js
import React from 'react';
import liveingroningen from '../assets/livinggroningen.jpg'
import { Link } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';
import ActivityCard from '../Components/activity';


function Relocating() {

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
      <div>
        <ActivityCard/>
      </div>
    
  </div>
);
};

export default Relocating;
