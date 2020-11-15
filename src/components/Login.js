import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, FormControl, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  autoContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  buttons: {
       borderRadius: 0,
       margin: 5,
  },
}));

export default function Login({ onUserSubmit }) {
  const classes = useStyles();
  const nameRef = useRef();
  const emailRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { name: nameRef.current.value, email: emailRef.current.value };
    onUserSubmit(user);
  };

  const handleSubmit = (e) => { 
e.preventDefault();
    const user = { name: nameRef.current.value, email: emailRef.current.value };
    onUserSubmit(user);
  }

  return (
    <Box display="flex" justifyContent="center" alignItems='center' style={{ height: '100vh'}}>
      <form
        onSubmit={handleSubmit}
        p={1}
        m={1}
        noValidate
      >
        <FormControl >
          <TextField required autoFocus margin="dense" name="name" label="User Name" type="text" inputRef={nameRef} fullWidth />
          <TextField required margin="dense" name="email" label="Email Address" type="email" inputRef={emailRef} fullWidth />
          <Box m={1}>
            <Button onClick={handleSubmit} type="submit" color="primary" variant="outlined" className={classes.buttons} p={1}>
              Login
            </Button>
            <Button onClick={handleRegister} className={classes.buttons} variant="outlined" p={1} >
              Register
            </Button>
            </Box>
        </FormControl>
      </form>
    </Box>
  );
}

