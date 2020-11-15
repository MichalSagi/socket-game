import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const GamesContext = React.createContext();

export function useGames() {
  return useContext(GamesContext);
}

export function GamessProvider({ children }) {
  const [games, setGames] = useLocalStorage("games", []);
  const { contacts } = useContacts();
  const gamers = contacts.map(contact => contact.name)
  // const [selectedGameId, setSelectedGameId] = useState(0)

  const createGame = (emails) => {
    setGames((prvGames) => {
      return [...prvGames, { emails, messages: [] }];
    });
  };


  return <GamesContext.Provider value={{ games, gamers, createGame }}>{children}</GamesContext.Provider>;
}
