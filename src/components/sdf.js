import React from "react"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

export default function MuiDrawer() {
  return (
    <>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/404">
            <ListItemText primary="404" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
