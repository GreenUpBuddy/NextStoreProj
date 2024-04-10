import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataCard } from '@/components/grid/card'

const Item = () => {
  return (
    <DataCard 
    name= "TempItem" 
    details= "this is a temporary placeholder for details" 
    price= "1 for $1.99 OR 5 for $4.99"
    image= "https://placehold.co/140"
    />
  )
}

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs="auto">
        <Item>Item</Item>
      </Grid>
      <Grid item xs="auto">
        <Item>Item</Item>
      </Grid>
      <Grid item xs="auto">
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export const ResponsiveGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }} alignItems= "center">
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}