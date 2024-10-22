import React,{useState} from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";

const SubscriptionForm = () => {
    /*const [formData, setFormData] = useState({name: '', email: ''})
    const [message, setMessage] = useState('');

    const handleChange =(e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]: value,});
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        // make post request to express backend
        axios.post('',formData)
        .then (response =>{setMessage(response.data.message);})
        .catch(error => {
            if (error.message){
                setMessage(error.response.data.message);
            } else{
                setMessage('Something went wrong, Please try again')
            }
        });
    }

    return(
        <div>
            <h2>Subscribe to our Newsletter </h2>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                     />
                </div>
                <div>
                    <button type="submit"> Subscribe</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SubscriptionForm; */ 

const [fromdata, setDormData] =useState({name:'',email:''})
const [message, setMessage] = useState('');

return(<>
    <form onSubmit=''>
        <div className=" flex ">
        <div className=" flex p-4 border m-4 rounded lg:w-1/3  flex flex-col mx-auto">
            <div className="flex justify-center rounded p-3" >
            <h1 className="text-xl text-color-black " style={
                {
                    fontSize: '30px',
                }
            }> Subscription from</h1>
            </div>
        <div className="p-2">
            <label className="">Name :</label>
            <input  type="text" placeholder="Enter name" style={
                {   
                    padding: '5px',
                    left: '10px',
                    border: 'solid 1px',
                    margin:'5px',
                    borderRadius:'5px',
    
                }
            }/>
        </div>
            <div className="p-2">
                <label className='' htmlFor="">Email :</label>
                <input type="text" placeholder="Enter email" style={
                    {
                        padding: '5px',
                        left: '10px',
                        border: 'solid 1px',
                        margin:'5px',
                        borderRadius:'5px',
                
                    }
                }/>
            </div>
            <button type="submit"> Subscribe </button>
            </div>
        </div>
    </form>
</>);
}

export default SubscriptionForm;