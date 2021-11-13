import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { chooseSong, deleteHandler, skipSong } from '../../../actions/playerActions'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../../Components/Button/Button'
import classes from "./PlayItem.module.css"

const PlayItem = (props) => {
  const dispatch = useDispatch()
  const { currentSongIndex } = useSelector(state => state.player)




  const chooseSongHandler = (e) => {
    if (!props.isDeleted) {
      dispatch(chooseSong(e, props.index))
    }
  }
  const ondDeleteHandler = () => {
    dispatch(deleteHandler(props.song, props.id, props.isDeleted,props.index))
    
    
  }

  return (
    <div
      className={`${classes["play-item"]} ${currentSongIndex === props.index && !props.isDeleted ? classes.active : ""}`}
      onClick={chooseSongHandler}
      >
      <main >
        <img src="https://www.freepnglogos.com/uploads/compact-disc-png-logo/compact-cd-dvd-disk-company-png-logo-35.png" alt="Disk" />
        <p >
          <span><b>{props.tittle}</b></span>
          <span>{props.artist}</span>
        </p>
      </main>
      <Button
        onClick={ondDeleteHandler}
        isDeleted={props.isDeleted}
      >
        <FontAwesomeIcon icon={props.isDeleted ? faPlusSquare : faTrashAlt}/>
      </Button>
    </div>
  )
}

export default PlayItem
