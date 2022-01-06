import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import Box from '@mui/material/Box';
import './Login.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loading, authError, loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <>
        <Navigation></Navigation>
        <Container>
            <Box className='login-from'>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onBlur={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" /> <br />

                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink><br />
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                </form>
                {loading && <CircularProgress />}
                {user?.email && <Alert severity="success">LogIn success</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Box>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Login;


