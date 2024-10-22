import React from "react";
import energy from '../assets/energy.jpg';
import { Link } from "react-router-dom";
import GridComponent from "../Components/gridComponent";

const items = [
    { id: 1, title: "IT & Tech",link:'/it&techpage' },
    { id: 2, title: "Finance",link:'/financepage' },
    {id:3, title:'Energy', link:'/energypage'},
    { id: 4, title: "Security",link:'/' },
    { id: 5, title: "Peace and justice",link:'/' },
  ];

function Energy () {
    const image = energy;
    const title= "Energy";
    const desc= "The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe.The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe."
   
    return(
        <div>
            <GridComponent image={image} title={title} desc={desc} items={items}/>
        </div>
    );
}

export default Energy;