// Importation des ressources et hooks nécessaires
import nextIcon from "../../assets/next-icon.svg"
import {useSelector, useDispatch} from "react-redux"
import {nextSong} from "../../features/playlist"

// Définition du composant NextButton
export default function NextButton() {
  // Utilisation du hook useSelector pour accéder à l'état de la playlist dans le store Redux
  const playlist = useSelector(state => state.playlist)
  // Utilisation du hook useDispatch pour obtenir la fonction dispatch de Redux
  const dispatch = useDispatch()

  // Définition de la fonction handleClick qui est appelée lorsque le bouton est cliqué
  function handleClick(){
    if(playlist.songs) {
      // Si la playlist a des chansons, trouve l'index de la chanson suivante
      const nextIndex = playlist.songs.findIndex(song => song.id === playlist.currentMusicID) + 1
      // Dispatch l'action nextSong avec l'index de la chanson suivante
      dispatch(nextSong(nextIndex))
    }
  }

  // Rendu du composant
  return (
    <button 
    // Le gestionnaire d'événements pour onClick est défini
    onClick={handleClick}
    className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center">
      <img src={nextIcon} className="w-5 h-5" alt="next song" />
    </button>
  )
}

/**
 *
Ce code définit un composant React appelé NextButton. Ce composant utilise les hooks useSelector et useDispatch de Redux pour interagir avec le store Redux. Lorsqu'il est cliqué, il déclenche l'action nextSong pour passer à la chanson suivante dans la playlist.

Ce composant affiche un bouton avec une icône "next". Lorsqu'il est cliqué, il trouve l'index de la chanson suivante dans la playlist et dispatch l'action nextSong avec cet index pour passer à la chanson suivante. Il utilise le hook useSelector pour accéder à l'état de la playlist dans le store Redux et le hook useDispatch pour dispatch l'action.
 */