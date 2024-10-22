import React from "react";
import NavigationOnClick from "./navigationClick";
import ScrollOnTop from "./scrollOnTop";

const ActivityCard = () => {

    return(
        <div className=" w-full relative">
            
            <div className="flex flex-col sm:flex-row m-4 rounded ">
            <ScrollOnTop/>
            
                <div className="m-2 shadow bg-blue-100 rounded-md w-60 h-90 activitydiv">
                <NavigationOnClick to='/workingingroningen'>
                <div><img src="object-cover"></img></div>
                    <div className="text-black text-lg font-extrabold p-4 ">Highly Skilled worker</div>
                    <div className="p-4">  You work for a company, University or a Mutinational company</div>
                    <div className="card justify-center text-right"><div className="arrow m-10">&#8594;</div></div>
                    </NavigationOnClick> 
                </div>
             
                <div className="m-2 shadow bg-blue-100 rounded-md w-60 h-90 activitydiv">
            <NavigationOnClick to='//livingingroningen'>
                    <div className="text-black text-lg font-extrabold p-4 ">European Migrant Worker</div>
                    <div className="p-4">  You work in the Netherlands and have EU/EEA nationality</div>
                    <div className="card justify-center text-right"><div className="arrow m-10">&#8594;</div></div>
            </NavigationOnClick>
                </div>
                <div className="m-2 shadow bg-blue-100 rounded-md w-60 h-100 activitydiv">
            <NavigationOnClick to='/studyingroningen'>
                    <div className="text-black text-lg font-extrabold p-4 ">Student </div>
                    <div className="p-4"> You study at Higher Education in stitute in the Gronigen region</div>
                    <div className="card justify-center text-right"><div className="arrow m-10">&#8594;</div></div>
            </NavigationOnClick>
                </div>
                <div className="m-2 shadow bg-blue-100 rounded-md w-60 h-90 activitydiv">
            <NavigationOnClick to='/'>
                    <div className="text-black text-lg font-extrabold p-4 ">Employer</div>
                    <div className="p-4"> Does your company have international staff? or you want to hire an international? More information...</div>
                    <div className="card justify-center text-right"><div className="arrow m-10">&#8594;</div></div>
            </NavigationOnClick>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;