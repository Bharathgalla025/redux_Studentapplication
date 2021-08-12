import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Home.css';
import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { studentAdded } from '../redux/action';
const Addstudent=()=> {
  let dispatch=useDispatch();
  let history=useHistory();
  const [state,setState]=useState({
    name:'',
    address:'',
    dob:'',
    joiningdate:''
  }) 
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setState({
      ...state,[name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(studentAdded(state));
    history.push('/');
  }
  const {name,address,dob,joiningdate}=state;
  return (
      <div className='addstudentstyles'>
         <button className='btn btn-danger' onClick={()=>history.push('/')}>GO BACK</button><br/><br/><br/>
      <label style={{alignItems:'center',fontWeight:'bold',paddingBottom:'20px'}}>ADD NEW STUDENT</label>
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" value={name} name='name' onChange={handleChange}/><br/>
      <TextField id="standard-basic" label="Address"  value={address} name='address' onChange={handleChange}/><br/>
      <TextField id="standard-basic" label="Date Of Birth" value={dob} name='dob' onChange={handleChange}/><br/>
      <TextField id="standard-basic" label="joiningdate" value={joiningdate} name='joiningdate' onChange={handleChange}/><br/><br/><br/>
      <button className='btn btn-success'>
        SUBMIT
      </button>
    </form>
    </div>
  );
}

export default Addstudent
