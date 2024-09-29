import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledButtonWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "10rem",
  height: "3rem",
  marginTop: "20px",
  marginBottom: "10px",
  marginRight: "20px",

  "& .bt": {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "3rem",
    boxShadow: `0 0 1rem ${theme.palette.primary.main}`,
    color: `${theme.palette.text.primary}`,
    letterSpacing: "0.05rem",
    fontWeight: 600,
    transition: "0.5s",
    zIndex: 1,
    overflow: "hidden",
    textDecoration: "none",
  },

  "& .bt:hover": {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: 0,
  },
}));

const StyledButton = ({ children, href }) => {
  return (
    <StyledButtonWrapper>
      <Box component="a" className="bt" href={href}>
        {children}
      </Box>
    </StyledButtonWrapper>
  );
};

export default StyledButton;
