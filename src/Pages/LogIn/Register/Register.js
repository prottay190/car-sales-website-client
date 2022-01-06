import React, { useState } from 'react';
import { Container, TextField, Button, CircularProgress, Alert } from '@mui/material';
import Box from '@mui/material/Box';
import './Register.css'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
        const {user, registerUser, loading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
  
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <>
        <Navigation></Navigation>
        <Container> 
        <Box className='regi-form'>
           { !loading && <form onSubmit={handleLoginSubmit}>
            <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="text">Already Registered? Please Login</Button>
                </NavLink>
                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                {loading && <CircularProgress />}
            </form>} 
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}  
            {authError && <Alert severity="error">{authError}</Alert>}    
        </Box>
    </Container>
    <Footer></Footer>
   </>
    );
};

export default Register;