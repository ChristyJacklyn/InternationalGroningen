import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";
import groningenimage from '../assets/groningen.jpg';
import groupphoto from '../assets/Group.jpg';
import React from "react";
import ActivityCard from "../Components/activity";
import smallwhygroningen from '../assets/whygroningen.jpg';
import SmallPageCard from "../Components/smallpageCard";
import relocatingimage from '../assets/livinggroningen.jpg';
import workingimage from '../assets/working.jpg';
import studyimage from '../assets/studyingroningen.jpg';
import group from '../assets/communitymain.jpg';
import house1 from '../assets/housing1.jpg';
import house2 from '../assets/housing2.jpg';
import house3 from '../assets/housing3.jpg';
import studentgroup from '../assets/group1.jpg';
import holidayhouse from '../assets/holidayhouse.jpg';
import pondhouse from '../assets/pondhouse.jpg';
import FindRightInfo from "../Components/findrightInfo";


function MainPage(){
    const pagedata =[
        {
            image:groningenimage,
            imagetitle:`Welocme to Groningen Region.`,
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

const whyingroningenData =[{
    image:smallwhygroningen,
    desc:'Why Groningen for work',
}]

const relocatingData =[{
    image:relocatingimage,
    desc:'Relocating',
}]

const workingData =[{
    image:workingimage,
    desc:'Working',
}]
const studingData =[{
    image:studyimage,
    desc:'Studying',
}]

    return(
        <div className="flex flex-col">
            <div>
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
            </div>
            <div className=" justify-center items-center mx-auto lg:w-2/3 border rounded-lg shadow-md p-9 m-5 font-trirong text-xl" style={{fontSize:'20px'}}>
                <div className="introdiv text-center" style={{lineHeight:'2.0'}}>Groningen has everything. Under the smoke of the Martinitoren lies a vibrant city full of energy. With its cozy city center, beautiful nature and great cultural offerings, there is more than enough to experience. Around it lies a province full of hidden gems and adventures. In Groningen, life is good. Discover here everything you want to know about Groningen.</div>
            </div>
            
          
            <div className="p-10 " style={{fontSize:'40px', fontFamily:'Arial,Sofia',fontWeight:'bold'}}> I want information about......</div>

            <div className="flex lg:flex-row md:flex-row flex-col">
                <Link to='/whygroningen'>
                {whyingroningenData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}</Link>
                <Link to='/relocating'>
                 {relocatingData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}</Link>
                <Link to='/workingingroningen'>
                {workingData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}
                </Link>
                <Link to='/studyingroningen'>
                {studingData.map((small,index)=>(
                    <SmallPageCard
                    key={index}
                    image={small.image}
                    desc={small.desc} />
                ))}</Link>
            </div>
            <div className="lg:p-4">
                <FindRightInfo/>
            </div>
                    <div className="flex justify-center items-center ">
                        <div className="  ">
                            <ActivityCard/>
                        </div>
                    </div>
                <div>
               
                <div className="beforeyoumovegrid grid grid-cols-3 grid-rows-3 gap-2 p-4 ">
                        <div className="relative beforemovegrid row-span-2 "><img src={house1} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow absolute w-full bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}> Housing &#8594;</div></div>
                        <div className="relative beforemovegrid"><Link to='/relocating/beforeyoumove'><img src={studentgroup} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}> Student Housing&#8594;</div></Link></div>
                        <div className="relative beforemovegrid "><Link to='/workingingroningen'><img src={group} className="beforyoumoveimage w-full h-full object-cover" /><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>Job Opportunity &#8594;</div></Link></div>
                        <div className="relative beforemovegrid row-span-2"><Link to='whygroningen/citynprovince'><img src={house2} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>City &#8594;</div></Link></div>
                        <div className="relative beforemovegrid "><Link to='/business'><img src={pondhouse} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>Business Possibilities &#8594;</div></Link></div>
                        <div className="relative beforemovegrid "><img src={holidayhouse} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>Contryside &#8594;</div></div>
                        <div className="relative beforemovegrid"><img src={house3} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow absolute w-full bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>Relocating &#8594;</div></div>           

                </div>
                </div>
        </div>

    );
}

export default MainPage;