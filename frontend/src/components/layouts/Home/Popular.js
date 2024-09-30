import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Paper } from '@mui/material';
import './Popular.css'; // Import the CSS file

export default function Popular() {
  return (
    <Box >
      <h4 className="popular-title">Popular Groups</h4>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Paper className="Paper-1">size=8</Paper>
        </Grid>
        <Grid size={8}>
          <Paper className="paper-extra-large">size=4</Paper>
          <Box className="flex-box">
            <Grid size={8}>
              <Paper className="paper-medium">hhhehheh</Paper>
            </Grid>
            <Grid size={4}>
              <Paper className="paper-small">ioehqw</Paper>
            </Grid>
          </Box>
        </Grid>
        <Grid size={4} className="flex-box2">
          <Paper className="paper-medium-large">size=8</Paper>
          <Paper className="paper-medium-large-alt">size=8</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
