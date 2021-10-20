import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline'

export default function InputSearch() {
  return (
    <div className = "sm:w-full">
      <Paper>
        <IconButton>
          <SearchIcon className="w-6 h-6" aria-hidden="true" />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 5 }} placeholder="Buscar..." inputProps={{ 'aria-label': 'buscador' }}/>
      </Paper>
    </div>
  );
}