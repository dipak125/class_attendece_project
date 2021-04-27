import React, { useState } from 'react'
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



const Home = () => {

  const [selectedDate, setSelectedDate] = useState(null)


  const d = new Date();
  const day = d.getDate();
  const m = 1 + d.getMonth();
  const y = d.getFullYear();
  return (

    <div>
      <div class="left">
        <div>
          <div class="top">
            <u><h1>About course:</h1></u>
            <h3>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both bootstrap.bundle.js and bootstrap.bundle.min.js include Popper for
                              our tooltips and popovers. For more information about what’s included in Bootstrap, please see our contents section. Going to see the changes</h3>
          </div>
          <div class="bottom">
            <u><h1>Today's topic:</h1></u>
            <h3>Read and subscribe to The Official Bootstrap Blog.
            Join the official Slack room.
            Chat with fellow Bootstrappers in IRC. On the irc.freenode.net server, in the ##bootstrap channel.
            On the irc.freenode.net server, in the ##bootstrap channel
                               delivery mechanisms for maximum discoverability.</h3>
          </div>
        </div>
      </div>
      <div class="right">
        <u><h3><center>Defaulter's List</center></h3></u>
        <h3><center>Date : {day}-0{m}-{y}</center></h3>
        <div><center>
          <DatePicker

            placeholder="Choose date"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd-MM-yyyy'
            isClearable />
        </center></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Roll no</th>
              <th scope="col">Name</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>

              <td>Rajiv</td>
            </tr>

            <tr class="table-primary">
              <th scope="row">2</th>

              <td>Sudipta</td>
            </tr>
            <tr class="table-secondary">
              <th scope="row">3</th>

              <td>Raz</td>
            </tr>
            <tr class="table-success">
              <th scope="row">4</th>

              <td>Dipak</td>
            </tr>
            <tr class="table-danger">
              <th scope="row">5</th>

              <td>Dipankar</td>
            </tr>
            <tr class="table-warning">
              <th scope="row">6</th>

              <td>Sahil</td>
            </tr>
            <tr class="table-info">
              <th scope="row">7</th>

              <td>Mrinal</td>
            </tr>
            <tr class="table-light">
              <th scope="row">8</th>

              <td>Koushik</td>
            </tr>
            <tr class="table-dark">
              <th scope="row">9</th>

              <td>Mrinal</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

  )
}
export default Home;