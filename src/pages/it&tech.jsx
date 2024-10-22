import React from "react";
import tech from '../assets/tech.jpg';
import GridComponent from "../Components/gridComponent";

const items = [
    { id: 1, title: "IT & Tech",link:'/it&techpage' },
    { id: 2, title: "Finance",link:'/financepage' },
    {id:3, title:'Energy', link:'/energypage'},
    { id: 4, title: "Security",link:'/' },
    { id: 5, title: "Peace and justice",link:'/' },
  ];

function Itandtech () {
    const image = tech;
    const title= "IT and Tech";
    const desc= "The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe.The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe."
   
    return(
        <div>
            <GridComponent image={image} title={title} desc={desc} items={items}/>
        </div>
    );
}

export default Itandtech;

{/*<div className="grid grid-cols-2 gap-4 p-5 m-1 border">
            {/* first row image span across two cols 
            <div className="col-span-2 row-span-1">
            <img src={techPhoto} alt="it&tech" className="h-[50vh] w-full col-span-2 object-cover"></img>
        </div>
    {/* second row:first column with content 
    <div className="grid lg:grid-cols-[400px,auto] w-full col-span-2 mt-7">
        
    {/* second row: second column with list 
            <div className="uldiv flex flex-col  justify-start items-center text-blue-700 col-span-1 p-4 lg:p-10 row-span-1" >
                <div className="text-blue-800 hover:underline text-xl" > Working in Groningen</div>
                    <ul className="text-xl">
                    <li className="hover:underline ">IT & Tech</li>
                        <li className="hover:underline ">Finance</li>
                        <li className="hover:underline ">Security</li>
                        <li className="hover:underline ">Peace and justice</li>
                        
                    </ul>
            </div>
        <div className="grid place-items-center lg:mr-auto lg:p-10 lg:w-2/3">
                <div className="text-xl p-3" style={{fontSize:'40px', fontFamily:'monospace', fontWeight:'bold'}}>IT and Tech</div>
                <div className="para p-10 " style={{fontSize:'20px'}}>
                    <p>The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe.
                    The Hague region’s advanced IT infrastructure, network of international tech companies, and pool of talented professionals strengthen the Netherlands’ reputation as a digital gateway to Europe. IT and technological innovations from the city include developments in artificial intelligence (AI), drones, robots, and blockchain. And they are globally influential. In fact, in recent years, The Hague has been listed as one of the top five fastest-growing tech hubs in Europe. </p>
                </div>
         </div>
    </div>
 

</div> */} 