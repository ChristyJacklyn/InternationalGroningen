// src/pages/Home.js
import React from 'react';
import SubscriptionForm from '../Components/subscriptionForm';
import { Link } from 'react-router-dom';
import community from '../assets/communitymain.jpg';

const Contact = () => {
  return (
    <>
    <div className='flex flex-col w-full  justify-center items-center'>
            <div className=' p-2 w-2/3  '>
            <div className='w-1/2 text-xl space-y-4 space-x-4 p-4'>
                <div className='font-bold'> Contact us:</div>
                <div className=''>
                  <label>Email:</label>
                  <p>christianjacklyn@gmail.com</p>
                </div>
                <div className=''>
                      <label >Contact number:</label>
                      <p>09879866767777</p>
                </div>
                
            </div>
            </div>
                <div className='w-2/3 justify-center items-center space-y-3'>
                <div className='font-bold text-xl'>Opening hours</div>
                  <div>Groningen International Centre is open Monday to Thursday from 9:00 to 17:00 hrs.</div>

                  The Centre will be closed on the following holidays:

                  <ul><li>5 December 2024: Christmas</li>
                  <li>1 January 2025: New Year</li>
                  <li>21 April 2025: Easter Monday</li>
                  <li>27 April 2025: King's Day</li>
                  <li>5 May 2025: Liberation Day</li>
                  <li>29 May 2025: Ascension Day</li>
                  <li>29 May 2025: Whit Monday</li>
                 <li> 25 December 2025: Christmas</li> 
                  <li>26 December 2025: Boxing Day </li>
                  <li>1 January 2026: New Year </li>
                   </ul>
                  <p style={{textIndent:'20px', textAlign:'center'}}>
                  Groningen International Centre works by appointment. For general questions and deregistration  please email: example@gmail.com.For municipal registration, please make an appointment online. For submitting certificates (likebirth- and marriage certificates), please make an appointment online..</p>

                  <div className='font-bold text-l'>Subscribe to our newsletter</div>
                  Stay up-to-date on everything you need to know when living and working in Groningen region! Keep track of our exciting events and help us improve Griningen region by giving your feedback on the quality of life for internationals. You can sign up for our  <Link to='/newsletter' style={{color:'blue'}}>newsletter here.</Link>
                
                 </div>

           
                          
    </div>
    <div className='flex flex-col justify-center items-center'>
         <div className='p-3 text-l'>There are the some International gethring in Groningen that you can be part of</div>  
         <div className='flex  w-2/3 p-2 bg-blue-100 '><div className='flex-1 p-3'><img src={community} alt="community" className='object-cover w-full h-full' /></div> 
              <div className='flex-1 p-3'>
                  <ul className='ml-3 text-l'>
                  <li> International Gathering</li>
                  <li>at SKLO building</li>
                  <li>Every Wednesday 6:30</li>
                  <li>Interesed?</li>
                  <li>Please Contact on Whats App: 0096976622</li>
                  </ul>
              </div>
         </div>
    </div>
    </>
  );
};

export default Contact;
