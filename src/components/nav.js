import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';

function Nav() {
    return (
        <Box sx={{ backgroundColor: 'lightblue', height: '100vh', padding: '10px' }}>
            <List>
                <ListItemButton component={Link} to={'/'}>
                    <DashboardIcon sx={{paddingRight: '10px'}}/>
                    Dashboard
                </ListItemButton>
                <hr></hr>
                <ListItemButton component={Link} to={'/Users'}>
                    <PersonIcon sx={{paddingRight: '10px'}}/>
                    Users
                </ListItemButton>
            </List>
        </Box>
    );
}

export default Nav;










