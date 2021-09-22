import React from 'react'
import classes from "./LoadingSpinner.module.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoadingSpinner = () => {
 return (
  <div className={classes.container}>
   <Loader
    type="BallTriangle"
    color="rgb(4, 67, 92)"
    height={100}
    width={100}
    timeout={10000} 
   />
  </div>
 )
}

export default LoadingSpinner
