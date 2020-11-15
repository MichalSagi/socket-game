import React from "react";
import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { GamessProvider } from "./contexts/GamesProvider";

export default function App() {
  const [user, setUser] = useLocalStorage("user");

  const dashboard = (
    <ContactsProvider>
      <GamessProvider>
        <Dashboard user={user} />
      </GamessProvider>
    </ContactsProvider>
  );

  return <>{user ? dashboard : <Login onUserSubmit={setUser} />}</>;
}
