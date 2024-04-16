"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataCard } from '@/components/grid/card'
import { ButtonGroup, Toolbar, IconButton, MenuItem, Select, InputLabel, FormControl, Autocomplete, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from "/src/app/page.module.css";


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
    <>
      <Grid item xs="auto">
        <Item>Item</Item>
      </Grid>
      <Grid item xs="auto">
        <Item>Item</Item>
      </Grid>
      <Grid item xs="auto">
        <Item>Item</Item>
      </Grid>
    </>
  );
}

export const ResponsiveGrid = () => {
  const [preset, setPreset] = React.useState('');

  const handleChange = (event) => {
    setPreset(event.target.value);
  };
  return (
    <>
      <Toolbar>
        <ButtonGroup>
          <IconButton aria-label="backwards" color="primary" edge= "end">
            <ArrowBackIcon/>
          </IconButton>
          <IconButton aria-label="forwards" color="primary" edge= "end">
            <ArrowForwardIcon/>
          </IconButton>
        </ButtonGroup>
        <FormControl>
          <InputLabel>Filter Presets</InputLabel>
          <Select
            value={preset}
            label="Filter Presets"
            onChange={handleChange}
            defaultValue="Filter Presets"
          >
            <MenuItem value={"Preset 1"}>Preset 1</MenuItem>
            <MenuItem value={"Preset 2"}>Preset 2</MenuItem>
            <MenuItem value={"Preset 3"}>Preset 3</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          id="search bar"
          disableClearable
          options={["Opt 1","Opt 2", "Opt 3", "aye"]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Toolbar>
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
    </>
  );
}