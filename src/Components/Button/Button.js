import React,{} from 'react'
import classes from "./Button.module.css"


const Button = (props) => {


 return (
  <button
   onClick={props.onClick}
   className={`${classes.btn} ${!props.isDeleted ? classes.delete : classes.add}`}
  >
   {props.children}
  </button>
 )
}

export default Button
