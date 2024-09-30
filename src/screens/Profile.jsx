import { useTheme } from "@emotion/react";
import { Box, styled, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { useState } from "react";
import StyledDialog from "../components/StyledDialog";
import { ProfileDetails, ProfileContentBoxDescSize } from "../MyDetails";

const Profile = () => {
  const theme = useTheme();

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

        {ProfileDetails.map((section, sectionIndex) => (
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
                        {words.length > ProfileContentBoxDescSize
                          ? `${words
                              .slice(0, ProfileContentBoxDescSize)
                              .join(" ")}`
                          : timeline.desc}
                        {words.length > ProfileContentBoxDescSize ? (
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
