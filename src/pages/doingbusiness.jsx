import React from "react";
import GridComponent from "../Components/gridComponent";
import business from '../assets/connect.jpg'
import Gridpara from "../Components/gridpara";
import busimage from '../assets/business1.jpg';
import business3 from '../assets/business3.jpg';
import EventsInput from "../Components/event";

function Business() {
const image = business;
const title = 'Doing Business in Groningen';
const desc = `Groningen, a city known for its pioneering power and thriving startup scene, is a magnet for talent from all over the world. In the shadow of historic canal houses and under the watchful eye of the famous Martini Tower, a new generation of young thinkers and doers are coming together to work on revolutionary concepts and sustainable solutions to today's global challenges. Here, collaboration has permeated every fiber of the city.`;

const items = [
    { id: 1, title: "Regional Economy ",link:'/' },
    { id: 2, title: "Business Resources ",link:'/' },
    {id:3, title:'Startup Business', link:'/'},
    
  ];

const bimage = busimage;
const btitle='Reginal Economy';
const bdesc= 'Amidst vast green fields lies the economic heart of the Northern Netherlands, the city of Groningen. The city has transformed itself into a hotbed of modern technology and research.';
const image2 = business3;
const title2 = 'Business Resources';
const desc2 =`Groningen, the rçunities, Groningen has everything to support you.`;

    return(
        <div className="flex flex-col">
            <GridComponent image={image} title={title} desc={desc} items={items}/>
            <div className="">
                <Gridpara image={bimage} title={btitle} desc={bdesc} image2={business3} title2={title2} desc2={desc2}/>
            </div>
            <div className="p-6"><EventsInput/></div>
        </div>
    );
}

export default Business;