import React from "react";
import  "./Feedback.css";

function Feedback() {
  return (
    
    <div className="main1">
    <h1>
      <center>FeedBack Form</center>
    </h1>
    <form class="cont1">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="FullName"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Example@example.com"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect2">Rating</label>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
   
      <div class="form-group">
        <label for="exampleFormControlSelect1">Give the comment</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Comments"
        />
        </div>
      <button type="button" class="btn btn-primary btn-lg">
        Submit
      </button>
    </form>
  </div>
  );
}
export default Feedback;