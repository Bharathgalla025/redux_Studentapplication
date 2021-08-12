import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allStudents, studentDelete } from '../redux/action';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Home.css';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    table: {
        border: '1px solid gray',
        minWidth: 650,
    },
});

const Home = () => {
    const classes = useStyles();
    let history=useHistory();
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    console.log('All students details', users);
    useEffect(() => {
        dispatch(allStudents());
    }, [])

    const handleDelete=(id)=>{
    if(window.confirm('Are you sure you want to delete this record student Student Id :' + id)){
        dispatch(studentDelete(id));

    }
    }
let studentCount=users && users.length;
    return (
        <div className='backgroundstyles'>
<h2 style={{float:'left'}}>Total Students : {studentCount}</h2>
<br/><br/>
<Button variant="contained" color="primary" style={{margin:'20px'}} onClick={()=>history.push('/addstudent')}>
        ADD NEW STUDENT
      </Button>

            <h3 className='align-center'>Students Information</h3>
            <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="simple table">

                    <TableHead>

                        <TableRow style={{ color: 'black', fontWeight: 'bold' }}>
                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bold' }}>NAME</TableCell>
                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bold' }}>ADDRESS</TableCell>
                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bold' }}>DATE OF BIRTH</TableCell>
                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bold' }}>JOINING DATE</TableCell>
                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bold' }}>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((user) => (
                            <TableRow key={user.id}>

                                <TableCell align="center">{user.name}</TableCell>
                                <TableCell align="center">{user.address}</TableCell>
                                <TableCell align="center">{user.dob}</TableCell>
                                <TableCell align="center">{user.joiningdate}</TableCell>
                                <TableCell align="center"><button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button></TableCell>
                                <TableCell align="center"><button className='btn btn-success' onClick={()=>history.push('/editstudent/' + user.id)}>Edit</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home
