import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Purchase = () => {
  
    return (
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" sx={{fontWeight: 600, color: '#DC7633', mb: 3,}} component="h2">
            Order Now
        </Typography>
        <form  action="">
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="patientName"
                defaultValue="name"
                size="small"
            />
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="email"
                
                defaultValue="email"
                size="small"
            />
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="phone"
               
                defaultValue="Phone Number"
                size="small"
            />
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="address"
               
                defaultValue="Address"
                size="small"
            />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    </Box>
    );
};

export default Purchase;