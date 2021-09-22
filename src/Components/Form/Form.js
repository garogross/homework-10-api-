import React,{useRef} from 'react'
import classes from "./Form.module.css"

const Form = (props) => {
 const inputRef = useRef("")

 const inputRefHandler = (e) => {
  e.preventDefault()
  const inputValue = inputRef.current.value
  props.fetchHandler(inputValue)
 }
 return (
  <form className={classes.form} onSubmit={inputRefHandler}>
   <input type="text" ref={inputRef}/>
   <button type="submit">Search</button>
  </form>
 )
}

export default Form
