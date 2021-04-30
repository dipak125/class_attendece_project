import React, { useEffect,useState } from "react";
import Nav from "./Nav";
import axios from "axios";


const Attendence=(props)=>{
    

      const[state,setState]=useState({
        s:[],
        date:[]
       
        
      })
      const date=new Date();
      const d=date.toLocaleDateString();
     
     
      useEffect(()=>{
        axios.get("http://localhost:4000/students").then(res=>{
                
              setState({
                ...state,
                 s:res.data
              })
        })
      },[])
    
    
     
      const Present=(id,roll,email,name,courses)=>{
       
      
        axios.get(`http://localhost:4000/students/${roll}`).then(res=>{
          console.log(res.data)
         let g=res.data.date.find(u=>u==d)
         if(typeof g ==='undefined')
         {
           console.log("data is not available")
             res.data.date.push(d);
         }
        else{
          console.log("data is avilable")
          console.log("before",res.data.date.length)
          res.data.date=res.data.date.filter(u=>u!=d)
          console.log("after",res.data.date.length)
        }
         

        axios.put(`http://localhost:4000/students/${id}`,{
            
          date:res.data.date,
          roll:roll,
            name:name,
           courses:courses,
          email:email,
   })
        
        
      
   
       })
    
     
       
    
 
      }
     
     
      


    return(
        <>
        <Nav/>
             <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Roll-No</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
   
    {
      state.s.map(s1=>
      
        <tr>
        <th scope="row">{s1.roll}</th>
        <td>{s1.name}</td>
        <td>
            <button type="button" class="btn btn-outline-success" onClick={()=>Present(s1._id,s1.roll,s1.email,s1.name,s1.courses)}>Present</button>
           
        </td>
       
      </tr>
        )
    }
    
  </tbody>
</table>
        </>
    )
}
export default Attendence;