


import React from "react";
import { useNavigate } from "react-router-dom";


const NavigationOnClick =({to,children}) =>{

    const navigate =useNavigate();
    
    const handleclick = () =>{
        navigate(to);
    }

    return(
        <div onClick={handleclick} style={{cursor:'pointer'}}>
            {children}
        </div>
    );

}
export default NavigationOnClick;