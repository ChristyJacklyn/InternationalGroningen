import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardDisplayPage = () => {
  
      
      const [isEditing, setIsEditing] = useState(false);
      const [editTitle, setEditTitle] = useState("");
      const [editDescription, setEditDescription] = useState("");
      const [editImage, setEditImage] = useState("");
      const [cardData, setCardData] = useState(null);
      const navigate = useNavigate();



  useEffect(() => {
    // Retrieve the card data from localStorage
    const storedData = localStorage.getItem("cardData");
    if (storedData) {
      setCardData(JSON.parse(storedData));
    }
  }, []);

  const handleDelete = () => {
    // Remove card data from localStorage
    localStorage.removeItem("cardData");

    // Update state to reflect the deletion
    setCardData(null);

    // Optional: Redirect to form page after deletion
    navigate("/");
  };


   // Handle toggling to edit mode
   const handleEdit = () => {
    setIsEditing(true);
  };

   // Handle saving edits
   const handleSave = (e) => {
    e.preventDefault();
    const updatedData = { title: editTitle, description: editDescription, image: editImage };
    localStorage.setItem("cardData", JSON.stringify(updatedData));
    setCardData(updatedData);
    setIsEditing(false);
  };

  // Handle image change during editing
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };




  if (!cardData) {
    return <p>No card data available.</p>;
  }

  return (

    <div style={cardStyle}>

    
    {isEditing ? (
        
        <form onSubmit={handleSave}>
          <div>
            <label>
              Title:
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Image:
              <input type="file" onChange={handleImageChange} accept="image/*" />
            </label>
          </div>
         
          <button type="submit" style={buttonStyle}>Save</button>
          <button type="button" onClick={() => setIsEditing(false)} style={buttonStyle}>
            Cancel
          </button>
        </form>
      ) : (

    //diplay card
        <>
      {cardData.image && (
        <img
          src={cardData.image}
          alt="Item"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
      <button onClick={handleEdit} style={buttonStyle}>Edit</button>
      <button onClick={handleDelete} style={buttonStyle}>
        Delete Card
      </button>
      </>
      )}
    </div>
);
};

export default CardDisplayPage;

const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };


  const buttonStyle = {
    marginTop: "16px",
    padding: "8px 16px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };