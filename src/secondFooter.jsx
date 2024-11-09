import React from "react";
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import whatsapp from './assets/whatsapp.png';
import gnlogo from './assets/gnlogo.png';
import { Link } from "react-router-dom";

function SecondFooter() {
    return(
        <>
        <div className="h-[50vh] mt-5 bg-blue-950 p-5 flex flex-col " style={{color:'lightgray'}}>
            <div className="flex lg:w-1/2" >
                <div className="p-5 flex-1"><ul> <Link to='/whygroningen'><li>About groningen</li></Link>
                <Link to='/relocating'><li>Living in Groningen</li></Link>
                <Link to='/studyingroningen'><li>Studying in Groningen</li></Link>
                <Link to='/studyingroningen'> <li>Business in groningen</li></Link>
                        <li>Explore Groningen Province</li></ul></div>
                <div className="p-5 flex-1"><ul><li>Gemeente Groningen</li>
                        <li>Province Groningen</li>
                        <li>Visit Groningen</li></ul></div>
                
            </div>
            <div className="mt-auto w-full flex flex-row justify-between">
                <div className="flex ">
                <img src={facebook} alt="facebook"  className="w-9 h-9 m-2"/>
                <img src={instagram} alt="intagram" className="w-9 h-9 m-2"/>
                <img src={twitter} alt="twitter"    className="w-9 h-9 m-2"/>
                <img src={whatsapp} alt="whatsapp"  className="w-9 h-9 m-2"/>     
                </div>
                <div className="flex flex-col items-center"><img src={gnlogo} alt="" className="w-20 h-30 rounded-xl" /><p className='thispara' >Groningen Province</p></div>       
            </div>
        </div>
        </>
    );

}

export default SecondFooter;