import React,{useContext,useState} from "react";
import axios from 'axios';
import { useSearchParams,useNavigate } from "react-router-dom";
import FormDataContext from "./formDataContext";

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


const [formData, setFormData] =useState({name:'',email:'',comment:''})
const [message, setMessage] = useState('');

const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/submit', formData)
    .then(response => {
        setMessage(response.data.message);
        console.log("Data submitted successfully!");
    })
    .catch(error => {
        console.error("There was an error submitting the data:", error);
        setMessage("Submission failed. Please try again.");
    });
    //setFormData(formData); // Store data in context
    //console.log("Data submitted successfully!");
   // navigate("/"); // Redirect to the display page
};



return(<>

            <form onSubmit={handleSubmit} className='w-1/2 bg-gray-50' >
                <div className="flex">
                <div className="flex flex-col  border-2 shadow-xl p-4 m-3 space-y-3 w-full " style={{borderRadius:'20px'}}>
                    <div className=" col-span-2 m-4 text-center text-white p-4 bg-blue-900 rounded" >
                        <h1 className="text-xl text-color-black " style={
                            {
                                fontSize: '30px',
                            }
                        }> Subscription from</h1>
                    </div>
                <div className="  space-y-2">
                    <div className="flex">
                            <label className="" style={{width:'100px'}}>Name :</label>
                            <input  className='w-1/2' 
                                    name="name"
                                    type="text" placeholder="Enter name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    style={ { padding: '5px',left: '10px',border: 'solid 1px',margin:'5px',borderRadius:'5px'}}/>
                    </div>
                            <div className="flex">
                                <label className=''style={{width:'100px'}} htmlFor="">Email :</label>
                                <input className='w-1/2' 
                                        name="email"
                                        type="text" 
                                        placeholder="Enter email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        style={{padding: '5px',left: '10px', border: 'solid 1px',margin:'5px',borderRadius:'5px'}} />
                            </div>
                            <div className="flex flex-row">
                                <label className="" style={{width:'100px'}}>Comment:</label>
                                    <div className="w-full">
                                    <textarea 
                                        className='w-full' 
                                        name="comment"
                                        value={formData.comment} 
                                        onChange={handleChange} style={{   height:'100px', border: 'solid 0.3px', margin:'5px',borderRadius:'5px'}}/>
                                    </div>
                            </div>
                        </div>
                        <button type="submit"  className="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow-lg  duration-200 hover:scale-105"> Subscribe </button>
                        {message &&<p>{message}</p>}
                    </div>
                    </div>
            </form>
            
        </>);
        }

        export default SubscriptionForm;