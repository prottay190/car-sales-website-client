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
import { FaCarSide } from "react-icons/fa";


const Navigation = () => {
  const {user, logOut} = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <FaCarSide style={{color: '#C0392B', fontSize: '32px', marginRight: '10px'}} />
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