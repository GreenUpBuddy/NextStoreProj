"use client"

import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataCard } from '@/components/grid/card'
import { ButtonGroup, Toolbar, IconButton, MenuItem, Select, InputLabel, FormControl, Autocomplete, TextField, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from "/src/app/page.module.css";
import { Link } from 'react-router-dom';


//Omce DB is connected and all values are properly being communicated to UI
//hit gpt api to generate product details when creating a new item (editable)

const Item = () => {
  return (
    <DataCard 
    name= "TempItem" 
    width={345}
    details= "this is a temporary placeholder for details" 
    price= {<><Chip label="1 for 1.99" size='small'/> <Chip label="5 for 4.99" color='primary' size='small'/></>}
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
  const [search, setSearch] = React.useState('');
 
  const handleChange = (event) => {
    setPreset(event.target.value);
  };
  const handleChangeSearch = (event) => {
    console.log("lol")
    setSearch(event.target.value);
  };
  useEffect(() => {
    console.log(search)
  },[search])
  return (
    <>
      <div style={{position: 'absolute', left: '250px', top: '10%', bottom: '20%'}}>
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
            <InputLabel size='normal' style={{marginRight: "20px", marginLeft: "20px"}}>Filter Presets</InputLabel>
            <Select
              value={preset}
              style={{width: "140px",marginLeft: "20px",marginRight: "20px"}}
              label="Filter Presets"
              onChange={handleChange}
            >
              <MenuItem value={"Preset 1"}>Preset 1</MenuItem>
              <MenuItem value={"Preset 2"}>Preset 2</MenuItem>
              <MenuItem value={"Preset 3"}>Preset 3</MenuItem>
            </Select>
          </FormControl>
          <Autocomplete
            id="search bar"
            forcePopupIcon={false}
            style={{width: "140px",marginRight: "20px"}}
            onChange={handleChangeSearch}
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
      </div>
    </>
  );
}