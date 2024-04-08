// Importation des ressources et hooks nécessaires
import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import { toggleLecture } from "../../features/playlist"

// Définition du composant TogglePlayButton
export default function TogglePlayButton() {
  // Utilisation du hook useSelector pour accéder à l'état de la playlist dans le store Redux
  const playlist = useSelector(state => state.playlist)
  // Utilisation du hook useDispatch pour obtenir la fonction dispatch de Redux
  const dispatch = useDispatch()

  // Rendu du composant
  return (
    <button
      // Le gestionnaire d'événements pour onClick est défini pour dispatch l'action toggleLecture
      onClick={() => dispatch(toggleLecture())}
      className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none">
      <img
        // L'icône du bouton change en fonction de l'état de lecture
        className="w-20 h-20"
        src={playlist.play ? pause : play}
        alt="toggle button"
      />
    </button>
  )
}

/**
 * Ce composant affiche un bouton avec une icône "play" ou "pause" en fonction de l'état de lecture. Lorsqu'il est cliqué, il dispatch l'action toggleLecture pour changer l'état de lecture. Il utilise le hook useSelector pour accéder à l'état de la playlist dans le store Redux et le hook useDispatch pour dispatch l'action.
 */