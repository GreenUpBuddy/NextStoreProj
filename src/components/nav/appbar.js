import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { MuiDrawer } from './page';
import { Toolbar } from '@mui/material';


export const MyAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
            <Toolbar>
                <MuiDrawer/>
            </Toolbar>
        </AppBar>
    </Box>
  );
}