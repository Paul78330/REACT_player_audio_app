// Importation de la fonction createSlice de Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial de la tranche de progression
const initialState = {
  current: 0, // Temps actuel de la lecture audio
  totalDuration: 0 // Durée totale de l'audio
}

// Création de la tranche de progression
export const progress = createSlice({
  name: "progress", // Nom de la tranche
  initialState, // État initial
  reducers: { // Définition des réducteurs
    // Remplit les variables de durée
    fillDurationVariables: (state, action) => {
      // Met à jour le temps actuel de la lecture audio
      state.current = action.payload.currentTime
      // Met à jour la durée totale de l'audio
      state.totalDuration = action.payload.totalDuration
    },
    // Met à jour la progression
    updateProgress: (state, action) => {
      // Met à jour le temps actuel de la lecture audio
      state.current = action.payload
    }
  }
})

// Exportation des actions générées par createSlice
export const {fillDurationVariables, updateProgress} = progress.actions 

// Exportation du réducteur généré par createSlice
export default progress.reducer