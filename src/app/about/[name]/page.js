import { MyAppBar } from "@/components/nav/appbar";
import { Paper, Stack, Typography, Chip, Fab } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from "next/image";

export default function Page({ params }) {
    const details = "This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section...This is a temporary placeholder for the details section."
    return (
        <>
            <MyAppBar/>
            <main>
                <Stack alignItems="center">
                    <Paper elevation={8} square={false} style={{position: 'absolute', top: "20%",width: '60vw'}}>
                        <Stack style={{paddingTop:40}} alignItems="center">
                            <Image unoptimized src="https://placehold.co/350x350" width={350} height={350} alt="placeholder"/>
                            <Typography style={{paddingTop:10}} gutterBottom variant="h5" component="div">
                                {params.name}
                            </Typography>
                            <span>
                                <Chip style={{marginRight:10}} label="1 for 1.99" size='medium'/> 
                                <Chip label="5 for 4.99" color='primary' size='medium'/>
                            </span>
                            <Typography gutterBottom align="center" style={{ paddingTop: 10,marginLeft:60,marginRight:60}} variant="body1" component="span">
                                {details}
                            </Typography>
                            <span>
                            <Fab style={{marginBottom: 20}} variant="extended" size="medium" color="primary">
                                <ShoppingCartIcon/>
                                Add to Cart
                            </Fab>
                            </span>
                        </Stack>
                    </Paper>
                </Stack>
            </main>
        </>
    );
}
