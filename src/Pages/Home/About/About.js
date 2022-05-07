import { Container, Grid } from '@mui/material';
import React from 'react';
import './About.css';


const About = () => {
    
    return (
        <Container sx={{ padding: 4 }}>  
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                   <img className='responsive' src="https://raw.githubusercontent.com/prottay190/Image-uploaded/main/98072-travel-car-city.gif?token=GHSAT0AAAAAABSWFOU6RXN65FNWXN6EZ7G2YTTXGOA" alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='about-content'>
                        <h4>About Us</h4>
                        <h1>Feel the best experience <br /> with our Car House</h1>
                        <p> A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;

