import React from "react";

const SmallPageCard = ({image,desc}) => {
    return(
        <div className="flex flex-col p-4 relative"> {/* w-auto md:w-1/2 sm:w-1/2 m-2 h-full p-4*/}
            <div className="mainimagediv"><img src={image} alt={desc} className='mainimage h-[30vh] w-full object-cover rounded-md smallcardimage' /></div>
            <div className=" absolute bottom-10 text-white left-10 text-xl text-center pt-3" style={{fontSize:'25px'}}>{desc}</div>
        </div>
    );
}

export default SmallPageCard;