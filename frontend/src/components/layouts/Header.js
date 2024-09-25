import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { deepPurple } from "@mui/material/colors";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#f6ffde" }}>
        <Typography>
          <Toolbar>
            <Box display="flex" alignItems="center" sx={{ ml: 2 }} >
            <Avatar sx={{ bgcolor: deepPurple[500], mr: 1 }} >
                L
              </Avatar>
            <Typography variant="body1" sx={{ color: "black" }}>
              Logo name
            </Typography>
            </Box>
            <Tabs  sx={{ ml: "auto", fontWeight: "bold" }}>
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
            <Box >
              <Avatar sx={{ bgcolor: deepPurple[500], mr: 1 }} src="/path/to/avatar.jpg">
                U
              </Avatar>
            </Box>
          </Toolbar>
        </Typography>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
