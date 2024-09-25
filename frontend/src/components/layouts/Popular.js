import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Popular() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid> */}
      <Grid sx={{display:""}}>
        <Grid item xs={4} sx={{ marginRight:"600px"}}>
            <Paper sx={{height: "200px", width:"120px", borderRadius:"10px"}}></Paper>
        </Grid>
        <Grid item md={8}>
            <Paper sx={{height: "200px", width:"120px", borderRadius:"10px"}}></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
