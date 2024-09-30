import { useTheme } from "@emotion/react";
import { Box, styled, useMediaQuery } from "@mui/material";
import StyledButton from "../components/StyledButton";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";
import StyledDialog from "../components/StyledDialog";
import { projects, ProjectContentBoxDescSize } from "../MyDetails";

const Projects = () => {
  const theme = useTheme();

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
                  {words.length > ProjectContentBoxDescSize
                    ? `${words.slice(0, ProjectContentBoxDescSize).join(" ")}`
                    : project.desc}
                  {words.length > ProjectContentBoxDescSize ? (
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
