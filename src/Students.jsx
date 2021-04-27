import React, {Component} from 'react'
import axios from 'axios'
export default class Students extends Component {
  constructor(props) {
      super(props);
      this.state = {
          Students: []
      };
  }
  gettodosData() {
      axios.get("http://localhost:4000/students").then(res => {
              const data = res.data
              console.log(data)
              const Students = data.map(u =>
                  <tr>
                  <td>{u.roll}</td>
                  <td>{u.name}</td>
                  <td>{u.courses}</td>
                  <td>{u.email}</td>
                  <td><button type="click">view details</button></td>
                  </tr>
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
          <div>
              {this.state.Students}
          </div>
      )
  }
}