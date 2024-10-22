import React,{useEffect,useState} from "react";
import image1 from '../assets/martinitoren.jpg';
import image2 from '../assets/whygroningen.jpg'
import image3 from '../assets/bike.jpg';
import image4 from '../assets/street.jpg';
import image5 from '../assets/livingingriningen2.jpg';
import GridComponent from "../Components/gridComponent";
import groningenImage from '../assets/canalgroningen.jpg';


function StudyInGroningen () {
    const image = groningenImage;
    const title= "Planning to Study in Groningen? ";
    const desc= "Explore the opportunies in deferent sector to enhance the career.. Naturally, this provides a stimulating environment to study, and the city’s higher education institutions are highly renowned. From The Hague University of Applied Sciences through Leiden University’s faculty of governance and global issues to the University of the Arts The Hague (which includes one of Europe’s oldest art academies as well as a royal music conservatory), there's plenty of choice. ";


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

export default StudyInGroningen;