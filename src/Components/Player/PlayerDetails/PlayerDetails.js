import React from 'react'
import classes from "./playerDetails.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const PlayerDetails = (props) => {

 const onChangeHandler = e => {
  props.volumeChangeHandler(e.target.value / 100)
  // props.volumeOffHandler()

 }

 const onClickHandler = () => {
  props.volumeOffHandler()
 }

 const volumeValue = Math.round(props.volume * 100)
 return (
  <div className={classes["player-details"]}>
   <p className={classes.volume}>
    <button onClick={onClickHandler}>{
     props.isVolumeOff ? <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon> : <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
    }
    
    </button>
    <input
     type="range"
     min="0"
     max="100"
     className={classes["input-range"]}
     onChange={onChangeHandler}
     value={volumeValue}
     style={{ backgroundSize: `${volumeValue}% 100%`}}
    />
   </p>
   <p className={classes.artistName}><b>{props.song ? props.song.artist : "no artist"}</b> - <span>{props.song ? props.song.tittle : "no name"}</span></p>
  </div>
 )
}

export default PlayerDetails
