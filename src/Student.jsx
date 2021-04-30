import React,{useState,useEffect} from "react";
import Koala from "./Koala.jpg";
import axios from "axios";
import  "./Details.css";
import Nav from "./Nav";

const Student=(props)=>{
  const{id}=props;
  const[state,setState]=useState({
    s:{
      roll:"",
      name:"",
      email:"",
      courses:""

    },
    id:""
  });
console.log("id is",id)
 useEffect(()=>{
    axios.get(`http://localhost:4000/students/${id}`).then(res=>{
      console.log(res.data)
          setState({
            ...state,
            s:{
              roll:res.data.roll,
              name:res.data.name,
              email:res.data.email,
              courses:res.data.courses
            },
           
          })
         
    })
    console.log(state.s)
},[])

    return(
      <>
      <Nav/>
      <div class="container">
    
      <h2>Student Details:</h2>
      <div class="card">
        <img class="card-img-top" src={Koala} alt="Card image"></img>
        <div class="card-body">
        <h4 class="card-text">Roll No: {state.s.roll}</h4>
          <h4 class="card-text">Name: {state.s.name}</h4>
          <h4 class="card-texte">Email:{state.s.email}</h4>
          <h4 class="card-text">Course:{state.s.courses}</h4>
        </div>
      </div>
    </div>
    </>


    )
}
export default Student;