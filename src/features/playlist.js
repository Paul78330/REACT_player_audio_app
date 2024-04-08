// Importation de la fonction createSlice de Redux Toolkit
import {createSlice} from "@reduxjs/toolkit"

// Définition de l'état initial de la tranche
const initialState = {
  songs: undefined, // Liste des chansons
  play: false, // Indicateur si la musique est en cours de lecture ou non
  currentMusicID: undefined // ID de la chanson actuellement sélectionnée
}

// Création de la tranche d'état avec createSlice
export const playlist = createSlice({
  name: "playlist", // Nom de la tranche
  initialState, // État initial
  reducers: { // Les réducteurs qui manipulent l'état de la tranche
    // Ajoute les chansons de base à la playlist et définit la première chanson comme la chanson actuelle
    addBaseSongs: (state, action) => {
      state.songs = action.payload 
      state.currentMusicID = action.payload[0].id
    }, 
    // Bascule l'état de lecture de la musique
    toggleLecture: (state, action) => {
      state.play = !state.play
    }, 
    // Passe à la chanson suivante dans la playlist
    nextSong: (state, action) => {
      if(action.payload === state.songs.length){ //Si on est à la fin de la playlist
        state.currentMusicID = state.songs[0].id //retour au début de la playlist
      }
      else {
        state.currentMusicID = state.songs[action.payload].id //sinon on passe la chanson (suivante)
      }
    }, 
    // Passe à la chanson précédente dans la playlist
    previousSong: (state, action) => {
      if(action.payload < 0){ //Si on est au début de la playlist
        state.currentMusicID = state.songs[state.songs.length - 1].id //retour à la fin de la playlist
      }
      else {
        state.currentMusicID = state.songs[action.payload].id //sinon on passe la chanson (précédente)
      }
    }, 
    // Change la chanson actuelle
    changeSong: (state, action) => {
      state.currentMusicID = action.payload
    }, 
  }
})

//Middleware pour récupérer les données de la playlist
export function getMusicsData(action) {

        //Thunk permettant d'effectuer des effets secondaires asynchrones
  return function(dispatch, getState) { 
    fetch("/data/playlist.json")
    .then(data => data.json())
    .then(data => dispatch(addBaseSongs(data.playlist)))
  }
}

// Exportation des actions générées par createSlice
export const {
  addBaseSongs,
  toggleLecture,
  nextSong,
  previousSong,
  changeSong
} = playlist.actions
// Exportation du réducteur généré par createSlice
export default playlist.reducer


/**
 *
Ce code est écrit en JavaScript et utilise Redux Toolkit pour gérer l'état de l'application. Il définit une tranche d'état pour une playlist de musique.

Chaque fonction dans l'objet reducers est un réducteur qui manipule l'état de la tranche. Les réducteurs sont des fonctions pures qui prennent l'état actuel et une action, et retournent un nouvel état.
 */