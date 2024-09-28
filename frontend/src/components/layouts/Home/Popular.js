import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Container, Paper } from '@mui/material';




export default function Popular() {
  return (
    <Box >
      <h4>Popular Groups</h4>
      <Grid container spacing={2}>
        <Grid size={4} >
          <Paper sx={{ minHeight: "219px", minWidth: "160px" }}>size=8</Paper>
        </Grid>
        <Grid size={8} >
          <Paper sx={{ minHeight: '100px', minWidth: '470px' }}>size=4</Paper>
          <Box display={'flex'} mt={2} gap={2}>
            <Grid size={8}  >
              <Paper sx={{ minHeight: '100px', minWidth: '320px' }}>hhhehheh</Paper>
            </Grid>
            <Grid size={4} >
              <Paper sx={{ minHeight: '100px', minWidth: "140px" }}>ioehqw </Paper>
            </Grid>
          </Box>
        </Grid>
        <Grid size={4} display={'flex'} gap={2}>
          <Paper sx={{ minHeight: '100px', minWidth: '350px' }}>size=8</Paper>
          <Paper sx={{ minHeight: '100px', minWidth: '356px' }}>size=8</Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
