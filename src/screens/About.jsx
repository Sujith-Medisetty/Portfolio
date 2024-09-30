import { useTheme } from "@emotion/react";
import { useMediaQuery, Box, styled } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

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
          <img
            src={`${import.meta.env.BASE_URL}src/assets/about-me-photo.jpg`}
          />
          About Me
        </Box>
        <Box>
          <h3>Full-Stack Developer</h3>
          <p>
            Worked as a SDE At Amadeus Software Labs, I worked in the Airlines
            Checking In department, specifically in the IATCI (Interline Airline
            Through Check-in) department. I worked on bug fixes in the code,
            developed a tool related to airlines feeds, and took care of the
            entire process from bug fix to delivery to the client. I used
            frameworks such as Angular and Spring Boot, and I have a strong
            understanding of both frontend and backend technologies. This
            experience gave me valuable exposure to real-world applications
          </p>
        </Box>
      </AboutSection>
    </Box>
  );
};

export default About;
