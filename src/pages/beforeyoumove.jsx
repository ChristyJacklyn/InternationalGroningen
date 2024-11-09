import React from "react";
import forum from '../assets/forum.jpg';
import energy from '../assets/energy.jpg';
import garden from '../assets/whygroningen.jpg';
import group from '../assets/communitymain.jpg';
import house1 from '../assets/housing1.jpg';
import house2 from '../assets/housing2.jpg';
import house3 from '../assets/housing3.jpg';
import studentgroup from '../assets/group1.jpg';
import holidayhouse from '../assets/holidayhouse.jpg';
import pondhouse from '../assets/pondhouse.jpg';

import image1 from '../assets/martinitoren.jpg';
import image2 from '../assets/whygroningen.jpg'
import image3 from '../assets/bike.jpg';
import image4 from '../assets/street.jpg';
import image5 from '../assets/livingingriningen2.jpg';



function BeforeYouMove (){

    return(
        <div className="">
            <div className=" flex flex-col justify-center items-center">
                <div className='beforeyoumoveheading w-2/3 text-center p-5' style={{fontFamily:'oswald', fontSize:'40px'}}>Before your move to Groningen</div>
                <div className="beforeyoumovefirstletter w-2/3 text-cente p-3" style={{fontSize:'20px'}}>If you're moving to Groningen soon, it is best to be well-prepared before you leave. Where can you find a good place to live? What do you need to know before heading over? We're here to help you transition as comfortably as possible.</div>
            </div>
       {/*<div className="beforeyoumovegrid lg:grid grid-cols-3 grid-rows-3 gap-2 p-4 ">
            <div className="relative beforemovegrid1 row-span-2 zoom-out-1"><img src={house1} className="w-full h-full object-cover"/><div className="absolute  bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative beforemovegrid2"><img src={studentgroup} className="w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative beforemovegrid3 "><img src={group} className="w-full h-full object-cover" /><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative beforemovegrid4 row-span-2"><img src={house2} className="w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative beforemovegrid5 "><img src={pondhouse} className="w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative beforemovegrid6 "><img src={holidayhouse} className="w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative beforemovegrid7"><img src={house3} className="w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>           

       </div>*/}
       <div className="gridcontainer grid gap-2 p-10">
            <div className="relative image image1 row-span-2"><img src={image5} className="gridimage w-full h-full object-cover"/><div className="absolute  bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Practical Matters &#8594;</div></div>
            <div className="relative image image3 col-span-2"><img src={image3} className="gridimage w-full h-full object-cover"/><div className="absolute  bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>For Internationals &#8594;</div></div>
            <div className="relative image image2"><img src={image2} className="gridimage w-full h-full object-cover"/><div className="absolute  bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Expats &#8594;</div></div>
            <div className="relative image image4"><img src={image4} className="gridimage w-full h-full object-cover"/><div className="absolute  bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Student Housing &#8594;</div></div>
            <div className="relative image image5"><img src={image1} className="gridimage w-full h-full object-cover"/><div className="absolute  bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Your way Around &#8594;</div></div>
            <div className="relative image beforemovegrid7 "><img src={house3} className=" gridimage w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Student Housing &#8594;</div></div>  
            <div className="relative image beforemovegrid5 row-span-2 "><img src={pondhouse} className="gridimage w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Housing &#8594;</div></div>
            <div className="relative image beforemovegrid6 col-span-2"><img src={holidayhouse} className=" gridimage w-full h-full object-cover"/><div className="absolute bottom-10 left-10" style={{fontSize:'40px',color:'white',fontWeight:'bold'}}>Explore Coutryside &#8594;</div></div>         

       </div>
       </div>    
    );
}


export default BeforeYouMove;