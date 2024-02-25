import { AppBar, Box, Button, ClickAwayListener, CssBaseline, Divider, Grow, IconButton, InputBase, MenuItem, MenuList, Paper, Popper, Stack, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.svg";
import profileIcon from "../../assets/profile-icon.svg";
import heartIcon from "../../assets/heart.svg";
import cartIcon from "../../assets/cart.svg";
import { IoIosArrowDown } from "react-icons/io";

import React from "react";
import Dropdown from "./Dropdown";
const drawerWidth = 240;
const navItems = ["Home", "About Us", "Shop", "Blog", "Pages"];
// const options = ["English", "Telugu", "Hindi"];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HomeNavbar2 = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const divider = (
    <Box>
      <Divider orientation="vertical" variant="middle" sx={{ backgroundColor: "#fff", height: "50%", width: "2px", marginLeft: "10px", marginRight: "10px" }} />
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "red", display: "flex" }}>
      <CssBaseline />

      <AppBar component={"nav"} sx={{ backgroundColor: "#273C99" }}>
        {/*////////////////////// TOP NAV ////////////////////////////////////////////// */}
        <Stack direction={"row"} className="container" sx={{ maxHeight: "45px" }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <GiHamburgerMenu color="black" />
          </IconButton>

          <Dropdown title="Language" options={["English", "Telugu", "Hindi"]} />
          {divider}

          <Dropdown title="Currency" options={["USD", "INR", "CAD", "EUR"]} />
          {divider}

          <Typography
            component="div"
            className="d-flex align-items-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" }, font: "normal normal normal 16px/24px Poppins", textAlign: "left" }}
          >
            Need Help? +001 123 456 789: English
          </Typography>
          <Box>
            <Button sx={{ color: "#ffffff", font: "normal normal normal 16px/24px Poppins" }}>About Us</Button>
            <Button sx={{ color: "#ffffff", font: "normal normal normal 16px/24px Poppins" }}>Order Tracking</Button>
            <Button sx={{ color: "#ffffff", font: "normal normal normal 16px/24px Poppins" }}>Contact Us</Button>
            <Button sx={{ color: "#ffffff", font: "normal normal normal 16px/24px Poppins" }}>FAQs</Button>
          </Box>
        </Stack>
        <Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: "#FFFFFF" }} />

        {/*////////////////////// MIDDLE NAV //////////////////////////////////////////////*/}
        <Toolbar className="container" sx={{ height: "82px" }}>
          <Stack direction={"row"} spacing={2} alignItems={"bottom"} width={"100%"}>
            <Typography component="div" sx={{ font: "normal normal normal 16px/24px Poppins", display: { xs: "none", sm: "block" } }}>
              <Button size="small" className="d-flex justify-content-center align-items-center" sx={{ color: "#ffffff" }}>
                <img src={logo} loading="lazy" style={{ filter: "brightness(200%)" }} alt="logo" />
              </Button>
            </Typography>
            <Search>
              <SearchIconWrapper>{/* <SearchIcon /> */}</SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
            <Button size="small" sx={{ color: "#ffffff", textAlign: "left" }}>
              <Stack direction={"row"} spacing={1}>
                <img src={profileIcon} loading="lazy" style={{ width: "25px", marginRight: "10px" }} alt="profile" />
                <Box>
                  <Typography variant="caption">Login</Typography>
                  <Typography variant="subtitle1" sx={{ font: "normal normal 600 16px/20px Poppins" }}>
                    My Account
                  </Typography>
                </Box>
              </Stack>
            </Button>
            <Button size="small" sx={{ color: "#ffffff", textAlign: "left" }}>
              <Stack direction={"row"} spacing={1}>
                <img src={heartIcon} loading="lazy" style={{ width: "40px" }} alt="heart" />
                <Box>
                  <Typography variant="caption" sx={{ font: "normal normal medium 12px/20px Poppins", textAlign: "left" }}>
                    Favorite
                  </Typography>
                  <Typography variant="subtitle1" sx={{ font: "normal normal 600 16px/20px Poppins" }}>
                    My Wishlist
                  </Typography>
                </Box>
              </Stack>
            </Button>
            <Button size="small" sx={{ color: "#ffffff", textAlign: "left" }}>
              <Stack direction={"row"} spacing={1}>
                <img src={cartIcon} loading="lazy" style={{ width: "30px" }} alt="cart" />
                <Box>
                  <Typography variant="caption" sx={{ font: "normal normal medium 12px/20px Poppins" }}>
                    Your Cart:
                  </Typography>
                  <Typography sx={{ font: "normal normal 600 16px/20px Poppins" }}>$00.00</Typography>
                </Box>
              </Stack>
            </Button>
          </Stack>
        </Toolbar>
        <Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: "#FFFFFF" }} />

        {/*////////////////////// BOTTOM NAV //////////////////////////////////////////////*/}
        <Toolbar className="container" sx={{ height: "71px" }}>
          <Stack direction={"row"} spacing={2} alignItems={"cenetr"} width={"100%"}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
              <GiHamburgerMenu color="black" />
            </IconButton>
            <Typography component="div" sx={{ font: "normal normal normal 16px/24px Poppins", display: { xs: "none", md: "block" } }}>
              <Button size="small" className="d-flex justify-content-center align-items-center" sx={{ color: "#ffffff" }}>
                <GiHamburgerMenu color="#ffffff" fontSize={"31px"} />
                Shop By Department
              </Button>
            </Typography>
            {divider}

            <Box sx={{ display: { xs: "none", sm: "block", font: "normal normal normal 16px/24px Poppins" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#ffffff", font: "normal normal normal 16px/24px Poppins" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Typography
              component="div"
              className="d-flex justify-content-center align-items-center"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" }, font: "normal normal normal 16px/24px Poppins" }}
            >
              Spend $120 more and get free shipping
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomeNavbar2;
