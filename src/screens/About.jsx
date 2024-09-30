import { useTheme } from "@emotion/react";
import { useMediaQuery, Box, styled } from "@mui/material";
import AboutMePic from "../assets/AboutMePhoto.jpg";
import { AboutDesc, MyRole } from "../MyDetails";

const About = () => {
  const theme = useTheme();

  const AboutSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "left",
    flexDirection: "column",

    "& .heading": {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
    },

    "& .heading img": {
      width: "55px",
      height: "55px",
      marginRight: "1rem",
      borderRadius: "50%",
      border: `0.2px solid ${theme.palette.primary.main}`,
      boxShadow: `0 0 1rem ${theme.palette.primary.main}`,
    },
  }));

  return (
    <Box sx={{ background: `${theme.palette.secondary.main}` }} id="about">
      <AboutSection padding="5rem 8% 3rem">
        <Box className="heading">
          <img src={AboutMePic} />
          About Me
        </Box>
        <Box>
          <h3>{MyRole}</h3>
          <p>{AboutDesc}</p>
        </Box>
      </AboutSection>
    </Box>
  );
};

export default About;
