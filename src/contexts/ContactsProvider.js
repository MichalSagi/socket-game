import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (name, email) => {
    setContacts((prvContacts) => {
      return [...prvContacts, { name, email }];
    });
  };

  return <ContactsContext.Provider value={{ contacts, createContact }}>{children}</ContactsContext.Provider>;
}
