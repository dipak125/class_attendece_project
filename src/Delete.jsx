import React,{useState,useEffect} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Koala from "./img/Koala.jpg";
import "./Details.css";
import axios from "axios";
import Nav from "./Nav";



const Delete=(props)=>{
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
              setState({
                ...state,
                s:{
                  roll:res.data.roll,
                  name:res.data.name,
                  email:res.data.email,
                  courses:res.data.courses
                },
                id:res.data._id
              })
             
        })
        console.log(state.s)
    },[])
    const confirm=()=>{
      axios.delete(`http://localhost:4000/students/${state.id}`)
    }
    return(
        <>
        <Nav/>
           <div class="container">
    
    <h2>Student Details:</h2>
    <div class="card">
      <img class="card-img-top" src={Koala} alt="Card image"></img>
      <div class="card-body">
      <h4 class="card-text">Roll:{state.s.roll} </h4>
        <h4 class="card-text">Name:{state.s.name} </h4>
        <h4 class="card-texte">Email:{state.s.email}</h4>
        <h4 class="card-text">Course:{state.s.courses}</h4>
        <h5 class="card-text">Sure you want to delete</h5>
        <Link to="/students"><button class="btn btn-outline-danger" onClick={confirm}>Confirm</button></Link>
      </div>
    </div>
  </div>
        </>
    )
}
export default Delete;