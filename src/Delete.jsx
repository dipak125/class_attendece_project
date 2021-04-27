import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Koala from "./img/Koala.jpg";
import "./Details.css";


const Delete=(props)=>{
    const{del,student}=props;
    console.log(student.name);
    console.log(student.roll);
    const submit=()=>{
        del(student.roll);
    }
    return(
        <>
           <div class="container">
    
    <h2>Student Details:</h2>
    <div class="card">
      <img class="card-img-top" src={Koala} alt="Card image"></img>
      <div class="card-body">
        <h4 class="card-text">Name: {student.name}</h4>
        <h4 class="card-texte">Email:dgope@gmail.com</h4>
        <h4 class="card-text">Course:</h4>
        <h5 class="card-text">Sure you want to delete</h5>
        <button class="btn btn-outline-danger">Confirm</button>
      </div>
    </div>
  </div>
        </>
    )
}
export default Delete;