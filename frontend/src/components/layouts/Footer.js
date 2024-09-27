import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <Box className="footer-container">
            <Grid2 container spacing={15}>
                <Grid2 item xs={12} md={6}>
                    <Typography className="footer-heading">
                        WORK WITH US
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="work-with-us"
                        className="footer-list"
                    >
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Interest Based Ads</li>
                        <li>Ads Preferences</li>
                        <li>Help</li>
                    </Box>
                </Grid2>

                <Grid2 item xs={12} md={6}>
                    <Typography className="footer-heading">
                        PARTNER WITH US
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="work-with-us"
                        className="footer-list"
                    >
                        <li>Partner with us</li>
                        <li>Become a vendor</li>
                    </Box>
                </Grid2>

                <Grid2 item xs={12} md={6}>
                    <Typography className="footer-heading">
                        CONTACT
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="contact"
                        className="footer-list"
                    >
                        <li>Contact</li>
                        <FacebookIcon />
                        <XIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </Box>
                </Grid2>

                <Grid2 item xs={12}>
                    <Typography className="footer-heading">
                        FUTURE SECTION
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="future-section"
                        className="footer-list"
                    >
                        <li>Upcoming Features</li>
                    </Box>
                </Grid2>
            </Grid2>
            <hr className="footer-divider" />
            <p className="footer-copyright">Copyright © YYYYYYYY Company name All rights reserved</p>
        </Box>
    );
};

export default Footer;
