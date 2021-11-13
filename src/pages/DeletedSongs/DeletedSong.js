import React, { useEffect, useState, useCallback } from 'react'
import classes from "./LikedSongs.module.css"
import { useSelector } from 'react-redux'
import PlayItem from './../Playlist/PlayItem/PlayItem';
import NoMusicContent from '../../Components/NoMusicContent/NoMusicContent';


const DeletedSongs = () => {
 const { deletedSongs } = useSelector(state => state.player)

 const isDeleted = true

 const noMusicContent = (
  <NoMusicContent>No Deleted Music</NoMusicContent>
 )

 const playlist = deletedSongs.map((song, index) => (
  <PlayItem
   id={song.id}
   index={index}
   artist={song.artist}
   tittle={song.tittle}
   key={song.key}
   song={song}
   isDeleted={isDeleted}
  />
 ))

 return (
  <div className={classes.likedSongs}>
   {deletedSongs.length > 0 ? playlist : noMusicContent}
  </div>
 )
}

export default DeletedSongs
