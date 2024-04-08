// Importation des hooks nécessaires
import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
// Importation des actions Redux
import { fillDurationVariables, updateProgress } from "../features/progress"

// Définition du composant AudioPlayer
export default function AudioPlayer() {
  // Utilisation du hook useDispatch pour obtenir la fonction dispatch de Redux
  const dispatch = useDispatch()
  // Utilisation du hook useSelector pour accéder à l'état de la playlist dans le store Redux
  const playlist = useSelector(state => state.playlist)
  // Utilisation du hook useRef pour créer une référence à l'élément audio
  const audioRef = useRef()

  // Utilisation du hook useEffect pour gérer la lecture et la pause de l'audio
  // en fonction de l'état de la playlist
  useEffect(() => {
    if(playlist.songs && playlist.play) {
      // Si la playlist a des chansons et que play est vrai, lance la lecture
      audioRef.current.play()
    }
    else {
      // Sinon, met l'audio en pause
      audioRef.current.pause()
    }
  }, [playlist])

  // Définition de la fonction handleLoadedData qui est appelée lorsque les données audio sont chargées
  function handleLoadedData(e){
    if(playlist.songs) {
      // Si la playlist a des chansons, dispatch l'action fillDurationVariables
      // avec le temps courant et la durée totale de l'audio
      dispatch(fillDurationVariables({
        currentTime: e.target.currentTime,
        totalDuration: e.target.duration,
      }))
    }
  }

  // Définition de la fonction handleTimeUpdate qui est appelée lorsque le temps courant de l'audio est mis à jour
  function handleTimeUpdate(e) {
    // Dispatch l'action updateProgress avec le temps courant de l'audio
    dispatch(updateProgress(e.target.currentTime))
  }

  // Rendu du composant
  return (
    <audio 
    className="outline-none"
    id="audio-player"
    // Le src de l'audio est défini en trouvant la chanson avec l'ID currentMusicID dans la playlist
    src={playlist.songs?.find(obj => obj.id === playlist.currentMusicID).url}
    ref={audioRef}
    // Les gestionnaires d'événements pour onLoadedData et onTimeUpdate sont définis
    onLoadedData={handleLoadedData}
    onTimeUpdate={handleTimeUpdate}
    ></audio>
  )
}