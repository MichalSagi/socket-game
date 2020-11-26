import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const GamesContext = React.createContext();

export function useGames() {
  return useContext(GamesContext);
}

export function GamessProvider({ children }) {
  const [games, setGames] = useLocalStorage("games", []);
  const { contacts } = useContacts();
  // const gamers = contacts.map(contact => contact.name)
  const [selectedGameId, setSelectedGameId] = useState(0)

  const formattedGames = games.map((game, index) => {
    const emails = game.emails.map( email => {
      const contact = contacts.find(contact => {
        return contact.email === email;
      });
      const name = (contact && contact.name) || email;
      return { id: email, name };
    });
    const selected = selectedGameId === index
    return { ...games, emails, selected}
  });

  const createGame = (emails) => {
    setGames((prvGames) => {
      return [...prvGames, { emails, messages: [] }];
    });
  };

  const value = {
    games: formattedGames, 
    selectedGameId: setSelectedGameId,
    selectedGame : formattedGames[selectedGameId],
    createGame
  }

  return <GamesContext.Provider value={value}>{children}</GamesContext.Provider>;
}
