import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              Car sales House
            </Typography>
            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/home'> 
            <Button color="inherit">home</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/moreServices'> 
            <Button color="inherit">More-Products</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/dashboard'> 
            <Button color="inherit">Dashboard</Button>
            </NavLink>
            {
              user?.email ?
              <Button onClick={logOut} color="inherit">LogOut</Button>
              :
              <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/login"><Button color="inherit">Login</Button></NavLink> 
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;