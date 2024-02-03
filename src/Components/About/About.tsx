import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      
      <Grid container justifyContent="center" sx={{ marginTop: "10%" }}>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            fontWeight: "bolder",
          }}
          // sx={{ flexGrow: 1, color: (theme: { palette: { common: { white: any; }; }; }) => theme.palette.common.white }}
        >
          Hello it's About page
        </Typography>
      </Grid>
    </div>
  );
};

export default About;
