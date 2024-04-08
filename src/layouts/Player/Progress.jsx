// Importation des ressources et hooks nécessaires
import { useSelector } from "react-redux"
import formatValue from "../../utils/formatValue";

// Définition du composant Progress
export default function Progress() {
  // Utilisation du hook useSelector pour accéder à l'état de la progression dans le store Redux
  const progressData = useSelector(state => state.progress)

  // Définition de la fonction handleProgressClick qui est appelée lorsque la barre de progression est cliquée
  function handleProgressClick(e) {
    // Récupération de l'élément audio
    const player = document.getElementById("audio-player")
    // Récupération des dimensions de la barre de progression
    const rect = e.target.getBoundingClientRect() //getBoundingClientRect() renvoie les coordonnées et la position de la barre de progression
    const width = rect.width //rect.width renvoie la largeur de la barre de progression
    // Calcul de la position du clic par rapport à la gauche de la barre de progression
    const x = e.clientX - rect.left //e.clientX renvoie la position du clic en x par rapport à la gauche de la fenêtre et rect.left renvoie la position de la barre de progression en x 
    // Mise à jour du temps actuel de l'audio en fonction de la position du clic
    player.currentTime = (x / width) * progressData.totalDuration
  }

  // Rendu du composant
  return (
    <div className="max-w-[800px] mx-auto">
      <div 
      // Le gestionnaire d'événements pour onClick est défini
      onClick={handleProgressClick}
      className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden">
        <div 
        // La largeur de la div interne est définie en fonction du temps actuel et de la durée totale de l'audio
        style={{transform: `scaleX(${progressData.current / progressData.totalDuration})`}}
        className="bg-indigo-400 origin-left h-full pointer-events-none"></div>
      </div>
      
      <div className="flex justify-between"
      //Affichage du temps actuel et de la durée totale de l'audio
      >
        <span>{formatValue(progressData.current)}</span>
        <span>{formatValue(progressData.totalDuration)}</span>
      </div>
    </div>
  )
}

/**
 * Ce composant affiche une barre de progression qui représente la durée totale et la durée actuelle de la chanson en cours de lecture. Lorsqu'on clique sur la barre de progression, la chanson avance ou recule en fonction de l'endroit où l'on a cliqué. Il utilise le hook useSelector pour accéder à l'état de la progression dans le store Redux.
 */