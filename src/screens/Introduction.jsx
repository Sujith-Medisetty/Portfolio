import { useTheme } from "@emotion/react";
import { Box, styled, useMediaQuery } from "@mui/material";
import StyledButton from "../components/StyledButton";
import MyPhotoLightMode from "../assets/MyPhotoLightMode.png";
import MyPhoto from "../assets/MyPhoto.jpg";

const Introduction = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const buttonLinks = [
    {
      text: "Linked-In",
      href: "https://www.linkedin.com/in/sujith-medisetty-40965a1b4/",
    },
    {
      text: "Download CV",
      href: "Resume.pdf",
    },
  ];

  const Home = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      justifyContent: "space-between",
    },
  }));

  const HomeContent = styled(Box)(({ theme }) => ({
    "& h3": {
      fontSize: "1.5rem",
      fontWeight: 700,
      margin: 0,
      padding: 0,
    },
    "& h1": {
      fontSize: "2.5rem",
      fontWeight: 700,
      margin: 0,
      padding: 0,
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down("sm")]: {
      "& h3": {
        fontSize: "1.25rem",
        fontWeight: 500,
      },
      "& h1": {
        fontSize: "2rem",
        fontWeight: 700,
        lineWeight: 1,
        color: theme.palette.primary.main,
      },
    },
  }));

  const ProfessionalDetails = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const HomeImage = styled(Box)(({ theme }) => ({
    "& img": {
      width: "30vw",
      paddingBottom: "10rem",
    },

    [theme.breakpoints.down("md")]: {
      "& img": {
        width: "60vw",
        paddingBottom: "2rem",
      },
    },
  }));

  return (
    <Box padding={isMediumScreen ? "2rem 8% 3rem" : "5rem 8% 3rem"} id="home">
      <Home>
        <HomeContent>
          <h3>Hello, It's Me</h3>
          <h1>Sujith Medisetty</h1>
          <h3>
            And I'm a <span>Full-Stack Developer</span>
          </h3>
          <p>
            I am a full-stack developer with 1+ years of experience in building
            and delivering web applications at Amadeus Software Labs. I am
            proficient in Python, Java and worked on frameworks like SpringBoot
            and Angular. I have a strong understanding of both the frontend and
            backend technologies. I am a highly motivated and self-directed
            individual. I am also a team player and I am able to work
            effectively with others to achieve common goals.
          </p>
          <ProfessionalDetails>
            {buttonLinks.map((buttonLink, index) => (
              <StyledButton key={index} href={buttonLink.href}>
                {buttonLink.text}
              </StyledButton>
            ))}
          </ProfessionalDetails>
        </HomeContent>
        <HomeImage>
          <img
            src={theme.palette.mode === "light" ? MyPhotoLightMode : MyPhoto}
            alt="My Photo"
          />
        </HomeImage>
      </Home>
    </Box>
  );
};

export default Introduction;
