import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";
import groningenimage from '../assets/groningen.jpg'
import ResourcesCard from "../Components/resourcescard";
import groupphoto from '../assets/Group.jpg';
import SecondresourcesCard from "../Components/secondresourcecard";
import ActivityCard from "../Components/activity";
import smallwhygroningen from '../assets/whygroningen.jpg';
import SmallPageCard from "../Components/smallpageCard";
import WhyGroningen from "./whygronigenPage";

function MainPage(){
    const pagedata =[
        {
            image:groningenimage,
            imagetitle:`Welocme to Gronigen Region.`,
            desc: 'Are you new in the Netherlands? We guide International newcomers to live, work and study in Groningen region.',
        }
    ]

    const carddata = [{
        title:'All you want to know As An International...',
        image: groupphoto,
        description: <div><ul>
            <li>Resources</li>
            <li>Our gethering</li>
            <li>whats happening in the city </li>
            </ul>
            </div>
    }]
const secordcarddata =[{
    title2:'Where we meet!!',
    image2:groningenimage,
    description2:<div><ul>
    <li>Resources</li>
    <li>Our gethering</li>
    <li>whats happening in the city </li>
    </ul>
    </div>
}]

const smallpagecardData =[{
    image:smallwhygroningen,
    desc:'Why Groningen for work',
}]



    return(
        <div className="flex flex-col">
            <Link to='/'> </Link>
            {pagedata.map((page,index) =>(
                <PageLayout 
                key={index}
                image={page.image}
                imageTitle={page.imagetitle}
                desc={page.desc}
                />
            )
            )}

            <div className="flex flex-col lg:flex-row justify-center items-center p-5">
                {carddata.map((card,index)=>(
                    <ResourcesCard
                    key={index}
                    title={card.title}
                    imageUrl={card.image}
                    description={card.description}
                    />
                ))}
                
            </div>

            <div className="flex flex-col"> 
                {secordcarddata.map((second,index)=>(
                    <SecondresourcesCard 
                    key={index}
                    title={second.title2}
                    imageUrl={second.image2}
                    description={second.description2} />
                ))}
            </div>

            <div>
                <ActivityCard/>
            </div>
            <div className="flex lg:flex-row flex-col">
                {smallpagecardData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}
                 {smallpagecardData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}
                {smallpagecardData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}
                {smallpagecardData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}
            </div>

        </div>

    );
}

export default MainPage;