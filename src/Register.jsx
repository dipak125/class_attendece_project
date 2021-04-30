

import axios from 'axios';
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import NavLog from "./NavLog.jsx";
import "./homef.css"

class App extends Component {
  constructor(){
    super()
    this.state={
     fullname:'',
    
     email:'',
     password:'',
     role:''
    }
   
  }
 
  onChange=(e)=>{
    e.preventDefault();
    const{name,value}=e.target;
    this.setState({
      ...this.State,
      [name]:value
    })
   
    
  }
//  onSubmit(event){
//    event.preventDefault()
//    const registered ={
//      fullName:this.state.fullName,
    
//      email:this.state.email,
//      password:this.state.password,
//      role:this.state.role
//    }
//  }

  
 handleSubmit=()=>{
  
  axios({
    method: 'post',
    url: 'http://localhost:4000/users',
    data: {
      fullname: this.state.fullname,
     
      email:this.state.email,
      password:this.state.password,
      role:this.state.role
    }
  });
   


}





render() {
  return (
    <>
    <NavLog/>
    <div>
        <div className="main-container">
        <div className="card col-8 col-lg-4 login-card mt-2 hv-center">
            <form >
                <div class= "p-3 mb-2 bg-info text-white"><h3>Register</h3></div>
               <div>
              <input type='text'
              placeholder='FullName' name="fullname"
              onChange={this.onChange}
              value={this.state.fullname}
              className='form-control '
              />
               </div>
                 <div>
               <input type='text'
              placeholder='E-mail'
              onChange={this.onChange}  name="email"
              value={this.state.email}
              className='form-control'/>
             </div>
             <div>
               <input type='password'
              placeholder='Password'
              onChange={this.onChange} name="password"
              value={this.state.password}
              className='form-control'/>
              </div>
              <div>
               <input type='text'
              placeholder='Role'
              onChange={this.onChange} name="role"
              value={this.state.role}
              className='form-control'/>
              </div>
              <Link to="/"> <button type="button" className='btn btn-info btn-lg'onClick={this.handleSubmit}>submit</button></Link>
            </form>
            </div>
          </div>
       </div>
       </>
        
    
  )
}
}
export default App;