import React from 'react';
import InputSearch from './InputSearch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Search() {
    return (
        <Box sx={{ flexGrow: 1 }} className = "mt-3">
        <Grid container spacing={3}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className = "mt-20">
               <InputSearch />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
        </Box>
    );
}