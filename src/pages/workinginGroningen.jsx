import React from "react";
import PageLayout from "../Components/PageLayout";
import workingphoto from '../assets/working.jpg';
import PageCardComponent from "../Components/pageCardComponent";
import tech from '../assets/tech.jpg';
import energy from '../assets/energy.jpg';
import finance from '../assets/finance.jpg';
import NavigationOnClick from "../Components/navigationClick";
import { Link } from "react-router-dom";


function WorkingInGroningen (){

    const workingpagedata = [
        {
          image:workingphoto,
          imagetitle:`Working in Groningen`,
          desc: 'Groningen has a divers group range of sectors and internationalized job opportunities.',
    
      }
    ]

    const techdata =[{
        image: tech,
        title: 'IT and tech',
        desc:'The city’s tech hub also offers industry events, co-working spaces, and a supportive community of both experts and learners. This local network inspires collaboration and is a prime example of the passion that exists for these fields.'
    }]
    const financedata =[{
        image: finance,
        title: 'Finance',
        desc:'One of the most thriving industries in Groningen is the finance sector. The region is an international hub for innovation and offers many places to work: from traditional finance companies to sustainable investors, patent law organisations, or startups in financial technology. Find out more about the many careers available in finance in the Groningen.',
    }]

    const energyedata =[{
        image: energy,
        title: 'Energy',
        desc:'Groningen region has an established track record in the energy sector. Due to its close proximity to the Port of Rotterdam and its petrochemical industry, the city is especially recognised within the oil and gas industries. However, the region is also known to be at the forefront of ‘new energy’ development. Here, solar energy, wind power, and new technologies are being used to create sustainable solutions for the future.',
    }]

    return(
        <div className="flex-flex-col">
            <div>
            {workingpagedata.map((page,index) =>(
                <PageLayout 
                key={index}
                image={page.image}
                imageTitle={page.imagetitle}
                desc={page.desc}
                />
            )
            )}</div>

            <div className="flex justify-center items-center p-4">
                <div className=" flex flex-col  justify-center items-center w-2/3">
                            <div className="p-3 text-center" style={{fontSize:'40px',fontStyle:'italic',fontWeight:'bold' }}>
                                Working towards a better world
                            </div>
                        <div className="p-3 text-center" style={{fontSize:'25px'}}>Groningen has traditionally been a place of innovative tacklers, bursting with talent. It has the fastest growing campus in The Netherlands and renowned knowledge and research institutes with the latest understanding on 21st-century issues. Groningen is working on tomorrow’s world in the fields of energy, health, food and digitalization. Groningen is the place to grow and work on your future.</div>
                </div>
                </div>
                    <div className="flex lg:flex-row sm:flex-col p-2">
                        <div className="flex-1">
                       <Link to='it&techpage'>
                        {techdata.map((tech,index) =>(
                            <PageCardComponent 
                            key={index}
                            image={tech.image}
                            title={tech.title}
                            desc={tech.desc}/>
                        ))}
                        </Link>
                        </div>
                        <div className="flex-1 pagecarddiv">
                        <Link to='financepage'>
                        {financedata.map((finance,index) =>(
                            <PageCardComponent 
                            key={index}
                            image={finance.image}
                            title={finance.title}
                            desc={finance.desc}/>
                        ))}</Link></div>
                        <div className="flex-1 pagecarddiv">
                        <Link to='energypage'>
                        {energyedata.map((energy,index) =>(
                            <PageCardComponent 
                            key={index}
                            image={energy.image}
                            title={energy.title}
                            desc={energy.desc}/>
                        ))}
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default WorkingInGroningen;