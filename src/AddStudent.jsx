import React,{useState} from "react";
import  "./Feedback.css";

const AddStudent=(props)=>{
    const{student,Addstudent,values}=props;
    console.log(student);
    const[state,setState]=useState({
            s:{
                roll:student.roll,
                name:student.name,

            }
    });
    const change=(e)=>{
        const{name,value}=e.target;
        setState({
            ...state,
            s:{
                ...state.s,
                [name]: value
            }
        })
    }
    const submit=()=>{
        Addstudent(state.s);
    }

    return(
        <div class="form-group">
            
            <form class="cont1">
            <h3>{values}</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Roll no</label>
    <input type="text" class="form-control" name="roll" value={state.s.roll} onChange={change}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" value={state.s.name} onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="text" class="form-control" name="name" value={state.s.name} onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Course</label>
    <input type="text" class="form-control" name="name" value={state.s.name} onChange={change}/>
  </div>
 
  <button type="button" class="btn btn-success" onClick={submit}>Submit</button>
</form>
        </div>
    )
}
export default AddStudent;