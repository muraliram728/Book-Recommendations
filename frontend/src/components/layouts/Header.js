import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { deepPurple } from "@mui/material/colors";
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <AppBar className="app-bar" elevation={0} position="fixed" sx={{backgroundColor:'#f6ffde'}}>
      <Toolbar>
        <Box className="logo-container">
          <Avatar sx={{ bgcolor: deepPurple[500], mr: 1 }}>
            L
          </Avatar>
          <Typography variant="body1" className="logo-name">
            Logo name
          </Typography>
        </Box>
        <Tabs className="tabs">
          <Tab label="Home" />
          <Tab label="My Books" />
          <Tab
            label={
              <Box display="flex" alignItems="center">
                Reviews
                <KeyboardArrowDownIcon sx={{ ml: 1 }} />
              </Box>
            }
          />
          <Tab
            label={
              <Box display="flex" alignItems="center">
                Community
                <KeyboardArrowDownIcon sx={{ ml: 1 }} />
              </Box>
            }
          />
        </Tabs>
        <Box className="avatar-container">
          <Avatar sx={{ bgcolor: deepPurple[500], mr: 1 }} src="/path/to/avatar.jpg">
            U
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
