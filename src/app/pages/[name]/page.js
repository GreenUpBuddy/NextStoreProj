import { MyAppBar } from "@/components/nav/appbar";
import { Paper, Stack, Typography, Chip, Fab, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
    const details = "This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section."
    return (
        <>
            <MyAppBar/>
            <main>
                <Stack alignItems="center">
                    <Paper elevation={8} square={false} style={{position: 'absolute', top: "15%",width: '60vw'}}>
                        <IconButton style={{marginLeft: 15,marginTop:15}} aria-label="delete" color="primary" size="large" component={Link} href={`/about`}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Stack style={{paddingTop:20}} alignItems="center">
                            <Image unoptimized src="https://placehold.co/350x350" width={350} height={350} alt="placeholder"/>
                            <Typography style={{paddingTop:10}} gutterBottom variant="h5" component="div">
                                {params.name.replace("!space!", " ")}
                            </Typography>
                            <span>
                                <Chip style={{marginRight:10}} label="1 for 1.99" size='medium'/> 
                                <Chip label="5 for 4.99" color='primary' size='medium'/>
                            </span>
                            <Typography gutterBottom align="center" style={{ paddingTop: 10,marginLeft:60,marginRight:60}} variant="body1" component="span">
                                {details}
                            </Typography>
                            <span  style={{marginBottom: 20}}>
                            <Fab style={{marginRight:10}} variant="extended" size="medium" color="primary">
                                <ShoppingCartIcon/>
                                Add to Cart
                            </Fab>
                            <Fab variant="extended" size="medium">
                                <ListIcon/>
                                Add to List
                            </Fab>
                            </span>
                        </Stack>
                    </Paper>
                </Stack>
            </main>
        </>
    );
}
