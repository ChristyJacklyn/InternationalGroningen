import React,{useEffect,useState} from "react";

import GridComponent from "../Components/gridComponent";
import groningenImage from '../assets/canalgroningen.jpg';
import Gridpara from "../Components/gridpara";
import rug from '../assets/rug.jpg';
import bike from '../assets/bike.jpg';
import group from '../assets/communitymain.jpg';
import house1 from '../assets/housing1.jpg';
import house2 from '../assets/housing2.jpg';
import house3 from '../assets/housing3.jpg';
import studentgroup from '../assets/group1.jpg';
import holidayhouse from '../assets/holidayhouse.jpg';
import pondhouse from '../assets/pondhouse.jpg';





function StudyInGroningen () {
    const image = groningenImage;
    const title= "Planning to Study in Groningen? ";
    const desc= "Explore the opportunies in deferent sector to enhance the career.. Naturally, this provides a stimulating environment to study, and the city’s higher education institutions are highly renowned. From The Hague University of Applied Sciences through Leiden University’s faculty of governance and global issues to the University of the Arts The Hague (which includes one of Europe’s oldest art academies as well as a royal music conservatory), there's plenty of choice. ";
    const listtitle ='Explore Groningen';


    const items = [
        { id: 1, title: "Living In Groningen",link:'/' },
        { id: 2, title: "Studying in Groningen ",link:'/' },
        {id:3, title:'Employer', link:'/'},
        
      ];


      const bimage = rug;
      const btitle='Educational Institutes';
      const bdesc= `Welcome to the vibrant educational landscape of Groningen, where knowledge and creativity converge across various educational institutions. Whether you're seeking a university education, practical vocational training (MBO), or higher vocational education (HBO), Groningen has it all.`;
      const b2image = bike;
      const title2 = 'Students Life';
      const desc2 =`Groningen is a true university town. Thanks to its numerous educational institutions, the city is home to a large student population - and by 'large', we mean substantial. Groningen, with its many students, is the youngest city of the Netherlands.`;

    return(
      <div className="flex flex-col items-center p-3 m-3">
        <div>
          <GridComponent image={image} title={title} desc={desc} items={items} listtitle={listtitle}/>
        </div>
        <div>
        <Gridpara image={bimage} title={btitle} desc={bdesc} image2={b2image} title2={title2} desc2={desc2}/>
        </div>
        <div className="text-xl font-bold p-5" style={{fontSize:'30px'}}>Explore the photo Gallery...</div>
       {/*<div className="gridcontainer">
            <div className="image image1"><img src={image5} className="gridimage w-full h-full object-cover"></img></div>
            <div className="image image2"><img src={image2} className="gridimage w-full h-full object-cover"></img></div>
            <div className="image image3"><img src={image3} className="gridimage w-full h-full object-cover"></img></div>
            <div className="image image4"><img src={image4} className="gridimage w-full h-full object-cover"></img></div>
            <div className="image image5"><img src={image1} className="gridimage w-full h-full object-cover"></img></div>
       </div>*/}

    <div className="beforeyoumovegrid lg:grid grid-cols-3 grid-rows-3 gap-2 p-4 ">
            <div className="relative beforemovegrid row-span-2 "><img src={house1} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow absolute w-full bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}> &#8594;</div></div>
            <div className="relative beforemovegrid"><img src={studentgroup} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}> &#8594;</div></div>
            <div className="relative beforemovegrid "><img src={group} className="beforyoumoveimage w-full h-full object-cover" /><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}>&#8594;</div></div>
            <div className="relative beforemovegrid row-span-2"><img src={house2} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}> &#8594;</div></div>
            <div className="relative beforemovegrid "><img src={pondhouse} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}> &#8594;</div></div>
            <div className="relative beforemovegrid "><img src={holidayhouse} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow w-full absolute bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}> &#8594;</div></div>
            <div className="relative beforemovegrid"><img src={house3} className="beforyoumoveimage w-full h-full object-cover"/><div className="gridarrow absolute w-full bottom-10 left-10" style={{fontSize:'60px',color:'white',fontWeight:'bold'}}> &#8594;</div></div>           

       </div>
       </div>
    );
}

export default StudyInGroningen;