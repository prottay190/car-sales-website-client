import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FaElementor, FaPhoneSquareAlt, FaMobile, FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#17202A', color: '#fff', padding: '30px', marginTop: '30px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
                    <Typography variant="h5">
                        Car Seles House
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, }}>
                        Find new cars for Buy at Autotrader. Easily Found! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover.
                    </Typography>

                    <Typography variant="h6">
                        <h6>Get Social</h6>
                        <small><FaFacebook style={{ fontSize: '25px' }} /></small>
                        <small><FaInstagramSquare style={{ fontSize: '25px', marginLeft: '15px' }} /></small>
                        <small><FaTwitterSquare style={{ fontSize: '25px', marginLeft: '15px' }} /></small>
                        <small> <FaLinkedin style={{ fontSize: '25px', marginLeft: '15px' }} /></small>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5">
                        Latest Update
                    </Typography>
                    <Typography variant="body1">
                        <div>
                            <h6><FaElementor /> Together We Can Do So Much</h6>
                            <p>11 November 2021</p>
                        </div>
                        <div>
                            <h6><FaElementor /> Our Team Member</h6>
                            <p>12 November</p>
                        </div>
                        <div>
                            <h6><FaElementor />Our Services </h6>
                            <p>13 November</p>
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
                    <Typography variant="h5">
                        Contact
                    </Typography>
                    <Typography variant="body1">
                        <p>Our HotLIne: traveling.world@gmail.com</p>
                        <p><FaPhoneSquareAlt /> Our TelePhone: 09845111782</p>
                        <p>Our Email: aarnob2020@gmail.com</p>
                        <p><FaMobile /> Our Mobile: 01711111110</p>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                    © Copyright 2021 - All Rights Reserved By Prottay Roy Arnob
                </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;