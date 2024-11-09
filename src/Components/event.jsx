{/*import React from "react";

const EventsInput = () =>{

    return(
        <div className="flex justify-center items-center ">
        <div className="space-y-3 border-2">
            <div className="text-center font-bold p-2">Do you want to add your own Event?</div>
            <div className="space-y-3 p-2">
                <div className="">Please fill the form Below:</div>
               <div><label>Event Name:</label>
                <input type="text" placeholder="eventname" className="border" /></div> 
                <div><lable>Description of the Event:</lable>
                <input type="text" placeholder="eventname" className="border" /></div>
                <div><label>Upload the photo of you Event:</label>
                <input type="text" placeholder="eventname" className="border" /></div>
            </div>
           <div className="text-center p-4 border-4 m-2"> <button type="button" >Create One</button></div>
        </div>
        </div>
    );

}

export default EventsInput; */}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventsInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   // Get the existing cards array from localStorage (if any)
   const existingCards = JSON.parse(localStorage.getItem("cardData")) || [];

   // Create the new card
   const newCard = { id: Date.now(), title, description, image };

   // Add the new card to the array
   const updatedCards = [...existingCards, newCard];
   

    // Store data in localStorage
   
    localStorage.setItem("cardData", JSON.stringify(updatedCards));

    // Redirect to the card display page
    navigate("/events");
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Set the image URL
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-4  p-4 border-2 ">
      <h2 className="font-bold text-center border-2 bg-gray-200">List Your Event</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="p-2">
          <label className="">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-2 rounded"
            />
          </label>
        </div>
        <div className="p-2">
          <label className="w-full">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border-2 rounded"
            />
          </label>
        </div>
        <div className="p-2">
          <label className="p-3">
            Image:
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </label>
        </div>
        <button type="submit" className="border w-full bg-gray-200">Create Card</button>
      </form>
      </div>
    </div>
  );
};

export default EventsInput;
