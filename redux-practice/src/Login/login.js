import React from "react";
import { userlogin } from "../Store/loginslice.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from '@mui/material/Button';

const Login = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const usersList = useSelector(({login})=>login.userlist)
  console.log(usersList)
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")

const getdetails =(e)=>{
if(e.target.name == "user") setusername(e.target.value)
if(e.target.name == "password") setpassword(e.target.value)
}

  const loginCheck = () => {
    let found = usersList.find((a)=>a.user == username && a.password == password)
    if(found){
      dispatch(userlogin(true));
      navi("/home");
    }
  };

  return (
    <div >
      <div style={{width : "500px",margin:"75px auto",textAlign:"center",padding:"30px",border:"1px solid gray",borderRadius:"1000000px",backgroundColor:"#0080753d"}}>
        <h2 style={{color:"purple"}}>LOGIN PAGE</h2>
      <div><label style={{width:"150px",display:"inline-block"}}> Enter username :</label> <input value = {username} name ="user" onChange = {getdetails} type="text"></input> </div>
      <p><label style={{width:"150px",display:"inline-block"}}>
        Enter password :
      </label>
      <input  value = {password} name ="password" onChange = {getdetails} type="password"></input>
      </p>
      <Button variant ="text" color="secondary" size = "small" style={{fontWeight:"800"}} onClick={loginCheck}>ok</Button>
      </div>
    </div>
  );
};

export default Login;
