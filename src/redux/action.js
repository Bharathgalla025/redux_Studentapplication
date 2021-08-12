import axios from 'axios';
import * as types from './actiontype';

const getStudents=(students)=>({
    type:types.GET_STUDENTS,
    payload:students
})

const addStudent=()=>({
    type:types.ADD_STUDENT
})


const editStudent=(user)=>({
    type:types.EDIT_STUDENT,
    payload:user
})

const updateStudent=()=>({
    type:types.UPDATE_STUDENT
})

const deleteStudent=()=>({
    type:types.DELETE_STUDENT
})

export const allStudents=()=>{
    return function(dispatch){
        axios.get('http://localhost:5000/student').then((res)=>{
            console.log('All students data....',res.data);
            dispatch(getStudents(res.data));
        }).catch((error)=>console.log(error))
    }
}


export const studentAdded=(user)=>{
    return function(dispatch){
        axios.post('http://localhost:5000/student/',user).then((res)=>{
            console.log('Added Student....',res.data);
           dispatch(addStudent(res.data));
           dispatch(allStudents());
        }).catch((error)=>console.log(error))
    }
}


export const studentEdit=(id)=>{
    return function(dispatch){
        axios.get('http://localhost:5000/student/'+id).then((res)=>{
            console.log('Added Student....',res.data);
           dispatch(editStudent(res.data));
          
        }).catch((error)=>console.log(error))
    }
}


export const studentUpdate=(user,id)=>{
    return function(dispatch){
        axios.put('http://localhost:5000/student/'+id,user).then((res)=>{
            console.log('Added Student....',res.data);
           dispatch(updateStudent(res.data));
           dispatch(allStudents());
        }).catch((error)=>console.log(error))
    }
}



export const studentDelete=(id)=>{
    return function(dispatch){
        axios.delete('http://localhost:5000/student/'+id).then((res)=>{
            console.log('Delete Student....',res.data);
           dispatch(deleteStudent(res.data));
           dispatch(allStudents());
        }).catch((error)=>console.log(error))
    }
}
