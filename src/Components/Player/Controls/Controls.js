import React, { useState } from 'react'
import classes from "./Controls.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { skipSong, isPlayingChange } from './../../../actions/playerActions';

const Controls = (props) => {
  const dispatch = useDispatch()

  const { isPlaying } = useSelector(state => state.player)
  const [isPressed,setIsPressed] = useState(false)


  const onChangeHandler = e => {
    props.currTimeChangeHandler(e.target.value)
  }

  const isPlayingHandler = () => {
    dispatch(isPlayingChange())
  }

  const prevSongHandler = () => {
    dispatch(skipSong(false))

  }
  const nextSongHandler = () => {
    dispatch(skipSong(true))

  }

  const currTimePercentage = props.dur ? (props.audioCurrentTime * 100) / props.dur : 0
  return (
    <div className={classes.controls}>
      <div className={classes.buttons}>
        <button onClick={prevSongHandler}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          onClick={isPlayingHandler} 
          
          >
          {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}

        </button>
        <button onClick={nextSongHandler}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
      <div className={classes["progress-bar"]}>
        <input
          type="range"
          min="0"
          max="100"
          value={currTimePercentage}
          style={{
            backgroundSize: `${currTimePercentage}% 100%`
          }}
          onChange={onChangeHandler}
        />
      </div>


    </div>
  )
}

export default Controls
