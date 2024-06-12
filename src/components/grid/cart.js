import * as React from 'react';
import { List, ListItem, ListItemText, Paper, Stack, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';

export const Cart = (props) => {
    let total = 0;
    //END OF PAPER IS 9 items
    return(
        <>
            <Paper elevation={8} square={false} style={{position: 'absolute',width: '20vw', height: '56vw',overflow: "auto"}}>
                <Stack>
                    <List>
                    {props.list.map((item, index) => (
                    <ListItem key={item.name}>
                        <Image style={{paddingRight: "10px"}} unoptimized src="https://placehold.co/60x60" width={60} height={60} alt="placeholder"/>
                        <ListItemText
                        primary={item.name + " @$" + item.price + " x " + item.quantity + " =  " + item.price * item.quantity +
                        `${total += item.price * item.quantity}`.replace(`${total}`,"")}
                         />
                    </ListItem>
                    ))}
                    </List>
                </Stack>
                <Stack style={{textAlign:  "center", justifyContent: "center"}}>
                    <Typography>Total: {total}</Typography>
                    <Button variant="contained" endIcon={<ShoppingCartIcon/>}>
                        Submit
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};