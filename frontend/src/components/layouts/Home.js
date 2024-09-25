import * as React from 'react';
import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Popular from './Popular';

export default function Home() {
    return (
        <Box sx={{ backgroundColor: "#f6ffde", height: "80vh" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000, borderRadius: "25px", marginTop: "10px", boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Paper sx={{ width: "300px", height: "500px", marginTop: "20px", marginLeft: "20px", borderRadius: "20px" }}>
                    <h4>Reading Chalange</h4>
                </Paper>
                {/* <Box sx={{ flexGrow: 1 }}>
                    <Grid2 container spacing={2}>
                        <Grid item xs={4} >
                            <Item >xs=8</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid2>
                </Box> */}
                <div style={{marginTop:"20px"}}>
                <Popular />
                </div>
                <Paper sx={{ width: "300px", height: "500px", marginTop: "20px", marginRight: "20px", borderRadius: "20px" }}>
                    <h4>Reading Chalange</h4>
                </Paper>
            </Box>

        </Box>
    );
}
