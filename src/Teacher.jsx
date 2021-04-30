import React, {Component} from 'react'
import axios from 'axios'
import Nav from "./Nav";
export default class Teacher extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Students: []
      };
  }
  gettodosData() {
      axios.get("http://localhost:4000/teachers").then(res => {
              const data = res.data
              console.log(data)
              const Students = data.map(u =>
                
                <tbody>
                  <tr>
                    <th scope="row">{u.Srno}</th>
                    <td>{u.name}</td>
                    <td>{u.subject}</td>
                   
                  </tr>
                  
                </tbody>
             
                  )

                  this.setState({
                      Students
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
                    <th scope="col">Srno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    
                  </tr>
                </thead>
              
              {this.state.Students}
              </table>
          </div>
          </>
      )
  }
}