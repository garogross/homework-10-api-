import React from 'react'
import classes from "./ImgItem.module.css"

const ImgItem = (props) => {


 return (
  <div className={classes["img-div"]}>
   <img
    src={props.src}
    alt={props.alt}
    id={props.key}
    className={classes.img}

   />
   <h2>{props.alt}</h2>
  </div>
 )
}

export default ImgItem
