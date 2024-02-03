import { Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Grid container justifyContent="center" sx={{marginTop:"10%"}}>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            fontWeight: "bolder",
          }}
          // sx={{ flexGrow: 1, color: (theme: { palette: { common: { white: any; }; }; }) => theme.palette.common.white }}
        >
          Hello it's Kunal
        </Typography>
      </Grid>
    </div>
  );
};

export default Home;
