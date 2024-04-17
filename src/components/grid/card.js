import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export const DataCard = (props) => {

  return (
    <Card sx={{ maxWidth: props.width }}>
      <CardActionArea component={Link} href={`/about/${props.name}`} >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                {props.price}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {props.details}
            </Typography>   
        </CardContent>
      </CardActionArea>
    </Card>
  );
}