import React, { useRef, useState } from "react";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, Snackbar, IconButton } from "@material-ui/core";
import { useContacts } from "../contexts/ContactsProvider";
import CloseIcon from "@material-ui/icons/Close";


export default function NewContactModel({ handleClose }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const { createContact } = useContacts();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value && emailRef.current.value) {
      createContact(nameRef.current.value, emailRef.current.value);
      handleClose();
    } else {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <DialogTitle>Create New Contact</DialogTitle>
      <DialogContent>
        <form>
          <DialogContentText>To subscribe, please enter your name and email address here.</DialogContentText>
          <TextField autoFocus margin="dense" inputRef={nameRef} label="Full name" type="text" fullWidth />
          <TextField margin="dense" inputRef={emailRef} label="Email Address" type="email" fullWidth />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary" onClick={handleSubmit}>
          Create
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Missing Name or Email"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </DialogActions>
    </>
  );
}
