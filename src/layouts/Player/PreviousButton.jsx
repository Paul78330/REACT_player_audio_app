// Importation des ressources et hooks nécessaires
import prevIcon from "../../assets/prev-icon.svg"
import {useSelector, useDispatch} from "react-redux"
import {previousSong} from "../../features/playlist"

// Définition du composant PreviousButton
export default function PreviousButton() {
  // Utilisation du hook useSelector pour accéder à l'état de la playlist dans le store Redux
  const playlist = useSelector(state => state.playlist)
  // Utilisation du hook useDispatch pour obtenir la fonction dispatch de Redux
  const dispatch = useDispatch()

  // Définition de la fonction handleClick qui est appelée lorsque le bouton est cliqué
  function handleClick(){
    if(playlist.songs) {
      // Si la playlist a des chansons, trouve l'index de la chanson précédente
      const previousIndex = playlist.songs.findIndex(song => song.id === playlist.currentMusicID) - 1
      // Dispatch l'action previousSong avec l'index de la chanson précédente
      dispatch(previousSong(previousIndex))
    }
  }

  // Rendu du composant
  return (
    <button 
    // Le gestionnaire d'événements pour onClick est défini
    onClick={handleClick}
    className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center">
      <img src={prevIcon} className="w-5 h-5" alt="previous song" />
    </button>
  )
}

/**
 *
Ce code définit un composant React appelé PreviousButton. Ce composant utilise les hooks useSelector et useDispatch de Redux pour interagir avec le store Redux. Lorsqu'il est cliqué, il déclenche l'action previousSong pour passer à la chanson précédente dans la playlist.

Ce composant affiche un bouton avec une icône "previous". Lorsqu'il est cliqué, il trouve l'index de la chanson précédente dans la playlist et dispatch l'action previousSong avec cet index pour passer à la chanson précédente. Il utilise le hook useSelector pour accéder à l'état de la playlist dans le store Redux et le hook useDispatch pour dispatch l'action.
 */