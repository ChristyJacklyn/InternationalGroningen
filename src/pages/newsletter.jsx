import React from "react";
import SubscriptionForm from "../Components/subscriptionForm";

function Newletter () {

    return( 
        <div className="flex flex-col ">
        <div className="m-4 text-xl font-l">To get new information about Events happening in Groningen Please subscribe to our Newsletter.. </div>
        <div className="flex w-full items-center justify-center p-4"><SubscriptionForm/></div>
        </div>
    );
}

export default Newletter;