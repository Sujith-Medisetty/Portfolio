import React, { useContext, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../theme";
import { Link } from "react-router-dom";

// Styled Components
const NavBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "1rem 8%",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 100,
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "bold",
  cursor: "pointer",
  color: theme.palette.text.primary,
}));

const NavMenuLargeScreen = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const NavMenuSmallScreen = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  height: "100%",
}));

const NavItemLargeScreen = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginLeft: "2rem",
  cursor: "pointer",
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const NavItemSmallScreen = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
  cursor: "pointer",
  padding: theme.spacing(1, 4),
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
  },
}));

const SwitchModeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Profile", path: "/profile" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Drawer List for small screens
  const DrawerList = (
    <Box
      onClick={() => setDrawerOpen(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <NavMenuSmallScreen>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{ textDecoration: "none" }}
            onClick={() => setDrawerOpen(false)}
          >
            <NavItemSmallScreen>{item.label}</NavItemSmallScreen>
          </Link>
        ))}
      </NavMenuSmallScreen>
      <SwitchModeBox onClick={colorMode.toggleColorMode}>
        <IconButton type="button" color="inherit">
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <Typography variant="body1" sx={{ ml: 1 }}>
          Switch to {theme.palette.mode === "dark" ? "light" : "dark"} mode
        </Typography>
      </SwitchModeBox>
    </Box>
  );

  return (
    <NavBar>
      <Logo>SUJITH</Logo>
      {isMediumScreen ? (
        <Box>
          {isDrawerOpen ? (
            <IconButton
              type="button"
              color="inherit"
              onClick={() => setDrawerOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              type="button"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <StyledDrawer
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {DrawerList}
          </StyledDrawer>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <NavMenuLargeScreen>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <NavItemLargeScreen>{item.label}</NavItemLargeScreen>
              </Link>
            ))}
          </NavMenuLargeScreen>
          <IconButton
            type="button"
            color="inherit"
            sx={{ marginLeft: "1rem" }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      )}
    </NavBar>
  );
};

export default Header;
