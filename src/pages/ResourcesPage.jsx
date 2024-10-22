import React from "react";
import PageLayout from "../Components/PageLayout";
import { Form, Link } from "react-router-dom";
import International from '../assets/International.jpg'
import ResourcesCard from "../Components/resourcescard";
import podcastimage from '../assets/podcast.jpg'

function Resources() {


const resourcescard = [
    {
        title:podcastimage,
        rescarddescription:'Podcast',
        rescardimage: podcastimage,
    }
]

    return(
        <div className="relative">
                <div className="min-h-screen flex flex-col">
                <Link to='/resources'></Link>
                </div>
            <div className="flex flex-col justify-center item-center bg-blue-200 lg:flex-row">
                    <div className=" flex-1 card m-">{resourcescard.map((card,index)=>(
                        <ResourcesCard key={index}
                        title={card.title}
                        description={card.rescarddescription}
                        imageUrl={card.rescardimage}/>
                    ))}</div>
                    <div className="flex-1 card">{resourcescard.map((card,index)=>(
                        <ResourcesCard key={index}
                        title={card.title}
                        description={card.rescarddescription}
                        imageUrl={card.rescardimage}/>
                    ))}</div>
                    <div className=" flex-1 card">
                    {resourcescard.map((card,index)=>(
                        <ResourcesCard key={index}
                        title={card.title}
                        description={card.rescarddescription}
                        imageUrl={card.rescardimage}/>
                    ))}</div>
            </div>
    </div>
    );
}

export default Resources;