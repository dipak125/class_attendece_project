import React, {Component, useContext} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import Nav from "./Nav";


export default class Students extends Component {
  constructor(props) {
      super(props);
      this.state = {
          s:[]
      };
  }
  gettodosData() {
      axios.get("http://localhost:4000/students").then(res => {
              res.data.map(data=>{
                this.setState({
                  ...this.state,
                  s:[
                    ...this.state.s,
                    data
                  ]
                })
              })
              
           
             
             
                  

                 
          })
          

  }
  componentDidMount(){
      this.gettodosData()
  }
  render() {

      return (
        <>
        <Nav/>
          <div>
               <table class="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Roll</th>
                    <th scope="col">Name</th>
                    <th scope="col">Courses</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.s.map(u =>
                
                <tr>
                    <th scope="row">{u.roll}</th>
                    <td>{u.name}</td>
                    <td>{u.courses}</td>
                    <td>{u.email}</td>
                    <td>
                    <Link to={`/student/${u.roll}`}><button class="btn btn-info">View</button></Link>&nbsp;&nbsp;&nbsp;
                     <Link to={`/delete/${u.roll}`}><button class="btn btn-warning">Delete</button></Link>&nbsp;&nbsp;&nbsp;
                     <Link to={`/edit/${u.roll}`}><button class="btn btn-outline-secondary">Edit</button></Link>

                    </td>
                  </tr>
                 
                )}
                </tbody>
              </table>
          </div>
          </>
      )
  }
}