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
       <div className="gridcontainer">
            <div className="image image1"><img src={image1} className=""></img><p className="p-3">Finding a place to live in The Hague doesn’t have to be a challenge. From cities to local districts and neighbourhoods, find your ideal home in the region.
                        Cycling Keizerstraat
                        Districts in The Hague region
                        From sandy beaches and shopping hotspots to grand government buildings and world-famous landmarks, there’s lots to explore in The Hague metropolitan area.
                        Cycling The Hague
                        Getting around</p></div>
            <div className="image image2"><img src={image2}></img><p>From sandy beaches and shopping hotspots to grand government buildings and world-famous landmarks, there’s lots to explore in The Hague metropolitan area.Cycling The Hague</p></div>
            <div className="image image3"><img src={image3} className="r"></img></div>
            <div className="image image4"><img src={image4}></img></div>
            <div className="image image5"><img src={image5} className=""></img></div>
       </div>
       </div>
    );
}

export default LivingInGroningen;