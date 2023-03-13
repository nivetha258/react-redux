import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtask } from "../Store/productslice";
import { useState } from "react";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const NewTask = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState(false);
  const [isComplete, setisComplete] = useState(false);
  const [flag ,setflag] = useState(false)

  const dispatch = useDispatch();

  const getinput = (e) => {
    setflag(false)
    if (e.target.name == "name") setname(e.target.value);
    if (e.target.name == "description") setdescription(e.target.value);
    if (e.target.name == "priority") setpriority(e.target.checked);
    if (e.target.name == "completed") setisComplete(e.target.checked);
  };

  const newTask = () => {
    if(name == "" || description == "" ) {
      setflag(true) ;
      console.log("if")
      return
    }
    else{
      console.log("else")
      dispatch(addtask({
        name: name,
        description: description,
        priority: priority,
        isComplete: isComplete,
      }));
    setname("");
    setdescription("");
  }}
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgb(17 33 116 / 35%)",
        }}
      >
        <h1> New Task</h1>{" "}
        <Link
          style={{ display: "block", textDecoration: "none", color: "blue" }}
          to="/home"
        >
          {" "}
          Go Home
        </Link>
      </div>
      <div style={{width :"400px",margin :"30px auto",boxShadow :"0 0 1px 1px gray",padding :"50px"}}>
        <h2 style={{color:"purple",textAlign : "center"}}>Enter new task</h2>
      {flag && <p style={{color : "red"}}>Fill in all the details</p>}
      <label style={{width:"150px",display:"inline-block"}}>
        Task name  </label>
        <input
          value={name}
          type={"Text"}
          name={"name"}
          onChange={getinput}
        ></input>
      
      <br></br>
      <br></br>
      <label style={{width:"150px",display:"inline-block"}}>
         Description   </label>
        <input
          value={description}
          type={"Text"}
          name={"description"}
          onChange={getinput}
        ></input>
     
      <br></br>
      <br></br>
      <label style={{width:"150px",display:"inline-block"}}>
        Priority
        </label>
        <input
          value={priority}
          type={"checkbox"}
          name={"priority"}
          onChange={getinput}
          defaultChecked={priority}
        ></input>
      
      <br></br>
      <br></br>
      <label style={{width:"150px",display:"inline-block"}}>
        Completed
        </label>
        <input
          value={isComplete}
          type={"checkbox"}
          name={"completed"}
          onChange={getinput}
          defaultChecked={isComplete}
        ></input>
      
      <br></br>
        <div style={{textAlign :"center"}}>
      <Button onClick={newTask} variant="contained" color="success" endIcon={<SendIcon />}>ADD</Button>
      </div>
      </div>
    </div>
  );
};

export default NewTask;
