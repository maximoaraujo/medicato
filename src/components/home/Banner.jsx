import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Img from '../../asset/vitau.jpg'

export default function Banner() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <img src = {Img} />
            </Grid>
        </Grid>
        </Box>
    );
}