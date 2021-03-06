import React,{useEffect, useState} from "react";
import Nav from "./Nav";
import axios from "axios";
import "./Feedback.css"

const AddStudent=(props)=>{
    const{student,Addstudent,values,id}=props;
    
     let r="";
     let n="";
     let c="";
     let e="";
     let i=""

     const[state,setState]=useState({
       i:"",
      s:{
          roll:r,
          name:n,
          courses:c,
          email:e


      }
});
     useEffect(()=>{
      axios.get(`http://localhost:4000/students/${id}`).then(res=>{
        console.log("name is",res.data.name);
        r=res.data.roll
        i=res.data._id
       
        n=res.data.name
        c=res.data.courses
        e=res.data.email
        setState({
         ...state,
         i:i,
         s:{
          roll:r,
          name:n,
          courses:c,
          email:e
         }

        })
       
      
      })
    
    },[])
   
   
  
    const change=(e)=>{
        const{name,value}=e.target;
       
        setState({
            ...state,
            s:{
                ...state.s,
                [name]: value
            }
        })
        
    }
   
console.log("id is",state.i)

const handleSubmit=()=>{
  

  axios.post(`http://localhost:4000/students/${state.i}`,{
    roll:state.s.roll,
    name:state.s.name,
    email:state.s.email,
    courses:state.s.courses
  })
   
  


}


  
       
    
    
    



    return(
      <>
      <Nav/>
        <div class="form-group">
            
            <form class="cont1">
            <h3>{values}</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Roll no</label>
    <input type="text" class="form-control" name="roll" value={state.s.roll}onChange={change}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" value={state.s.name} onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="text" class="form-control" name="email" value={state.s.email} onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Course</label>
    <input type="text" class="form-control" name="courses" value={state.s.courses} onChange={change}/>
  </div>
 
  <button type="button" class="btn btn-success" onClick={ handleSubmit}>Submit</button>
</form>
        </div>
        </>
    )
}

export default AddStudent;