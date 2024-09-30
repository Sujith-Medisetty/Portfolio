import { Box, styled } from "@mui/material";
import StyledButton from "../components/StyledButton";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneIcon from "@mui/icons-material/Phone";
import { myEmail, phone } from "../MyDetails";

const Contact = () => {
  const ContactSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    "& .details": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flex: "1 1 50%",
      flexWrap: "wrap",
      fontSize: "1rem",
      marginTop: "50px",
      fontWeight: 600,
      gap: "20px",
    },
  }));

  return (
    <Box id="contact">
      <ContactSection padding="2rem 8% 3rem">
        <StyledButton href="https://www.linkedin.com/in/sujith-medisetty-40965a1b4/">
          {" "}
          Linked In
        </StyledButton>
        <Box className="details">
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="10px"
          >
            <MarkunreadIcon />
            {myEmail}
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="10px"
          >
            <PhoneIcon /> {phone}{" "}
          </Box>
        </Box>
      </ContactSection>
    </Box>
  );
};

export default Contact;
