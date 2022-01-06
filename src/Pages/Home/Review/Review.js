import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';


const Review = () => {
    const [details, setDetails] = useState('');
    const handleOnBlur = e =>{
        setDetails(e.target.value)
    }
    const handleOnSubmit =e => {

        e.preventDefault()
    }
    return (
    <>
        <div style={{background: '#B3B6B7', padding: '20px', marginTop: '30px'}}>
            <h2 style={{color: '#239B56 '}}>Review A Product</h2>
            <form onSubmit={handleOnSubmit}>
                <TextField 
                   sx={{ width: '60%', marginTop: '30px' }}
                    label="Add a Review"
                    onBlur={handleOnBlur}
                    multiline
                    rows={4}
                /> <br />
                <Button sx={{marginTop: '15px'}} variant="outlined">Riview Add</Button>
            </form>
        </div>
    </>
    );
};

export default Review;