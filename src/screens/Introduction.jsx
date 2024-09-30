import { useTheme } from "@emotion/react";
import { Box, styled, useMediaQuery } from "@mui/material";
import StyledButton from "../components/StyledButton";
import MyPhotoLightMode from "../assets/MyPhotoLightMode.png";
import MyPhoto from "../assets/MyPhoto.jpg";
import {
  IntroProfessionalDetails,
  MyName,
  MyRole,
  IntroDesc,
} from "../MyDetails";

const Introduction = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

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
          <h1>{MyName}</h1>
          <h3>
            And I'm a <span>{MyRole}</span>
          </h3>
          <p>{IntroDesc}</p>
          <ProfessionalDetails>
            {IntroProfessionalDetails.map((buttonLink, index) => (
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
