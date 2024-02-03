import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

interface functions {
  name: string;
  path?: string;
  subFunctions?: functions[];
}
const functions: functions[] = [
  { name: "About", path: "/about" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Contact", path: "/contact" },
  
 
  // { name: "test", path: "/test" },
];
const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"  style={{backgroundColor:"black"}}
    sx={{
        height:"70px",
        "@media (max-width:600px)": {
          height: "60px",
        },
      }}  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              marginRight: 5,
              marginLeft: 10,
              fontWeight: "bold",
              paddingX: 2,
            }}
            // sx={{ flexGrow: 1, color: (theme: { palette: { common: { white: any; }; }; }) => theme.palette.common.white }}
          >
            Kunal Manchanda
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {functions.map(({ name, path }, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    href={path}
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography textAlign="center">{name}</Typography>
                  </Link>
                </MenuItem>
                //     <Link key={name} href={path}  onClick={handleCloseNavMenu} >
                //     <Typography textAlign="center">{name}</Typography>
                //   </Link>
              ))}
            </Menu>
            
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 3,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Kunal Manchanda
            
          </Typography>
          <Grid item className="" sx={{ display: { xs: "flex", md: "none" }, }}>
              <IconButton>
                <LinkedInIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <GitHubIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <EmailIcon style={{ color: "white" }} />
              </IconButton>
            </Grid>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Grid  className=""sx={{ display:"flex",marginLeft:"8.5%",marginTop:1}}>
          {functions.map(({ name, path }, index) => (
            <Link key={name} href={path} sx={{ textDecoration: 'none', color: 'white', marginLeft: 2, marginRight: 2 }}>
              <Typography sx={{ fontSize: 18,fontWeight:'bold'}} >{name}</Typography>
            </Link>
          ))}
            </Grid>

            <Grid item className="" sx={{ marginLeft: "auto", marginRight: 4 }}>
              <IconButton>
                <LinkedInIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <GitHubIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <EmailIcon style={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
