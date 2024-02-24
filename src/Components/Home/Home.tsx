import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Grid container spacing={2} className="pt-6">
      <Box
        sx={{
          // backgroundImage: `url('assets/code.jpg')`,
          // backgroundSize: "cover", 
          // backgroundRepeat: "no-repeat",
          backgroundColor:"black",
          // height: "617 px",
          width: "100%",
          display:"flex"
          // marginTop: "-0.6%",
          // marginBottom:'-2%',
          // marginLeft:'-0.6%'
        }}
      >
      <Grid
        item
        xs={4}
        
        justifyContent="center"
        display="flex"
        
      >
        <Box
          component="img"
          sx={{
            // height: 300,
            width: 350,
            maxHeight: { xs: 233, md: 350 },
            maxWidth: { xs: 350, md: 350 },
            // borderRadius: 50,
            
          }}
          // alt=""
          src="assets/port2.png"
        />
      </Grid>
      <Grid
        item
        xs={8}
        // className="border border-black"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        display="flex"
      >
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            fontWeight: "bolder",
            color:"white"
          }}
          
          // sx={{ flexGrow: 1, color: (theme: { palette: { common: { white: any; }; }; }) => theme.palette.common.white }}
        >
          Hello it's Kunal
        </Typography>
        
      </Grid>
      </Box>
    </Grid>
  );
};

export default Home;
