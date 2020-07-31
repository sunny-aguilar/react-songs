import { combineReducers } from "redux";

// reducers
const songsReducer = () => {
  return [
    { title: "Aint Talkin' 'bout Love", duration: "3:47" },
    { title: "What Could Possibly Go Wrong", duration: "3:21" },
    { title: "Lonely Trip", duration: "2:38" },
    { title: "My Future", duration: "4:26" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
