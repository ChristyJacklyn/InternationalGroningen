import React from "react";
import { Link } from "react-router-dom";
import connect from '../assets/connect.jpg';
import PageLayout from "../Components/PageLayout";
import SubscriptionForm from "../Components/subscriptionForm";

function Connect() {

    const connectdata = [{
        image:connect,
        imagetitle: 'Connect',
    }]
    return(
         <div className="min-h-screen flex flex-col">
            <Link to='/connect'> </Link>
            {connectdata.map((connect,index) =>(
                <PageLayout 
                key={index}
                image={connect.image}
                imageTitle ={connect.imagetitle}
                />
            )
            )}
            <SubscriptionForm/>
        </div>
    );
}


export default Connect;