import {
  SKIP_SONG,
  SONG_ENDED,
  CHOOSE_SONG,
  IS_PLAYING,
  RESTORE_SONG,
  DELETE_SONG,
  SONG_INDEX_MINUS,
  SONG_INDEX_PLUS
} from "../constants/index"


export const skipSong = (forwards = true,index) => (dispatch, getState) => {
  const { currentSongIndex, songs } = getState().player
  let temp = currentSongIndex
  if (forwards) {
    temp++
    if (temp > songs.length - 1) {
      temp = 0
    }
  } else {
    temp--
    if (temp < 0) {
      temp = songs.length - 1
    }
  }
  dispatch({
    type: SKIP_SONG,
    temp,
  })
}


export const isPlayingChange = () => dispatch => {
  dispatch({
    type: IS_PLAYING
  })
}

export const chooseSong = (event, index) => dispatch => {
  if (
    event.target.tagName === "BUTTON" ||
    event.target.tagName === "svg" ||
    event.target.tagName === "path"){
    return;
  } else {
    dispatch({
      type: CHOOSE_SONG,
      index,
    })

  }

}



export const deleteHandler = (song, id, isDeleted,index) => (dispatch, getState) => {
  const { songs,deletedSongs,currentSongIndex } = getState().player
  
  if (isDeleted) {
    const restoredSongs = [song, ...songs].sort((s1, s2) => s1.id - s2.id)
    const filterDeletedSongs = deletedSongs.filter(song => song.id !== id)

    dispatch({
      type: RESTORE_SONG,
      restoredSongs,
      filterDeletedSongs

    })
    if(songs.length > 0 && id <= songs[currentSongIndex].id){
      dispatch(skipSong(true))
      console.log(id, songs[currentSongIndex].id ,true)
    } 
  }
  else {

    const filteredSongs = 
    songs
    .sort((s1, s2) => s1.id - s2.id)
    .filter(song => song.id !== id)
    const updateDeletedSongs = [song, ...deletedSongs]
    if(index < currentSongIndex){
      dispatch(skipSong(false))
    }
    else if (currentSongIndex === songs.length - 1) {
      dispatch(skipSong(true))

    }
    dispatch({
      type: DELETE_SONG,
      filteredSongs,
      updateDeletedSongs,
    })
  }

}



