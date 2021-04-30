import axios from 'axios';
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Nav from "./Nav";


class Contact extends Component {
  constructor(){
    super()
    this.state={
     name:'',
    
     email:'',
     message:'',
     
    }
   
  }
 
  onChange=(e)=>{
    e.preventDefault();
    const{name,value}=e.target;
    this.setState({
      ...this.State,
      [name]:value
    })
   
    console.log(this.state)
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
    url: 'http://localhost:4000/contacts',
    data: {
      name: this.state.name,
     
      email:this.state.email,
      message:this.state.message,
      
    }
  });
   


}




    render(){
    return (
      <>
      <Nav/>
       <div className="cont">
           <h1>Contact Us:</h1>
           <form class="box">



                    <input type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name} />

                    <input type="text" name="email" placeholder="Email Address"onChange={this.onChange} value={this.state.email} />

                    <input type="text" name="message" placeholder="Message"onChange={this.onChange} value={this.state.message} />

                    <button type="button" class="btn btn-danger"  onClick={this.handleSubmit} >Submit</button>

                </form>

       </div>
            
        </>

    )
}
}
export default Contact;