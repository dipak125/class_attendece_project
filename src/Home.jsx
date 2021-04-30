import React, { useEffect, useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
import Nav from "./Nav";



const Home = () => {

 
  
   
 
  const [selectedDate, setSelectedDate] = useState(new Date())
  const[state,setState]=useState({
    data:[],
    s:[],
    p:[]
  })
 //const date1=selectedDate.toLocaleDateString();
 
 

 useEffect(()=>{
      axios.get("http://localhost:4000/students").then(res=>{
        setState({
          ...state,
          data:res.data
        })
        
           
 })
},[])



 const change=(date1)=>{
  let p=new Array(0);
  console.log(date1)
  
   
    console.log("p is",p)
    setState({
      ...state,
      s:[]
    })
    for(let i=0;i<state.data.length;i++)
    {
     if(typeof state.data[i].date==='undefined')
     {}
     else
     {
       let f=state.data[i].date.find(v=>v==date1)
     let d4=state.data[i]
     if(typeof f==='undefined')
     {
     
          p.push(state.data[i])
        
      
     
     
     }
   
  
     
      
    }
       
   
  }
 setState({
   ...state,
   s:p
 })
      

     }
   
  
 
  
 


  const d = new Date();
  const day = d.getDate();
  const m = 1 + d.getMonth();
  const y = d.getFullYear();
  return (
<>
<Nav/>
    <div>
      <div class="left">
        <div>
          <div class="top">
            <u><h1>About course:</h1></u>
           <h3>
           <ul>
                <li>React</li>
                <li>Node </li>
                <li>Mongo Db</li>
                
              </ul>  
           </h3>
          </div>
          <div class="bottom">
            <u><h1>Today's topic:</h1></u>
            <h4>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug..</h4>

          </div>
        </div>
      </div>
      <div class="right">
        <u><h3><center>Absent Student's List</center></h3></u>
        <h3><center>Present Date : {day}-0{m}-{y}</center></h3>
        <div><center>
          <DatePicker

            placeholder="Choose date"
            selected={selectedDate}
            onChange={date =>{
              setSelectedDate(date);
              change(date.toLocaleDateString())
             
            }}
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
          {
     
        state?.s?.map(data=>
          <tr>
          <th scope="row">{data?.roll}</th>

          <td>{data?.name}</td>
        </tr>
          
         
               
         )}
           

            
          </tbody>
        </table>

      </div>
    </div>
    </>

  )
}

export default Home