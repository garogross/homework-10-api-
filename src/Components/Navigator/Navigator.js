import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Navigator.module.css"

const Navigator = () => {
 return (
  <nav className={classes.navigator}>
   <NavLink activeClassName={classes.active} to="/playlist">Playlist</NavLink>
   <NavLink activeClassName={classes.active} to="deleted-songs">Deleted Songs</NavLink>

  </nav>
 )
}

export default Navigator
