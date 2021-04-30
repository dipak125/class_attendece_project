
import React, { useState } from "react";
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";
import Students from "./Students";
import Student from "./Student";
import Home from "./Home";
import Attendence from "./Attendence";
import Present from "./Present";
import AddStudent from "./AddStudent";
import Delete from "./Delete";
import Teacher from "./Teacher";
import Foot from "./Foot";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Feedback from "./Feedback.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import AddStu from "./AddStu";
import "./homef.css"


const App=()=>{

  const[state,setState]=useState({
      s:{
        roll:"",
        name:"",
        courses:"",
        email:"",

      }
  })
 const presentStudent=(roll)=>{
      const student=state.students.find(s=>s.roll==roll);
     
      setState({
        ...state,
        present:[
         ...state.present,
          student,
        ]
      })
     
  }
  const Addstudent=(student)=>{

   

      const s=state.students.filter(s=>s.roll!=student.roll);
      setState({
        ...state,
        students:[
          ...s,
          student
        ]
      })
  }
  const del=(roll)=>{
    const s=state.students.filter(student=>student.roll!=roll);
    setState({
      ...state,
      students:[
        ...s,
      ]
      
    })
  }


  return(
    <>
     <BrowserRouter>
    
    <div className="base"> 
     <Route exact path="/" component={()=><Login/>}/> 
       <Route exact path="/register" component={()=> <Register/>}/>
       </div>
       <Route  exact path="/home" component={()=> <Home students={state.students} present={state.present}/>}/>
       <Route exact  path="/students" component={()=><Students students={state.students}/>}/>
        <Route exact path="/student/:id" component={(props)=> <Student id={props.match.params.id}/>}/>
       <Route exact path="/attend" component={()=><Attendence students={state.students}/>}/>
       <Route exact path="/present/:id" component={(props)=> <Present  presentStudent={ presentStudent} student={state.students.find(s=>s.roll==props.match.params.id)}/>}/>
       <Route exact path="/add" component={()=><AddStu/>}/>
       
      
       <Route exact path="/edit/:id" component={(props)=> <AddStudent values={"Edit details"} Addstudent={Addstudent} id={props.match.params.id}/>}/>
       <Route exact path="/delete/:id" component={(props)=> <Delete del={del} id={props.match.params.id}/>}/>
       <Route exact path="/teacher" component={()=> <Teacher/>}/>
       <Route exact path="/about" component={()=> <About/>}/>
       <Route exact path="/contact" component={()=><Contact/>}/>
       <Route exact path="/feed" component={()=> <Feedback/>}/>
      
      
       <Foot/>
      
     </BrowserRouter>
    
    </>
  )
}
export default App;