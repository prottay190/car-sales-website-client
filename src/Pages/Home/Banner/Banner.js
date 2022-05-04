import React from 'react';
import { Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Banner = () => {
  
    const bannerBg = {
        background: `url(${'https://www.icegif.com/wp-content/uploads/car-icegif-6.gif'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '20px',
        width: '100%'
    }
    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 400
    }
    return (
    <section style={bannerBg}>
            <Container  sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={6} md={6}>
                    <Box >
                        <Typography variant="h3" sx={{ color: '#fff' }}>
                            DISCOVER and BUY the car that is right fo you
                        </Typography>
                        <Typography variant="h5" sx={{ my: 3, fontSize: 15, fontWeight: 500, color: '#fff' }}>
                            FIND A CAR OF YOUR DREAM
                        </Typography>
                    </Box>
                </Grid>
                <Grid item style={{ ...verticalCenter, marginTop: '20px' }} xs={6} md={6}>
                    <Box >
                        <img width='100%' src="" alt="" />
                    </Box>
                </Grid>

            </Grid>

        </Container>
    </section>
    );
};

export default Banner;

