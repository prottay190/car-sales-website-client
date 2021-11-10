import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const{name, img, description, price} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '220px', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent sx={{textAlign: 'left', marginLeft: '20px'}}>
                <Typography variant="h5" component="div">
                   Name: {name}
                </Typography>
                <Typography variant="h6" component="div">
                   Price: ${price}
                </Typography>
                <Typography sx={{fontSize: '15px'}} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <NavLink style={{ textDecoration: 'none' }} to='/purchase'>
                <Button sx={{marginTop: '10px'}} variant="contained">Order Now</Button> 
                </NavLink>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default Service;