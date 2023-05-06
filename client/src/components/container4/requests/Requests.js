import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
// import ReCAPTCHA from '../../ReCAPTCHA/ReCAPTCHA';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './requests.css'

export default function Requests() {

    const [token, setToken] = useState('')

    // const handleReCAPTCHA = () => {
    //     window.grecaptcha.enterprise
    //       .execute("6LfNNeYlAAAAAKxcz4Qwjw-dK8tZOGwY09RRHfbo", { action: "user_input" })
    //       .then((token) => setToken(token));
    // };

    const handleReCAPTCHA = async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute("6LfNNeYlAAAAAKxcz4Qwjw-dK8tZOGwY09RRHfbo", { action: "user_input" });
          setToken(token);
        } catch (error) {
          console.error(error);
        }
      };
      

// =====================================
    
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

                {/* <div id="recaptcha-container"></div> */}

                <ReCAPTCHA 
                    sitekey="6LfaYOclAAAAADnr7215oSNyJx7Ltna5bXcRe-Jf"
                    onChange={handleReCAPTCHA}
                />

                <button 
                    type="submit" 
                    id="submit-request"
                >
                submit prayer request
                </button>
            </form>
        </div>
    </div>
    </>
  )
}



