// Importation de la fonction configureStore de Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importation des réducteurs pour les tranches d'état 'playlist' et 'progress'
import playlist from "./features/playlist";
import progress from "./features/progress";

// Cette fonction est utilisée pour créer le store Redux
// Création du store Redux en utilisant configureStore
// Le store est l'objet qui détient l'état global de l'application
// Ici, nous définissons deux tranches d'état : 'playlist' et 'progress'
// Chaque tranche d'état est gérée par son propre réducteur
export const store = configureStore({
  reducer: {
    playlist, // La tranche d'état 'playlist' est gérée par le réducteur 'playlist'
    progress // La tranche d'état 'progress' est gérée par le réducteur 'progress'
  }
})


// Dans ce code, configureStore est utilisé pour créer le store Redux. Le store est l'objet qui détient l'état global de l'application. Ici, nous définissons deux tranches d'état : 'playlist' et 'progress'. Chaque tranche d'état est gérée par son propre réducteur.