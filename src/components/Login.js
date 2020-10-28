import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, FormControl, ButtonGroup, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  autoContainer: {
    display: "flexworp",
    alignIitems: "center",
    justifyItems: "center",
  },
  buttons: {
    top: "5px",
    borderRadius: "0em",
    
  },
}));

function Login({ onUserSubmit }) {
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
    <Container autoComplete="off" display="flex">
      <form
        onSubmit={handleSubmit}
        p={1}
        m={1}
        css={{ height: "100vh" }}
        noValidate
      >
        <FormControl className={classes.autoContainer}>
          <TextField required autoFocus margin="dense" name="name" label="User Name" type="text" inputRef={nameRef} fullWidth />
          <TextField required margin="dense" name="email" label="Email Address" type="email" inputRef={emailRef} fullWidth />
          <ButtonGroup >
            <Button onClick={handleSubmit} type="submit" color="primary" className={classes.buttons}>
              Login
            </Button>
            <Button onClick={handleRegister} className={classes.buttons} color="primary" >
              Register
            </Button>
          </ButtonGroup>
        </FormControl>
      </form>
    </Container>
  );
}

export default Login;
