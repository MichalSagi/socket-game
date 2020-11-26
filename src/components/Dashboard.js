import React from "react";
import { useGames } from "../contexts/GamesProvider";
import OpenGame from "./OpenGame";
import SideBar from "./SideBar";

export function Dashboard({ user }) {
  const { selectedGame } = useGames();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar user={user} />
      { selectedGame && <OpenGame /> }
    </div>
  );
}

export default Dashboard;
