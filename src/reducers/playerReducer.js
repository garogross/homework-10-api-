import { 
  SKIP_SONG, 
  SONG_ENDED, 
  IS_PLAYING, 
  CHOOSE_SONG,
  RESTORE_SONG, 
  DELETE_SONG,
  SONG_INDEX_MINUS,
  SONG_INDEX_PLUS
  } from "../constants/index"

import track0 from "../audio/track1.mp3"
import track1 from "../audio/track2.mp3"
import track2 from "../audio/track3.mp3"
import track3 from "../audio/track4.mp3"
import track4 from "../audio/track5.mp3"
import track5 from "../audio/track6.mp3"
import track6 from "../audio/track7.mp3"
import track7 from "../audio/track8.mp3"
import track8 from "../audio/track9.mp3"
import track9 from "../audio/track10.mp3"

const initialState = {
 songs: [
  {
   audio: track0,
   tittle: "Many Men",
   artist: "50 Cent",
   id: 0,
   key: "k1"
  },
  {
   audio: track1,
   tittle: "Knockdown",
   artist: "Basta",
   id: 1,
   key: "k2"
  },
  {
   audio: track2,
   tittle: "Ritmo",
   artist: "Black Eyed Peas ft. J Balvin",
   id: 2,
   key: "k3"
  },
  {
   audio: track3,
   tittle: "Hate Bein Sober",
   artist: "50 Cent, Chief Keef, Wiz Khalifa",
   id: 3,
   key: "k4"
  },
  {
   audio: track4,
   tittle: "Yes",
   artist: "Fat Joe, Cardi B, Anuel AA, Dre",
   id: 4,
   key: "k5"
  },
  {
   audio: track5,
   tittle: "Mallboro",
   artist: "Grant(Staff)",
   id: 5,
   key: "k6"
  },
  {
   audio: track6,
   tittle: "Khalifas Afair",
   artist: "Hambik A'shot",
   id: 6,
   key: "k7"
  },
  {
   audio: track7,
   tittle: "Warriors",
   artist: "Imagine Dragons",
   id: 7,
   key: "k8"
  },
  {
   audio: track8,
   tittle: "Oh My God",
   artist: "Inna",
   id: 8,
   key: "k9"
  },
  {
   audio: track9,
   tittle: "Barz",
   artist: "Latifah",
   id: 9,
   key: "k10"
  },
 ],
 currentSongIndex: 0,
 isPlaying: false,
 deletedSongs: [],
 

}


export const playerReducer = (state = initialState, action) => {
  const {
    type,
    temp,
    id,
    song,
    filteredSongs,
    updateDeletedSongs,
    restoredSongs,
    filterDeletedSongs,
    index
  } = action
 switch (type) {
  case SKIP_SONG:
   return {
    ...state,
    currentSongIndex: temp
     }
  case IS_PLAYING:
    return {
      ...state,
      isPlaying: !state.isPlaying
    }
  case CHOOSE_SONG:
    return {
      ...state,
      isPlaying: true,
      currentSongIndex: index
    }
  case RESTORE_SONG:
    return {
      ...state,
      songs: restoredSongs,
      deletedSongs: filterDeletedSongs,
    }
  case DELETE_SONG:
    return {
      ...state,
      songs: filteredSongs,
      deletedSongs: updateDeletedSongs
    }
  case SONG_INDEX_MINUS:
    return {
      ...state,
      currentSongIndex: state.currentSongIndex - 1
    }  
  case SONG_INDEX_PLUS:
    return {
      ...state,
      currentSongIndex: state.currentSongIndex + 1
    } 
  default :
   return state 
 }
 
}