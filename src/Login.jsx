import React, {useState,useEffect} from 'react';
import axios from "axios";import Nav from "./Nav";
import NavLog from "./NavLog.jsx";
import "./homef.css"

import { useHistory,Link } from "react-router-dom";


  
  
  function App(props) {
    const history = useHistory();
      const[state,setState]=useState({
          email:"",
          password:"",
      });
    let users=''; 
    const change=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        setState({
            ...state,
            [name]:value
        })
        
    }
   
    const submit=()=>{
       
        axios.get("http://localhost:4000/login").then(res=>{
           
            users=res.data
           
            
           
            let e=true 
            let a=0
            for(let i=0;i<res.data.length;i++){
              if(res.data[i].email==state.email)
              {
                a++
                if(res.data[i].password==state.password)
                {
                  console.log(res.data[i].email,res.data[i].password,state.email,state.password)
                  e=false
                  
                  history.push("/home"); 
   
                }
               
              }
            }
           if(e==true && a!=0)
           {
             alert("Invalid")
             
           }
               
                
               
                
            
           
       
          
        

       
      
           

       })
       
      
    }
    
    
   
  
  return(
      <>
        <NavLog/>
      <div class="main-container">
        <div className="card col-8 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       name="email"
                       value={state.email}
                       onChange={change}
                       placeholder="Enter email"
                />
              
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                       name="password"
                       value={state.password}
                       onChange={change}
                        placeholder="Password"
                    />
                </div>
               
                <button type="button" className="btn btn-danger" onClick={submit}>
            Login
          </button>
          <div>
          <small>If You are Not User Kindly Register!!!</small>
          <Link to="/register"><button type="button" className="btn btn-warning">
            Register
          </button></Link>
          </div>
            </form>
        </div>
        </div>
        </>
        
    )
}
export default App;