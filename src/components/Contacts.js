import React from "react";
import { useContacts } from "../contexts/ContactsProvider";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <List>
      {contacts.map((contact, index) => (
        <ListItem key={index}>
          <PersonOutlineIcon style={{ margin: "5px" }} />
          <ListItemText>{contact.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
