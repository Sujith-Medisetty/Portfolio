import { useTheme } from "@emotion/react";
import { Box, styled, useMediaQuery } from "@mui/material";
import StyledButton from "../components/StyledButton";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";
import StyledDialog from "../components/StyledDialog";

const Projects = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const projects = [
    {
      title: "Restaurent Management System",
      desc: "Developed a comprehensive Restaurant Management System consisting of Customer, Admin, Kitchen Master, and Supervisor modules. Customers can seamlessly browse, customize, and place orders via an intuitive interface while Admins possess full control over menu items, staff, and supervisors. Chefs adeptly fulfill orders, and Supervisors handle inquiries",
      techStack: ["Angular 10", "Spring Boot", "Hibernate 5.3", "Log4J"],
      url: "https://github.com/Sujith-Medisetty/Restaurant-Management-System",
    },
    {
      title: "Information-Security-Management-System",
      desc: "A foundational web application prioritizing security to thwart potential breaches. Employed AES encryption for secure resource storage, and encoded passwords and keys in the database. Only authorized personnel can access portals. Implemented CAPTCHA for DoS attack prevention, fortified against SQL injections with parameterized queries and JPA. Incorporated notification functionality for private communication. The site operates over HTTPS using a self-signed and trusted certificate. Committed to a secure user experience.",
      techStack: ["Angular", "Spring Boot", "Hibernate", "Spring Security"],
      url: "https://github.com/Sujith-Medisetty/ISMS",
    },
    {
      title: "Self-Portfolio",
      desc: "Explore my professional journey, including a detailed Profile, accomplished Projects, and background About me",
      techStack: ["React JS", "Material UI"],
      url: "",
    },
    {
      title: "Weather Tracker",
      desc: "Reports Current Weather Condition by accessing Geo Location , provides 7-day forecast information and hourly forecast for next 24 hours. (This application works on both Android and IOS)",
      techStack: ["Flutter", "SQ-Lite"],
      url: "https://github.com/Sujith-Medisetty/Weather_App",
    },
    {
      title: "Retail Management System",
      desc: "This application maintains the statistics of Teller and helps supervisors to monitor their performance.",
      techStack: ["Spring Boot", "MY-SQL Database", "Bootstrap & JS"],
      url: "https://github.com/Sujith-Medisetty/Spring-RMS-1",
    },
  ];

  const ProjectSection = styled(Box)(({ theme }) => ({
    "& .heading": {
      fontSize: "2rem",
      fontWeight: 700,
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "2rem",
    },
  }));

  const ProjectBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
  }));

  const ProjectContentBox = styled(Box)(({ theme }) => ({
    flex: "1 1 20%",
    // maxWidth: "20%",
    padding: "1rem 1rem 1rem",
    borderRadius: "1rem",
    textAlign: "center",
    border: `0.2rem solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    "& .title": {
      fontSize: "1rem",
      fontWeight: 900,
      marginBottom: "20px",
    },

    "& .tech": {
      lineSpacing: "1px",
      color: theme.palette.primary.main,
      fontSize: "0.8rem",
      marginTop: "10px",
    },

    "& .desc span": {
      color: theme.palette.primary.main,
      fontWeight: 800,
    },

    "& .tech span": {
      fontWeight: 800,
    },

    "&:hover": {
      boxShadow: `0 0 1rem ${theme.palette.primary.main}`,
    },
  }));

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const ContentBoxDescSize = 20;

  const handleClose = () => {
    setDialogContent("");
    setOpenDialog(false);
    setDialogTitle("");
  };

  const handleShowMore = (title, desc) => {
    setDialogContent(desc);
    setOpenDialog(true);
    setDialogTitle(title);
  };

  return (
    <Box id="projects" sx={{ background: `${theme.palette.secondary.main}` }}>
      <ProjectSection padding="5rem 5% 3rem">
        <Box className="heading">Projects</Box>
        <ProjectBox>
          {projects.map((project, index) => {
            const words = project.desc.split(" ");
            return (
              <ProjectContentBox key={index}>
                <CodeIcon sx={{ fontSize: "3rem" }} />
                <Box className="title">{project.title}</Box>
                <Box className="desc">
                  {words.length > ContentBoxDescSize
                    ? `${words.slice(0, ContentBoxDescSize).join(" ")}`
                    : project.desc}
                  {words.length > ContentBoxDescSize ? (
                    <span
                      className="showMore"
                      onClick={() =>
                        handleShowMore(project.title, project.desc)
                      }
                    >
                      ...Show More
                    </span>
                  ) : (
                    ""
                  )}
                </Box>
                <Box className="tech">
                  {" "}
                  <span>Tech Stack :</span> {project.techStack.join(", ")}
                </Box>
                <StyledButton href={project.url}>Show Project</StyledButton>
              </ProjectContentBox>
            );
          })}
        </ProjectBox>
        <StyledDialog
          openDialog={openDialog}
          handleClose={handleClose}
          dialogTitle={dialogTitle}
          dialogContent={dialogContent}
        ></StyledDialog>
      </ProjectSection>
    </Box>
  );
};

export default Projects;
