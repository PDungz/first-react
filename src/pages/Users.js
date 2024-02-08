import DataTable from '../components/DataTable';
import React from 'react';

import { Box, Grid, Typography, Container, TextField, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

function Users() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Container sx={{textAlign: 'center'}}>
            <Box>
                <Typography variant="h1" gutterBottom>
                    Users
                </Typography>
            </Box>
            <Box>
                <Box>
                    <React.Fragment>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                        }}>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                <AddIcon sx={{paddingRight: '10px'}}/>
                                Add
                            </Button>
                        </Box>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <Box >
                                <DialogTitle id="alert-dialog-title" sx={{paddingLeft: '40px'}}>
                                {"Add Users"}
                                </DialogTitle>
                            </Box>
                            <FormControl color='primary'>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description" sx={{ paddingX: '20px' }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                        <TextField id="name-basic" label="Name" variant="outlined" fullWidth hight/>
                                        </Grid>
                                        <Grid item xs={6}>
                                        <TextField id="last-name-basic" label="Last name" variant="outlined" fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <TextField id="email-basic" label="Email" variant="outlined" fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <TextField id="password-basic" label="Password" variant="outlined" fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <TextField type="date"  variant="outlined" fullWidth />
                                        </Grid>
                                    </Grid>
                                    </DialogContentText>
                                </DialogContent>
                            </FormControl>
                            <DialogActions sx={{paddingY: '20px',paddingRight: '40px'}}>
                                <Button onClick={handleClose}>Add</Button>
                                <Button onClick={handleClose} autoFocus>
                                    Cancel
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                </Box>
                <DataTable/>
            </Box>
        </Container>
    );
}

export default Users;