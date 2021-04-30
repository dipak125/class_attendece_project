import React from "react";
import "./Details.css";
import Koala from "./img/Koala.jpg";
import Nav from "./Nav";
const Present=(props)=>{
    const{student,presentStudent}=props;
    
    const submit=()=>{
       
    console.log(student.name);
        presentStudent(student.roll);
    }
    
       
    
    return(
        <>
        <Nav/>
             <div class="container">
    
    <h2>Student Details:</h2>
    <div class="card">
      <img class="card-img-top" src={Koala} alt="Card image"></img>
      <div class="card-body">
        <h4 class="card-text">Name: {student.name}</h4>
        <h4 class="card-texte">Email:dgope@gmail.com</h4>
        <h4 class="card-text">Course:</h4>
       
        <button class="btn btn-success"onClick={()=> submit()}>Confirm</button>
      </div>
    </div>
  </div>
        </>
    )

}
export default Present;