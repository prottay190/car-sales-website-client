import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://evening-hollows-76829.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
        <Container>
            <Typography sx={{ fontWeight: 500, m: 2, color: '#88D427' }} variant="h6" component="div">
                OUR TOP PRODUCTS
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{marginTop: '20px'}}>
                {
                    services.map(service =><Service
                      key={service.name}
                      service={service}
                    ></Service>)
                }
                
            </Grid>
        </Container>
    </Box>
    );
};

export default Services;