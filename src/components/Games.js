import React from "react";
import { useGames } from "../contexts/GamesProvider";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Games() {
  const { games, selectedGameId } = useGames();

  return (
    <List>
        {games.map((game, i) => 
          (<ListItem key={i} button divider={true} selected={game.selected}><ListItemText onClick={() => selectedGameId(i)}>{game.emails.map(email => email.name).join(', ')}</ListItemText> </ListItem>)
        )}
    </List>
  );
}
