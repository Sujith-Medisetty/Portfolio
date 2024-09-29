import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const StyledDialog = ({
  openDialog,
  handleClose,
  dialogTitle,
  dialogContent,
}) => {
  const StyledDialogWrapper = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
      background: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
  }));

  return (
    <StyledDialogWrapper open={openDialog} keepMounted onClose={handleClose}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </StyledDialogWrapper>
  );
};

export default StyledDialog;
