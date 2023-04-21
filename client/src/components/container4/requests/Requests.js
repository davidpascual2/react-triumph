import React from 'react';
import './requests.css'

export default function Requests() {
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

    <div className="requests">
            <div className="create">
                <h2>Have a Prayer request?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, vitae reiciendis? Impedit ad maiores tenetur enim eveniet earum officia neque repellat delectus voluptate reiciendis maxime, non dicta, saepe rerum velit.</p>
                <form id="add-request-form" action="" role="form">
                    <label>Name</label>
                    <input type="text" className="from-control" id="memberName" placeholder="Enter Name"/>

                    <label>Request Details</label>
                    {/* <!-- <textarea 
                        required
                        value={body}
                    > --> */}
                    <textarea type="text" className="form-control" id="requestDetails" placeholder="Enter Request Details"></textarea>

                    {/* <!-- <label>Blog Author:</label>
                    <select
                    value={author}
                    >
                        <option value='eddie'>eddie</option>
                        <option value='dan'>dan</option>
                        <option value='kyle'>kyle</option>
                        <option value='david'>david</option>
                    </select> --> */}
                    <button type="submit" id="submit-request">submit prayer request</button>
                </form>
            </div>
        </div>
    </>
  )
}



