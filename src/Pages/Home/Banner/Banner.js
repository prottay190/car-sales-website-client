import React from 'react';
import { Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from '.././../../images/banner/banner.jpg'

const Banner = () => {
    const bannerBg = {
        background: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '20px'
        
    
    }
    
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 400
    }
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                <Box >
                    <Typography variant="h3" sx={{color: '#D68912'}}>
                    DISCOVER and BUY the car that is right fo you
                    </Typography>
                    <Typography variant="h5" sx={{ my: 3, fontSize: 15, fontWeight: 500, color: '#D35400' }}>
                    FIND A CAR OF YOUR DREAM
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Container>
    );
};

export default Banner;

