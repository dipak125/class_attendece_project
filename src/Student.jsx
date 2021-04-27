import React from "react";
import Koala from "./Koala.jpg";
import  "./Details.css";

const Student=(props)=>{
    const{student}=props;
    console.log(Koala);

    return(
      <div class="container">
    
      <h2>Student Details:</h2>
      <div class="card">
        <img class="card-img-top" src={Koala} alt="Card image"></img>
        <div class="card-body">
        <h4 class="card-text">Roll No: {student.roll}</h4>
          <h4 class="card-text">Name: {student.name}</h4>
          <h4 class="card-texte">Email:</h4>
          <h4 class="card-text">Course:</h4>
        </div>
      </div>
    </div>


    )
}
export default Student;