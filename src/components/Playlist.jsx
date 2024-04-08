// Importation des hooks de Redux pour l'accès à l'état et le dispatch des actions
import { useSelector, useDispatch } from "react-redux"
// Importation des actions de Redux depuis le fichier playlist
import { getMusicsData, changeSong } from "../features/playlist"

// Définition du composant Playlist
export default function Playlist() {
  // Utilisation du hook useDispatch pour obtenir la fonction dispatch de Redux
  const dispatch = useDispatch()
  // Utilisation du hook useSelector pour accéder à l'état de la playlist dans le store Redux
  const playlist = useSelector(state => state.playlist)
  // Si la playlist n'a pas encore de chansons, dispatch l'action getMusicsData pour en obtenir
  if(!playlist.songs){
    dispatch(getMusicsData())
  }

  // Rendu du composant
  return (
    <ul className="mt-4 pb-[300px]">
      {/* Si la playlist a des chansons, les affiche en tant que liste */}
      {playlist?.songs?.length && playlist.songs.map(song => (
        // Pour chaque chanson, crée un élément de liste avec un gestionnaire d'événement onClick
        // qui dispatch l'action changeSong avec l'ID de la chanson quand on clique dessus
        <li
          key={song.id}
          onClick={() => dispatch(changeSong(song.id))}
          className="p-2 border-2 font-semibold bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer"
        >
          {/* Affiche le titre et l'artiste de la chanson */}
          <span>{song.title} - </span>
          <span>{song.artist}</span>
        </li>
      ))}
    </ul>
  )
}