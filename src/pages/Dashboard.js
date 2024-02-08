import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function Dashboard() {
    return(
        <Container sx={{textAlign: 'center'}}>
            <Box>
                <Typography variant="h1" gutterBottom>
                    Dashboard
                </Typography>
            </Box>
        </Container>
    );
}

export default Dashboard;