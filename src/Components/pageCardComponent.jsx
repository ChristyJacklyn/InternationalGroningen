import React from "react";

const PageCardComponent = ({image,title,desc}) => {


    return(
        <div className="flex flex-col p-4"> {/* w-auto md:w-1/2 sm:w-1/2 m-2 h-full p-4*/}
            <div className=""><img src={image} alt={title} className='h-[30vh] w-full object-cover rounded-md top' /></div>
            <div><h1 className="text-xl p-2">{title}</h1></div>
            <div className="p-2">{desc}</div>
        </div>
    );
}

export default PageCardComponent;