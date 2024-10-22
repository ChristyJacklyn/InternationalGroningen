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
        desc:'The city’s tech hub also offers industry events, co-working spaces, and a supportive community of both experts and learners. This local network inspires collaboration and is a prime example of the passion that exists for these fields.'
    }]

    const energyedata =[{
        image: energy,
        title: 'Energy',
        desc:'The city’s tech hub also offers industry events, co-working spaces, and a supportive community of both experts and learners. This local network inspires collaboration and is a prime example of the passion that exists for these fields.'
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

            <div className="flex lg:flex-col p-10 lg:w-1/2 sm:flex-col">
                    <div className="p-3" style={{fontSize:'30px',fontStyle:'italic',fontWeight:'semi-bold' }}>
                        Working towards a better world
                    </div>
                    <div className="p-3" style={{fontSize:'20px'}}>The Hague is known as the ‘City of Peace and Justice’, and it has been at the forefront of the human-rights-based system for over 100 years. But in recent years, other hugely successful sectors have arisen, including finance, energy, IT, and the security industries. In addition to the exceptional work/life balance and beautiful surroundings, The Hague’s job market is very internationalised, interconnected, and a great place to build your career.</div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-2/3 bg-blue-200 p-4 items-start justify-start m-10">
                       <Link to='/it&techpage'>
                        {techdata.map((tech,index) =>(
                            <PageCardComponent 
                            key={index}
                            image={tech.image}
                            title={tech.title}
                            desc={tech.desc}/>
                        ))}
                        </Link>
                        <Link to='/financepage'>
                        {financedata.map((finance,index) =>(
                            <PageCardComponent 
                            key={index}
                            image={finance.image}
                            title={finance.title}
                            desc={finance.desc}/>
                        ))}</Link>
                        <Link to='/energypage'>
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
    );
}

export default WorkingInGroningen;