import React from "react";
import GridComponent from "../Components/gridComponent";
import finance from '../assets/finance.jpg';

const items = [
    { id: 1, title: "IT & Tech",link:'/workingingroningen/it&techpage' },
    { id: 2, title: "Finance",link:'/workingingroningen/financepage' },
    {id:3, title:'Energy', link:'/workingingroningen/energypage'},
    { id: 4, title: "Security",link:'/' },
    { id: 5, title: "Peace and justice",link:'/' },
  ];

function Finance () {
    const image = finance;
    const title= "Finance";
    const desc= "The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe.The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe."
   
    return(
        <div>
            <GridComponent image={image} title={title} desc={desc} items={items}/>
        </div>
    );
}

export default Finance;
