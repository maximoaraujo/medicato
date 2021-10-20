import React from 'react';
import LeftMenu from '../components/home/LeftMenu';
import CarouselPopulars from '../components/home/CarouselPopulars';
import CarouselRandom from '../components/home/CarouselRandom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const margin = {
    margin: '50px'
};

export default function Banner() {
    return (
        <Box sx={{ flexGrow: 1 }} style = {margin}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <LeftMenu />
            </Grid>
            <Grid item xs={8}>
               <CarouselPopulars />
               <Divider style = {margin} />
               <CarouselRandom />
            </Grid>
        </Grid>
        </Box>
    );
}