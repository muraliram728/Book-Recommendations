import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#f6ffde", padding: 2 }}>
            <Grid2 container spacing={15} >
                <Grid2 item xs={12} md={6}>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                        WORK WITH US
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="work-with-us"
                        sx={{ pl: 0, margin: 0, listStyleType: 'none', textAlign: "left" }} // Remove bullets
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
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                        WORK WITH US
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="work-with-us"
                        sx={{ pl: 0, margin: 0, listStyleType: 'none', textAlign: "left" }} // Remove bullets
                    >
                        <li >Partner with us</li>
                        <li >Become a vendor</li>
                    </Box>
                </Grid2>

                <Grid2 item xs={12} md={6}>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                        CONTACT
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="contact"
                        sx={{ pl: 0, margin: 0, listStyleType: 'none', textAlign: "left" }} // Remove bullets
                    >
                        <li >Contact support</li>
                        <li >Feedback</li>
                    </Box>
                </Grid2>

                <Grid2 item xs={12}>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                        FUTURE SECTION
                    </Typography>
                    <Box
                        component="ul"
                        aria-labelledby="future-section"
                        sx={{ pl: 0, margin: 0, listStyleType: 'none', textAlign: "left" }} // Remove bullets
                    >
                        <li>Upcoming Features</li>
                    </Box>
                </Grid2>
            </Grid2>
            <hr style={{ borderTopColor: "#bbb", opacity: 0.5, margin: "20px 0" }} />
            <p>Copyright © YYYYYYYY Company name All rights reserved</p>
        </Box>

    );
};

export default Footer;