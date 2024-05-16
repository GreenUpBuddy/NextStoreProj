import * as React from 'react';
import { List, ListItem, ListItemText, Paper, Stack, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';

export const Cart = () => {
    let total = 0;
    //HANDLE LIST HITTING END OF PAPER
    //END OF PAPER IS 9 items
    return(
        <>
            <Paper elevation={8} square={false} style={{position: 'absolute',width: '20vw', height: '54.5vw'}}>
                <Stack>
                    <List>
                    {[{name: "Item 1", price: 5.99, quantitiy: 1}, {name: "Item 2", price: 5.99, quantitiy: 1}].map((item, index) => (
                    <ListItem key={item.name}>
                        <Image style={{paddingRight: "10px"}} unoptimized src="https://placehold.co/60x60" width={60} height={60} alt="placeholder"/>
                        <ListItemText
                        primary={item.name + " @$" + item.price + " x " + item.quantitiy + " =  " + item.price * item.quantitiy +
                        `${total += item.price * item.quantitiy}`.replace(`${total}`,"")}
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