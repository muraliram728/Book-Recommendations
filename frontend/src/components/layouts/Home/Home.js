import React from 'react';
import { Box, Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css'; // Import the CSS file
import Popular from './Popular'

const YourComponent = () => {
    return (
        <Box className="container">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Paper className='Right-paper search-box' component="form" sx={{ borderRadius: '25px' }}>
                    <IconButton type="button" className="search-icon" aria-label="search" >
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className="input-base"
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Paper className="sidebar-paper1" >
                    <h4>Reading Challenge</h4>
                </Paper>
                <Box sx={{maxWidth:'725px'}}>
                    <Popular />
                </Box>
                <Paper className="sidebar-paper2" >
                    <h4>Reading Challenge</h4>
                </Paper>
            </Box>
        </Box>
    );
};

export default YourComponent;
