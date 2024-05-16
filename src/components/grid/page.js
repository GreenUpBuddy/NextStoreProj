"use client"

import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataCard } from '@/components/grid/card'
import { Cart } from './cart';
import { ButtonGroup, FormGroup, FormControlLabel, IconButton, MenuItem, Select, InputLabel, FormControl, Autocomplete, TextField, Chip, Checkbox , Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from "/src/app/page.module.css";
import { CheckBox } from '@mui/icons-material';


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
  const [search, setSearch] = React.useState(null);
  const router = useRouter();
 
  const handleChange = (event) => {
    setPreset(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSearch(option);
    router.push(`/about/${option.replace(" ", "!space!")}`);
  };

  return (
    <>
      <div style={{position: 'absolute', left: '0%', top: '10%', paddingBottom: '25px'}}>
      <Stack>
          <ButtonGroup style={{justifyContent: "center"}}>
            <IconButton aria-label="backwards" color="primary" edge= "end">
              <ArrowBackIcon/>
            </IconButton>
            <IconButton aria-label="forwards" color="primary" edge= "end">
              <ArrowForwardIcon/>
            </IconButton>
          </ButtonGroup>
          <span style={{paddingLeft: "25px", paddingTop: "5px"}}>
            <Autocomplete
              id="search bar"
              value={search}
              forcePopupIcon={false}
              style={{width: "140px",marginRight: "20px"}}
              disableClearable
              options={["Opt 1","Opt 2", "Opt 3", "aye"]}
              onChange={(event, newValue) => {
                handleOptionSelect(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  style={{justifyContent: "center"}}
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </span>
          <span>
            <FormControl style={{paddingLeft: "25px",paddingTop: " 10px"}}>
              <InputLabel style={{paddingLeft: "25px",paddingTop: " 10px"}} size='normal'>Filter Presets</InputLabel>
              <Select
                value={preset}
                style={{width: "140px"}}
                label="Filter Presets"
                onChange={handleChange}
              >
                <MenuItem value={"Preset 1"}>Preset 1</MenuItem>
                <MenuItem value={"Preset 2"}>Preset 2</MenuItem>
                <MenuItem value={"Preset 3"}>Preset 3</MenuItem>
              </Select>
            </FormControl>
          </span>
          <spaan>
         <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
          </spaan>
        </Stack>
      </div>
      <div style={{position: 'absolute', left: '13%', top: '10%', paddingBottom: '25px'}}>
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
      <div style={{position: 'absolute', left: '78.25%', top: '12%', bottom: '20%'}}>
        <Cart/>
      </div>
    </>
  );
}