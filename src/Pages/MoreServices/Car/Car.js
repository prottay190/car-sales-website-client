import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Car.css'

const Car = ({car}) => {
    const {name, price, img, description} = car;
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
            </div>
        </div>
    );
};

export default Car;