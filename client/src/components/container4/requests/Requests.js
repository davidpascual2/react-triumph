import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import React, {useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
// import { useAsyncScript } from "react-async-script";
import './requests.css'

export default function Requests(props) {


    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [request, setRequest] = useState("");
    const [isVarified, setIsVarified] = useState(false);
    const recaptchaRef = useRef(null);
    // const RECAPTCHA_KEY = "6LfNNeYlAAAAAKxcz4Qwjw-dK8tZOGwY09RRHfbo";
    const newRECAPTCHA_KEY = '6LdjyPslAAAAAPdwGgwLmMPk8-Fuuuid0n8C4Oqz';
   

    const handleOnChange = (value) => {
        console.log("Captcha Value:", value);
        // setText(event.target.value);
        // setName(event.target.value)
        setIsVarified(true);
    }  

// =====================================
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsVarified(false);
        setName("") //should this be in try catch?
        setRequest(""); //should this be in try catch?
        //reset captcha
        recaptchaRef.current.reset(); //should this be in try catch?

        const newRequest = {
            name,
            request
        };
        try{
            const response = await axios.post('/api/requests', newRequest);
                if(response.status){ //if response is true
                    // navigate('/')
                    console.log(response)
                    // setName("");
                    // setRequest("");
                    // recaptchaRef.current.reset();
                    
                } else { //if something is wrong with response
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
            <p>If you would like our leaderes to pray for you or any concern that you have please feel free to fill out the form below. If you dont feel comfortable sharing your name please feel free to type "N/A" in the name section.</p>
            <form id="add-request-form" action="" role="form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    className="from-control" 
                    id="memberName" 
                    placeholder="Enter Name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />

                <label>Request Details</label>
                <textarea 
                    type="text" 
                    className="form-control" 
                    id="requestDetails" 
                    placeholder="Enter Request Details"
                    value={request}
                    onChange={e=>setRequest(e.target.value)}

                >
                </textarea>

                <ReCAPTCHA 
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test key 
                    onChange={handleOnChange}
                    ref={recaptchaRef}
                />

                <button 
                    type="submit" 
                    id="submit-request"
                    disabled={!isVarified}
                >
                submit prayer request
                </button>
            </form>
        </div>
    </div>
    </>
  )
}


 // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!token) {
    //       alert('Please complete the ReCAPTCHA challenge');
    //       return;
    //     } else {

    //         const newRequest = {
    //             name,
    //             request,
    //             token,
    //         };
    //         try {
    //         const response = await axios.post('/api/requests', newRequest);
    //         if (response.status === 200) {
    //             // navigate('/');
    //             console.log(response);
    //         } else {
    //             console.log('SOMETHING WENT WRONG!');
    //         }
    //         } catch (error) {
    //         console.log(error);
    //         if (error.response) {
    //             console.log('Status code:', error.response.status);
    //             console.log('Response data:', error.response.data);
    //             console.log('Headers:', error.response.headers);
    //         } else if (error.request) {
    //             console.log('Request:', error.request);
    //         } else {
    //             console.log('Error:', error.message);
    //         }
    //         }
    //     }
    //   };


