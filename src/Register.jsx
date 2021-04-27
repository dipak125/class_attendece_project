

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state={
     fullName:'',
     username:'',
     email:'',
     password:''
    }
    this.changeFullname = this.changeFullname.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail  = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }
  changeFullname(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeUsername(event){
   this.setState({
     username:event.target.value
   })
 }
 changeEmail(event){
   {
     this.setState({
       email:event.target.value
     })
   }
 }
 changePassword(event){
   {
     this.setState({
       password:event.target.value
     })
   }
 }
 onSubmit(event){
   event.preventDefault()
   const registered ={
     fullName:this.state.fullName,
     username:this.state.username,
     email:this.state.email,
     password:this.state.password
   }
 }
 render() {
   return (
     <div>
         <div className="container">
           <div className="form-div">
             <form onSubmit={this.onSubmit}>
               <input type='text'
               placeholder='FullName'
               onChange={this.changeFullname}
               value={this.state.fullname}
               className='form-control form-group'
               />
               <input type='text'
               placeholder='Username'
               onChange={this.changeUsername}
               value={this.state.username}
               className='form-control form-group'/>
                <input type='text'
               placeholder='E-mail'
               onChange={this.changeEmail}
               value={this.state.email}
               className='form-control form-group'/>
                <input type='password'
               placeholder='Password'
               onChange={this.changePassword}
               value={this.state.password}
               className='form-control form-group'/>
               <input type="submit" className='btn btn-danger btn-block' value='Submit' />
             </form>
           </div>

         </div>
     </div>
   )
 }
}
export default App;