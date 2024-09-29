import { useTheme } from "@emotion/react";
import { useMediaQuery, Box, styled, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { useState } from "react";
import StyledDialog from "../components/StyledDialog";

const Profile = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const educationAndExperience = [
    {
      category: "Education",
      icon: "SchoolIcon",
      timelines: [
        {
          title: "Graduation",
          org: "University Of Memphis",
          startYear: "2023",
          endYear: "Currently pursuing masters",
          desc: "Currently pursuing my master's at University Of Memephis, Memphis, TN 38152",
        },
        {
          title: "UnderGraduation",
          org: "Anurag Group Of Institutions",
          startYear: "2017",
          endYear: "2021",
          desc: "Graduated with a Bachelor of Technology degree in Information Technology from Anurag Group Of Institutions, Hyderabad, India in 2021 with an aggregate of 9.45",
        },
        {
          title: "Intemediate",
          org: "Narayana Junior College",
          startYear: "2015",
          endYear: "2017",
          desc: "Completed the Intermediate Examination from Narayana Junior College, Hyderabad, India in 2017.",
        },
        {
          title: "Secondary School",
          org: "Montessori High School",
          startYear: "",
          endYear: "2015",
          desc: "Completed the Secondary School Examination from Montessori High School, India in 2015.",
        },
      ],
    },
    {
      category: "Experience",
      icon: "WorkHistoryIcon",
      timelines: [
        {
          title: "Software Developer",
          org: "Amadeus Software Labs",
          startYear: "Nov 2021",
          endYear: "Dec 2022 (1 yr 2 mos)",
          desc: "Worked as a full-stack developer in the Airlines Checking In department, specifically in the IATCI (Interline Airline Through Check-in) department. Worked on bug fixes in the code, developed a tool related to airlines feeds, and took care of the entire process from bug fix to delivery to the client. This experience gave me valuable exposure to real-world applications.",
        },
        {
          title: "Application Developer Intern",
          org: "Revature",
          startYear: "Jul 2021",
          endYear: "Oct 2021 (4 mos)",
          desc: "As an Application Developer Intern at Revature, I developed a robust management system using Spring Boot and React. My role involved backend API development, creating a user-friendly interface, and implementing security measures, all aimed at enhancing operational efficiency",
        },
      ],
    },
    {
      category: "Skills",
      icon: "DisplaySettingsIcon",
      timelines: [
        {
          title: "Languages",
          desc: "Java, Python, C, C++, HTML, CSS, JavaScript, JQuery, SQL",
        },
        {
          title: "Frameworks & Libraries",
          desc: "Spring Boot, Spring Security, Spring JPA, Hibernate, React JS, Angular JS, Flutter (Mobile App Development)",
        },
        {
          title: "Cloud, DevOps, Build & config tools..etc",
          desc: "AWS, Docker, Jenkins",
        },
      ],
    },
  ];

  const ProfileSection = styled(Box)(({ theme }) => ({
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

  const ProfileBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "70%",
    margin: "1rem auto",

    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  }));

  const ContentTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
    fontWeight: 600,
    fontSize: "1.75rem",
    marginBottom: "10px",
    marginTop: "2rem",
  }));

  const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    borderLeft: `0.2rem solid ${theme.palette.primary.main}`,

    "& .content": {
      position: "relative",
      border: `0.2rem solid ${theme.palette.primary.main}`,
      borderRadius: "1rem",
      padding: "1.5rem",
      marginBottom: "1rem",
      marginLeft: "1.5rem",
    },

    "& .content:hover": {
      boxShadow: `0 0 1rem ${theme.palette.primary.main}`,
    },

    "& .content .icon": {
      position: "absolute",
      top: 0,
      left: "-2.5rem",
    },

    "& .content .calendar": {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      gap: "1rem",
      fontWeight: 600,
    },

    "& .content .title": {
      fontSize: "1.25rem",
      fontWeight: 500,
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },

    "& .content #desc-skills": {
      letterSpacing: "1px",
      fontSize: "0.9rem",
      fontWeight: 600,
      color: theme.palette.primary.main,
    },

    "& .content .showMore": {
      cursor: "pointer",
      color: theme.palette.primary.main,
      marginTop: "4px",
    },
  }));

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const ContentBoxDescSize = 50;

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
    <Box id="profile">
      <ProfileSection padding="5rem 8% 3rem">
        <Box className="heading">My Profile</Box>

        {educationAndExperience.map((section, sectionIndex) => (
          <ProfileBox key={sectionIndex}>
            <ContentTitle>{section.category}</ContentTitle>

            {section.timelines.map((timeline, index) => {
              const words = timeline.desc.split(" ");
              return (
                <ContentBox key={index}>
                  <Box className="content">
                    <Box className="icon">
                      {section.icon === "SchoolIcon" ? (
                        <SchoolIcon />
                      ) : section.icon === "DisplaySettingsIcon" ? (
                        <DisplaySettingsIcon />
                      ) : (
                        <WorkHistoryIcon />
                      )}
                    </Box>

                    {timeline.startYear || timeline.endYear ? (
                      <Box className="calendar">
                        <CalendarMonthIcon />
                        <span>
                          {timeline.startYear && timeline.endYear
                            ? `${timeline.startYear} - ${timeline.endYear}`
                            : timeline.startYear
                            ? timeline.startYear
                            : timeline.endYear
                            ? timeline.endYear
                            : ""}
                        </span>
                      </Box>
                    ) : (
                      <></>
                    )}
                    <Box className="title">
                      {timeline.org ? (
                        <span>
                          {timeline.title} - {timeline.org}
                        </span>
                      ) : (
                        <span>{timeline.title}</span>
                      )}
                    </Box>
                    <Box
                      className="desc"
                      id={section.category === "Skills" ? "desc-skills" : ""}
                    >
                      <span>
                        {words.length > ContentBoxDescSize
                          ? `${words.slice(0, ContentBoxDescSize).join(" ")}`
                          : timeline.desc}
                        {words.length > ContentBoxDescSize ? (
                          <span
                            className="showMore"
                            onClick={() =>
                              handleShowMore(
                                section.category +
                                  " (" +
                                  timeline.title +
                                  " - " +
                                  timeline.org +
                                  ")",
                                timeline.desc
                              )
                            }
                          >
                            ...Show More
                          </span>
                        ) : (
                          ""
                        )}
                      </span>
                    </Box>
                  </Box>
                </ContentBox>
              );
            })}
          </ProfileBox>
        ))}

        <StyledDialog
          openDialog={openDialog}
          handleClose={handleClose}
          dialogTitle={dialogTitle}
          dialogContent={dialogContent}
        ></StyledDialog>
      </ProfileSection>
    </Box>
  );
};

export default Profile;
