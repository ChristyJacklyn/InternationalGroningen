import React from "react";
import forum from '../assets/forum.jpg';
import energy from '../assets/energy.jpg';


function CityandProvince (){

    return(
        <div className="flex flex-col p-4  justify-center items-center space-y-4 " style={{fontFamily:'ariel',fontSize:'20px'}}>
            <div className="flex flex-col shadow-md p-4  lg:w-2/3 space-y-4 justify-center items-start">
            
                <div className='w-full text-center p-6 ' style={{fontSize:'50px',fontWeight:'bolder'}}>City and province</div>
                <div className="w-full text-center p-10 font-oswald" style={{fontSize:'25px',fontWeight:''}}>Groningen. A vibrant city with an ancient cultural landscape around it. A combination that makes Groningen unique. In less than 15 minutes by bike from the city center, you are surrounded by nature. Discover the city and the province.</div>
                <div>Groningen. A vibrant city with an ancient cultural landscape around it. A combination that makes Groningen unique. In less than 15 minutes by bike from the city center, you are surrounded by nature. Discover the city and the province.</div>

                <div style={{fontSize:'40px',fontWeight:'bolder',textAlign:'justify'}}>City</div>

                <div style={{textAlign:'justify'}}>
                        <p style={{ textIndent: '2em' }}> There is much more to discover around the city of Groningen. The surrounding countryside is also full of adventures. It is home to one of the oldest cultural landscapes in Europe and borders a Unesco World Heritage Site. In the vast countryside you can see for miles. Centuries-old church towers rise above the villages and are beacons in the Groningen landscape. In stately homes with their surrounding gardens, you will discover the history of the Groninger nobility. These buildings are the showpieces of the province. Besides iconic buildings, the surrounding countryside also offers plenty of beautiful nature. Head out with binoculars to Lauwersmeer National Park or put on your sturdy footwear and take a walk through the unspoiled nature of Westerwolde. Whether you head east or south of the province, each region has its own character.Added bonus: the air you breathe here is also the cleanest air in The Netherlands! While we enjoy the present, here we are also building tomorrow’s world.</p>
                        <p style={{ textIndent: '2em' }}/> Groningen is a province of pioneers. In doing so, the province is taking a leading role in the energy transition and the growth of both the digital and bio-based sectors.Eemshaven is the second largest seaport in The Netherlands after the port of Rotterdam.
                        <p style={{ textIndent: '2em' }}>The province of Groningen has more than 2,800 national monuments.
                        Groningen is fully committed to energy transition. Partly for this reason, the region was the very first region in Europe to be labeled "Hydrogen Valley’’.
                        Winsum (Municipality of Het Hogeland) was voted the most beautiful village in the Netherlands by members of the ANWB.</p>
                </div>

                <div style={{fontSize:'20px',fontWeight:'bolder'}}>Discover the city of Groningen</div>
            </div>
          <img src={forum} alt="" />


          <div className="flex flex-col shadow-md p-4  lg:w-2/3 space-y-4 justify-center items-start">
            <div>
                    Groningen. A vibrant city with an ancient cultural landscape around it. A combination that makes Groningen unique. In less than 15 minutes by bike from the city center, you are surrounded by nature. Discover the city and the province.</div>

                    <div style={{fontSize:'40px',fontWeight:'bolder'}}>Province</div>
                    <div style={{textAlign:'justify'}}>
                    <p style={{ textIndent: '2em' }}>At the foot of the Martinitoren you will find the city of Groningen. The capital of the province of Groningen and the sixth largest city in the Netherlands. The city is known for its centuries-old university. The University of Groningen has been around for over 400 years, and has grown into one of the largest universities in The Netherlands with more than 50,000 students currently attending.</p>

                    <p style={{ textIndent: '2em' }}> Between the medieval buildings there is always something going on. A city of students and city dwellers, bursting with undiscovered pearls: with new discoveries around every corner. Whether it is a new exhibition at the Groninger Museum or a mural in the Papengang, having dinner at a cozy neighborhood pub or dining at upscale eateries, Groningen has it all . Need to escape the hustle and bustle? You can do so in one of Groningen’s beautiful courtyards. In these majestic courtyards you will forget the stresses of everyday life.</p>

                    <p style={{ textIndent: '2em' }}> Nowhere in the world do people cycle as much as in Groningen. 60% of all traffic in the city is due to bicycles.
                    Groningen is the healthiest city in the Netherlands, according to research by Arcadis. They looked at green spaces, bicycle friendliness and combating heat stress, among other things.</p>
                    <p style={{ textIndent: '2em' }}>The train station has been voted by travelers the most beautiful station in the Netherlands.
                    In the city of Groningen, you breathe the cleanest air of all Dutch cities, according to a study by the European Environment Agency (EEA).</p>
                    </div>

                    <div style={{fontSize:'20px',fontWeight:'bolder'}}>Discover the Province of Groningen</div>
            </div>
            <img src={energy} alt="" className="h-[65vh] w-2/3"/>
        </div>
        
    );
} 

export default CityandProvince;