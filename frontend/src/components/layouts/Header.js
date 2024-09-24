import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#f6ffde" }}>
        <Typography>
          <Toolbar>
            <BookIcon sx={{ background: "black" }} />
            <Tabs Color="black">
              <Tab label="Products" />
              <Tab label="Services" />
              <Tab label="ContactUS" />
              <Tab label="About Us" />
            </Tabs>
          </Toolbar>
        </Typography>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
