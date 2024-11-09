// DisplayData.js
import React, { useContext } from "react";
import FormDataContext from "../Components/formDataContext";
import SubscriptionForm from "../Components/subscriptionForm";

const DisplayData = () => {
    const { formData } = useContext(FormDataContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
            {formData.name || formData.email || formData.comment ? (
                <div>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Comment:</strong> {formData.comment}</p>
                </div>
            ) : (
                <p>No data submitted yet.</p>
            )}
        </div>
    );
};

export default DisplayData;
