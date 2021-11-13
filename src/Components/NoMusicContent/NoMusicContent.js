import React from 'react'
import classes from "./NoMusicContent.module.css"


const NoMusicContent = (props) => {
 return (
  <h1 className={classes["no-music"]}>{props.children}</h1>
 )
}

export default NoMusicContent
