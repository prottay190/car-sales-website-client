import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';


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
  const {user} =useAuth();
  const initialInfo = {name: user.displayName, email: user.email, address: '', phone: ''}
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = e =>{
     const field = e.target.name;
     const value = e.target.value;
     const newInfo = {...orderInfo};
     newInfo[field] = value;
     setOrderInfo(newInfo);
  }
  const handleBookingSubmit = e =>{
      const order = {
          ...orderInfo
      }

      fetch('https://evening-hollows-76829.herokuapp.com/orders', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data =>{
         if(data.insertedId){
            alert('order Added successfully')
         }
      })

    e.preventDefault();
  }

  //send to database
    return (
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" sx={{fontWeight: 600, color: '#DC7633', mb: 3,}} component="h2">
            Order Now
        </Typography>
        <form  onSubmit={handleBookingSubmit}>
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="name"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
            />
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
            />
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue="Phone Number"
                size="small"
            />
            <TextField
                sx={{width: '100%', m: 1,}}
                id="outlined-size-small"
                name="address"
                onBlur={handleOnBlur}
                defaultValue="Address"
                size="small"
            />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    </Box>
    );
};

export default Purchase;