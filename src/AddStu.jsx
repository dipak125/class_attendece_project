import React,{useEffect, useState} from "react";
import Nav from "./Nav";
import axios from "axios";
import "./Feedback.css"
const AddStudent=()=>{
 
    
    
     const[state,setState]=useState({
       i:"",
      s:{
          roll:"",
          name:"",
          courses:"",
          email:""


      },
      data:[]
});
     useEffect(()=>{
      axios.get(`http://localhost:4000/students/`).then(res=>{
        console.log("name is",res.data)
        let e=[]
        for(let i=0;i<res.data.length;i++)
        {
                e.push(res.data[i].roll)
        }
        setState({
            ...state,
            data:[
                ...e
            ]
            

        })
       
         })
        

        
       
      
    
    
    },[])
   
    console.log(state.data)
  
    const change=(e)=>{
        const{name,value}=e.target;
        setState({
            ...state,
            s:{
                ...state.s,
                [name]:value
            }
        })
        console.log(state.s)
       
       
        
    }
  
   

const handleSubmit=()=>{
    
   let f=state.data.find(d1=>d1===state.s.roll)
    console.log("value is",f)
    if(f!=null)
    {
        alert("roll no is alredy exist")
    }
    else
    {
        axios.post(`http://localhost:4000/students/${state.i}`,{
            roll:state.s.roll,
            name:state.s.name,
            email:state.s.email,
            courses:state.s.courses
          })
    }
   
   
  


}


  
       
    
    
    



    return(
        <>
        <Nav/>
        <div class="form-group">
            
            <form class="cont1">
           
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