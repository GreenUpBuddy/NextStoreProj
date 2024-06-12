"use client"

import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataCard } from '@/components/grid/card'
import { Cart } from './cart';
import { ButtonGroup, FormGroup, FormControlLabel, IconButton, MenuItem, Select, InputLabel, FormControl, Autocomplete, TextField, Chip, Checkbox , Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from "/src/app/page.module.css";
import { CheckBox } from '@mui/icons-material';

const items = [["ITEM 1","details 1","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 2","details 2","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 3","details 3","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 4","details 4","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 5","details 5","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 6","details 6","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 7","details 7","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 8","details 8","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 9","details 9","1 for 1.99","5 for 4.99","https://placehold.co/140"],
               ["ITEM 10","details 10","1 for 1.99","5 for 4.99","https://placehold.co/140"]];


//Once DB is connected and all values are properly being communicated to UI
//hit gpt api to generate product details when creating a new item (editable)

function Item (title,details,price1,price2,image) {
  return (
    <DataCard 
    name= {title}
    details= {details}
    width={500}
    price= {<><Chip label={price1} size='small'/> <Chip label={price2} color='primary' size='small'/></>}
    image= {image}
    />
  )
}

function FormRow(list, index) {
  let ob1;
  let ob2;
  let ob3;
  if(index > list.length){return;}
  if(list[0 + index] != undefined){
    ob1 = list[0 + index];
  }else{
    ob1 = "ITEM OB","details OB","1 for 1.99","5 for 4.99","https://placehold.co/140";
  }
  if(list[1 + index] != undefined){
    ob2 = list[1 + index];
  }else{
    ob2 = "ITEM OB","details OB","1 for 1.99","5 for 4.99","https://placehold.co/140";
  }
  if(list[2 + index] != undefined){
    ob3 = list[2 + index];
  }else{
    ob3 = "ITEM OB","details OB","1 for 1.99","5 for 4.99","https://placehold.co/140";
  }
  return (
    <>
      <Grid item xs={3}>
        {Item(ob1[0],ob1[1],ob1[2],ob1[3],ob1[4])}
      </Grid>
      <Grid item xs={3}>
        {Item(ob2[0],ob2[1],ob2[2],ob2[3],ob2[4])}
      </Grid>
      <Grid item xs={3}>
        {Item(ob3[0],ob3[1],ob3[2],ob3[3],ob3[4])}
      </Grid>
    </>
  );
}

function makeRow(items,index){
  if(index < items.length){
    return FormRow(items,index);
  }
}

//set indexPlace to += 9 when hitting right arrow
//currIn <- indexPlace


//potentially split actual grid from rest of page
//pass list to grid and keep state for index with rest of page
//this allows us to only send 9 items at a time to the grid
//rerender is triggered by useEffect with a flag variable ie. ,[flag]

export const ResponsiveGrid = () => {
  const [preset, setPreset] = React.useState('');
  const [search, setSearch] = React.useState(null);
  const [indexPlace,setIndexPlace] = React.useState(0);
  const router = useRouter();
  let currIn = indexPlace;
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
          <span style={{paddingLeft: "4vw"}}>
            <ButtonGroup style={{justifycontent: "center"}}>
              <IconButton aria-label="backwards" color="primary" edge= "end" onClick={useEffect(() => {console.log("back")}, [])}>
                <ArrowBackIcon/>
              </IconButton>
              <IconButton aria-label="forwards" color="primary" edge= "end" onClick={useEffect(() => {console.log("forward");}, [])}>
                <ArrowForwardIcon/>
              </IconButton>
            </ButtonGroup>
          </span>
          <span style={{paddingLeft: "25px", paddingTop: "5px"}}>
            <Autocomplete
              id="search bar"
              value={search}
              forcePopupIcon={false}
              style={{width: "140px",marginRight: "20px"}}
              disableClearable
              options={items.map((x) => x[0])}
              onChange={(event, newValue) => {
                handleOptionSelect(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  style={{justifycontent: "center"}}
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
          <span>
          <FormGroup>
            <FormControlLabel style={{paddingLeft: "25px"}} control={<Checkbox />} label= <Typography color={"black"}>Option 1</Typography>/>
            <FormControlLabel style={{paddingLeft: "25px"}} control={<Checkbox />} label= <Typography color={"black"}>Option 2</Typography>/>
            <FormControlLabel style={{paddingLeft: "25px"}} control={<Checkbox />} label= <Typography color={"black"}>Option 3</Typography> />
          </FormGroup>
          </span>
        </Stack>
      </div>
      <div style={{position: 'absolute', left: '13%', top: '10%', paddingBottom: '25px'}}>
          <Grid container spacing={0}>
            <Grid container item spacing={2}>
              {makeRow(items,0)}
            </Grid>
            {currIn = currIn + 3}
            <Grid container item spacing={2}>
              {makeRow(items,currIn)}
            </Grid>
            {currIn = currIn + 3}
            <Grid container item spacing={2}>
              {makeRow(items,currIn)}
            </Grid>
          </Grid>
      </div>
      <div style={{position: 'absolute', left: '79%', top: '12%', bottom: '20%'}}>
        <Cart list={[{name: "item1",quantity: 1, price: 4.99},{name: "item2",quantity: 2, price: 2.00}]}/>
      </div>
    </>
  );
}