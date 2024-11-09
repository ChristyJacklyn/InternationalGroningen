import React from "react";

function Aboutus (){

    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col lg:w-1/3 p-7 font" style={{fontFamily:'ariel', fontSize:'20px'}}>
                    <div className=" font-oswald" style={{fontWeight:'bold',fontSize:'40px'}}>About us</div>
                    <div className="mt-4 " style={{fontFamily:'ariel', fontSize:'20px'}}>Welcome to The Groninfen International Center! Groningen International Centre is your guide to live, work and study in The Hague region. We support international newcomers and employers to make you feel welcome in our region.</div>
                    <div className="font-bold p-2">IWCN</div>
                    <div>The International Welcome Center North offers a range of valuable services for internationals and companies who hire them, from formalities processing to answering questions and organizing integration events, and from personal advice to business guidance. Visit the categories below to find out more about what IWCN can do for you.</div>
                    <div className="font-bold mt-4 text-l">What do we do ?</div>
                    <div>
                        <li>Founders and supporters</li>
                        <li>Information and Events</li>
                        <li>Integration Programes</li>
                        <li>IWCN Service Providers</li>
                    </div>
                    <div className="text-blue-800 p-4"><a href="https://iwcn.nl/">For more information...</a></div>
            </div>
        </div>
    );
}

export default Aboutus;