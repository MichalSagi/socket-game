import React, { useState } from "react";
import { Tab, Button, Dialog } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Games from "./Games";
import Contacts from "./Contacts";
import { makeStyles } from "@material-ui/core/styles";
import NewContactModel from "./NewContactModel";
import NewGameModel from './NewGameModel'

const useStyles = makeStyles({
  panels: {
    borderRight: "1px solid",
    overflow: "auto",
    flexGrow: "1",
    overflowY: "hidden",
    height: "80vh",
  },
});

export default function SideBar({ user }) {
  const [tabs, setTabs] = useState("contacts");
  const [open, setOpen] = useState(false);
  const startGame = tabs;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabs(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "330px", disply: "flex", flex: "column", paddingLeft: "0px" }}>
      <TabContext value={tabs} style={{ overflow: "auto", height: "80vh" }}>
        <TabList onChange={handleChange} style={{ borderRight: "1px solid", overflow: "auto", flexGrow: "1" }}>
          <Tab label="contacts" value="contacts" />
          <Tab label="games" value="games" />
        </TabList>
        <TabPanel className={classes.panels} value="contacts">
          <Contacts style={{ borderRight: "1px" }} />
        </TabPanel>
        <TabPanel value="games" className={classes.panels}>
          <Games />
        </TabPanel>
        <Button
          variant="outlined"
          style={{ borderRadius: 0, width: "330px", position: "relative", bottom: "0px", marginLeft: "0" }}
          onClick={() => setOpen(true)}
        >
          New {startGame === "contacts" ? "Contact " : "Game"}
        </Button>
      </TabContext>
      <Dialog open={open} onClose={handleClose}>
        {startGame === "contacts" ? <NewContactModel handleClose={handleClose}/> : <NewGameModel handleClose={handleClose} />}
      </Dialog>
    </div>
  );
}
