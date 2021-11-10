import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import brands1 from '../../../images/brands/download_1_230x150.jpg'
import brands2 from '../../../images/brands/download_1_230x150.png'
import brands3 from '../../../images/brands/download_230x150.png'
import brands4 from '../../../images/brands/download_2_230x150.jpg'
import brands5 from '../../../images/brands/download_2_230x150.png'
import brands6 from '../../../images/brands/download_3_230x150.jpg'
import { Container, Typography } from '@mui/material';


const TopBrands = () => {
    return (
        
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Typography sx={{  marginBottom: '20px' }} variant="h3">
                    Top Brands We Provide
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img src={brands1} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={brands2} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={brands3} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={brands4} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={brands5} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={brands6} alt="" />
                    </Grid>
                </Grid>
            </Box>
        
    );
};

export default TopBrands;