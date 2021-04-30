import axios from 'axios';
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Nav from "./Nav";

class Feedback extends Component {
  constructor(){
    super()
    this.state={
      feed:[],
     name:'',
     email:'',
     rating:'',
     comments:'',
     
    }
    
   
  }
  componentDidMount(){
    axios.get("http://localhost:4000/feedback").then(res=>{
     
      this.setState({
        ...this.state,
        feed:[
          ...this.state.feed,
          ...res.data
        ]
      })
     
})
  }
 
  change=(e)=>{
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
    url: 'http://localhost:4000/feedback',
    data: {
      name: this.state.name,
     
      email:this.state.email,
      rating:this.state.rating,
      comments:this.state.comments
      
    }
  });
   


}


render(){
  return (
    <>
    <Nav/>
    <div className="main1">
    <h1>
      <center>FeedBack Form</center>
    </h1>
    <form class="cont1">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Name</label>
        <input
          type="text"
          class="form-control"
         name="name"
         value={this.state.name}
         onChange={this.change}
          placeholder="FullName"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          class="form-control"
         name="email"
         value={this.state.email}
         onChange={this.change}
          placeholder="example@example.com"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect2">Rating</label>
        <input
          type="number"
          class="form-control"
         name="rating"
         value={this.state.rating}
         onChange={this.change}
          placeholder="example@example.com"
        />
      </div>
   
      <div class="form-group">
        <label for="exampleFormControlSelect1">Give the comment</label>
        <input
          type="text"
          class="form-control"
          name="comments"
          value={this.state.comments}
          onChange={this.change}
           placeholder="example@example.com"
          placeholder="Comments"
        />
        </div>
      <button type="button" class="btn btn-primary btn-lg" onClick={this.handleSubmit}>
        Submit
      </button>
    </form>
  </div>
  {this.state.feed.map(data=>
      <h4>{data.name}:-commented):&nbsp;{data.comments}</h4>
      
    )}
  </>
  );
}
}
export default Feedback;