import React, { useState, useRef, useEffect } from 'react'
import classes from "./Player.module.css"
import Controls from "./Controls/Controls"
import PlayerDetails from "./PlayerDetails/PlayerDetails"
import { useSelector,useDispatch } from 'react-redux'
import { autoSkip, skipSong } from '../../actions/playerActions'


import track0 from "../../audio/track1.mp3"
import track2 from "../../audio/track2.mp3"
import track3 from "../../audio/track3.mp3"
import track4 from "../../audio/track4.mp3"
import track5 from "../../audio/track5.mp3"
import track6 from "../../audio/track6.mp3"
import track7 from "../../audio/track7.mp3"
import track8 from "../../audio/track8.mp3"
import track9 from "../../audio/track9.mp3"
import track10 from "../../audio/track10.mp3"


const audios = [track0, track2, track3, track4, track5, track6, track7, track8, track9, track10]


const Player = () => {
  const [currTime,setCurrTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume,setVolume] = useState(1)
  const [isVolumeOff, setIsVolumeOff] = useState(false)


  const audioEl = useRef(null)

  
  const { currentSongIndex, songs,isPlaying } = useSelector(state => state.player)
  const dispatch = useDispatch()


  let currSong = songs.find((song,index) => index === currentSongIndex)
  
  useEffect(() => {
    if (!isVolumeOff) {
      audioEl.current.volume = volume
    } else {
      audioEl.current.volume = 0
    }
    if(isPlaying){
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
    if(songs.length === 0){
      audioEl.current.pause()

    }
  })

  const volumeChangeHandler = event => {
    setVolume(event)
    audioEl.current.volume = event
    setIsVolumeOff(audioEl.current.volume === 0)
  }

  const onCanPlayHandler = e => {
    setDuration(e.target.duration)
  }

  const currTimeChangeHandler = event => {
    let compute = (event * duration) / 100
    setCurrTime(compute)
    audioEl.current.currentTime = compute
  }
  const volumeOffHandler = () => {
    setIsVolumeOff(!isVolumeOff)
  }

  const autoSkipHandler = () => {
    dispatch(skipSong())
  }


  return (
    <div 
     className={`${classes.player} ${songs.length === 0 ? classes.hidden : ""}`}
     >
      <div className={classes["player-content"]}>
        
        <audio
          src={songs.length > 0 ? songs[currentSongIndex].audio : null} 
          ref={audioEl}
          onTimeUpdate={(e) => setCurrTime(e.target.currentTime)}
          onCanPlay={onCanPlayHandler}
          onEnded={autoSkipHandler}
        ></audio>
      
      <Controls
        audioCurrentTime={currTime}
        setCurrTime={setCurrTime}
        dur={duration}
          currTimeChangeHandler={currTimeChangeHandler}
        />
        <PlayerDetails
          song={currSong}
          volume={volume}
          volumeChangeHandler={volumeChangeHandler}
          isVolumeOff={isVolumeOff}
          volumeOffHandler={volumeOffHandler}
          setIsVolumeOff={setIsVolumeOff}

      />
      </div>
    </div>
  )
}

export default Player

