import React, { useState } from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  DialogContentText,
  FormGroup,
  Button,
  Checkbox,
} from "@material-ui/core";
import { useContacts } from "../contexts/ContactsProvider";
import { useGames } from '../contexts/GamesProvider'

export default function NewGameModel({ handleClose }) {
  const { contacts } = useContacts();
  const { createGame } = useGames()
  const [selectedContact, setSelectedContact] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createGame(selectedContact);
    handleClose();
  };

  const handleContactEmail = (email) => {
    setSelectedContact((prevEmails) => {
      if (prevEmails.includes(email)) {
        return prevEmails.filter((prevList) => {
          return email !== prevList;
        });
      } else {
        return [...prevEmails, email];
      }
    });
  };
  return (
    <>
      <DialogTitle>Create New Game</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose the users you want to play with: </DialogContentText>
        <FormControl component="fieldset">
          <FormGroup>
            {contacts.map((contact) => (
              <FormControlLabel
                value={selectedContact.includes(contact.email)}
                control={<Checkbox color="primary" onChange={() => handleContactEmail(contact.email)} />}
                label={contact.name}
                key={contact.email}
              />
            ))}
          </FormGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary" onClick={handleSubmit}>
          Create
        </Button>
      </DialogActions>
    </>
  );
}
