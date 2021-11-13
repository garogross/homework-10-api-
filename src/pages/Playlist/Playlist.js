import React,{useEffect,useState} from 'react'
import classes from "./Playlist.module.css"
import { useSelector } from 'react-redux'
import PlayItem from './PlayItem/PlayItem'
import NoMusicContent from '../../Components/NoMusicContent/NoMusicContent'


const Playlist = () => {
 const { songs,  } = useSelector(state => state.player)

 const isDeleted = false

 const playlist = songs
  .sort((s1, s2) => s1.id - s2.id)
  .map((song, index) => (
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
 const noMusicContent = (
  <NoMusicContent>No Music</NoMusicContent>
 )

 return (
  <div className={classes.playlist}>
   {songs.length > 0 ? playlist : noMusicContent}
  </div>
 )
}

export default Playlist
