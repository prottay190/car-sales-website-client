import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Car.css'

const Car = ({car}) => {
    const {name, price, img, description } = car;
    const { user} = useAuth();
     //delete 
     const handleDeleteUser = id =>{
        const url = ` https://floating-oasis-48049.herokuapp.com/cars/${id}`
          fetch (url, {
              method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => { })
    }
    return (
        <div className="car-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="car-text">
                 <h2>Name: {name}</h2>
                 <h4>Price: {price}</h4>
                 <p>{description}</p>
                <NavLink style={{ textDecoration: 'none' }} to='/purchase'>
                <Button sx={{marginTop: '10px'}} variant="contained">Order Now</Button> 
                </NavLink>
                <Button onClick={() => handleDeleteUser(user._id)} sx={{marginTop: '10px', marginLeft: '12px'}} variant="contained">Delete</Button>             
            </div>
        </div>
    );
};

export default Car;