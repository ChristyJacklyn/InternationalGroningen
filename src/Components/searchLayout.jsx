import React from "react";
import { Link } from "react-router-dom";



const SearchLayout = ({searchimage,searchimagetitle,searchdesc,searchurl}) => {


    return(
        <div className="searchdiv flex flex-col sm:flex-row md:flex-row p-5 m-3 gap-10 shadow-md w-70 h-60" >
            <div className="relative  flex-1"><img src={searchimage} className="object-cover w-full h-full" /><div className="absolute bottom-10 left-10" style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>{searchimagetitle} </div></div>
            <div className=" relative flex-1 p-4 h-full" style={{fontSize:'20px'}}>
            <Link to={searchurl}>
                <div className="w-full h-full ">
                    {searchdesc}
                </div>
                <div className="searcharrow absolute bottom-5" style={{fontSize:'50px',color:'black',fontWeight:'bold'}}>&#8594;</div>
            </Link>
            </div>
        </div>
    );

}

export default SearchLayout;