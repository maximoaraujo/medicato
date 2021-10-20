import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function LeftMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemText>Cuidado de la salud</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Cuidado corporal</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Accesorios de belleza</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Dermatológicos</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Vitaminas</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Productos de higiene</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Suplementos</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Cremas</ListItemText>
          <Typography variant="body2" color="text.secondary">
          →
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}