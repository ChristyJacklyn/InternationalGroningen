import React from "react";
import { Link } from "react-router-dom";


function GridComponent({image,title,desc,items}) {

   
    return(
        <div className="grid grid-cols-2 gap-4 p-5 m-1 border">
            {/* first row image span across two cols */}
                <div className="col-span-2 row-span-1">
                    <img src={image} alt={title} className="h-[50vh] w-full col-span-2 object-cover"></img>
                </div>
            {/* second row:first column with content */}
            <div className="grid lg:grid-cols-[400px,auto] w-full col-span-2 mt-7">
                
            {/* second row: second column with list */}
                    <div className="uldiv flex flex-col  justify-start items-center text-blue-700 col-span-1 p-4 lg:p-10 row-span-1" >
                        <div className="text-blue-800 hover:underline text-xl text-right" >Explore Groningen</div>
                            <ul className="text-xl">
                                {items.map((item) =>(
                                <li key={item.id} className="hover:underline ">
                                    <Link to={item.link}>{item.title}</Link>
                               </li>
                                ))}
                                
                            </ul>
                    </div>
                <div className="grid place-items-center lg:mr-auto lg:p-10 lg:w-2/3">
                        <div className="text-xl p-3" style={{fontSize:'40px', fontFamily:'monospace', fontWeight:'bold'}}>{title}</div>
                        <div className="para p-10 " style={{fontSize:'20px'}}>
                            <p>{desc}</p>
                        </div>
                 </div>
            </div>
              
        </div>
    );
}

export default GridComponent;