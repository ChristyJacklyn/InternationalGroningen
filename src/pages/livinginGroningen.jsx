import React,{useEffect,useState} from "react";
import image1 from '../assets/martinitoren.jpg';
import image2 from '../assets/whygroningen.jpg'
import image3 from '../assets/bike.jpg';
import image4 from '../assets/street.jpg';
import image5 from '../assets/livingingriningen2.jpg';
import GridComponent from "../Components/gridComponent";
import groningenImage from '../assets/canalgroningen.jpg';


function LivingInGroningen () {
    const image = groningenImage;
    const title= "Living in the Groningen Region";
    const desc= "The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe.The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe."


    const items = [
        { id: 1, title: "Living In Groningen",link:'/' },
        { id: 2, title: "Study ",link:'/' },
        {id:3, title:'Employer', link:'/'},
        
      ];

    return(
      <div className="flex flex-col items-center p-3 m-3">
        <GridComponent image={image} title={title} desc={desc} items={items}/>
       </div>
    );
}

export default LivingInGroningen;