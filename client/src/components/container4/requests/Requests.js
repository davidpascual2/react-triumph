import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './requests.css'

export default function Requests() {
    
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [request, setRequest] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();

        const newRequest = {
            name,
            request
        };
        try{
            const response = await axios.post('/api/requests', newRequest);
                if(response.status){
                    // navigate('/')
                    console.log(response)
                } else {
                    console.log("SOMETHING WENT WRONG!")
                    // console.err(err)
                }
        }catch (error){
            console.log(error)
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
                console.log("Headers:", error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log("Request:", error.request);
              } else {
                // Something else happened while setting up the request
                console.log("Error:", error.message);
              }
        }
    }

//======================================
  return (
    <>
    {/* <div className='requests'>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div> */}

    
    <div className="fluidContainerRequests container-sm" id="requests">
        <div className="create">
            <h2>Have a Prayer request?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, vitae reiciendis? Impedit ad maiores tenetur enim eveniet earum officia neque repellat delectus voluptate reiciendis maxime, non dicta, saepe rerum velit.</p>
            <form id="add-request-form" action="" role="form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    className="from-control" 
                    id="memberName" 
                    placeholder="Enter Name"
                    onChange={e=>setName(e.target.value)}
                />

                <label>Request Details</label>
                <textarea 
                    type="text" 
                    className="form-control" 
                    id="requestDetails" 
                    placeholder="Enter Request Details"
                    onChange={e=>setRequest(e.target.value)}

                >
                </textarea>

                <button type="submit" id="submit-request">submit prayer request</button>
            </form>
        </div>
    </div>
    </>
  )
}



