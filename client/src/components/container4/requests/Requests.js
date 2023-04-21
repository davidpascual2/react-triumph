import React from 'react';
import './requests.css'

export default function Requests() {
  return (
    <>
    <div class="requests">
            <div class="create">
                <h2>Have a Prayer request?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, vitae reiciendis? Impedit ad maiores tenetur enim eveniet earum officia neque repellat delectus voluptate reiciendis maxime, non dicta, saepe rerum velit.</p>
                <form id="add-request-form" action="" role="form">
                    <label>Name</label>
                    <input type="text" class="from-control" id="memberName" placeholder="Enter Name"/>

                    <label>Request Details</label>
                    {/* <!-- <textarea 
                        required
                        value={body}
                    > --> */}
                    <textarea type="text" class="form-control" id="requestDetails" placeholder="Enter Request Details"></textarea>

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
