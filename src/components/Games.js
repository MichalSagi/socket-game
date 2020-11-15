import React from "react";
import { useGames } from "../contexts/GamesProvider";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Games() {
  const { games, gamers } = useGames();

  console.log(games)

  return (
    <List>
        {games.map((game, i) => 
          (<ListItemText key={i}>{game.map(gamer => gamer.name).join(', ')}</ListItemText>)
        )}
    </List>
  );
}
