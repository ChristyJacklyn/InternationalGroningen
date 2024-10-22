import React from "react";

const SmallPageCard = ({image,desc}) => {
    return(
        <div className="flex flex-col p-4"> {/* w-auto md:w-1/2 sm:w-1/2 m-2 h-full p-4*/}
            <div className=""><img src={image} alt={desc} className='h-[30vh] w-full object-cover rounded-md smallcardimage' /></div>
            <div className="text-xl text-center pt-3">{desc}</div>
        </div>
    );
}

export default SmallPageCard;