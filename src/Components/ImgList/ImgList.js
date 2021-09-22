import React from 'react'
import classes from "./ImgList.module.css"
import ImgItem from "./ImgItem/ImgItem"


const ImgList = (props) => {
 return (
  <div className={classes["img-list"]}>
   {props.imgData.map(img => (
    <ImgItem
     key={img.id}
     src={img.url}
     alt={img.alt}


    />
   ))}
  </div>
 )
}

export default ImgList
