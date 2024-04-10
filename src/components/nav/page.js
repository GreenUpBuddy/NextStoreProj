import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemIcon,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from "@mui/icons-material/Mail";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useState } from "react";

export const MuiDrawer = () =>{
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return(
        <>
        <IconButton p={80} size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
        <BrowserRouter>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width={250} textAlign= "center" role="presentation">
                <List>
                    {["Inbox", "Starred"].map((text, index) => (
                    <ListItem key={text} component={Link} to={"/" + text.toLowerCase()}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                </Box>
            </Drawer>
       </BrowserRouter>
       </>
    );
}