import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


export default function Popular() {
  return (
    <Box >
      <Grid display={'flex'}>
        <Grid item xs={6} >
            <Paper sx={{height: "250px", width:"120px", borderRadius:"10px",marginLeft:"20px"}}></Paper>
        </Grid>
        <Grid item md={6}>
            <Paper sx={{height: "100px", width:"600px", borderRadius:"10px",marginLeft:"20px"}}></Paper>
        </Grid>
        <Grid item md={4}>
            <Paper sx={{height: "100px", width:"400px", borderRadius:"10px",marginLeft:"20px"}}></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
