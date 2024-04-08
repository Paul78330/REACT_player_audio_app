import { useSelector } from "react-redux"
import NextButton from "./NextButton"
import PreviousButton from "./PreviousButton"
import TogglePLayButton from "./TogglePLayButton"
import Progress from "./Progress"

export default function PlayerPannel() {
  const playlist = useSelector(state => state.playlist)
  const actualSong = playlist.songs?.find(
    obj => obj.id === playlist.currentMusicID
  )

  return (
    <div className="fixed w-full bottom-0 rounded border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="max-w-[800px] mx-auto mb-2">
        <p className="text-xl text-slate-800 font-semibold">
          {playlist.songs && actualSong.title}
        </p>
        <div className="flex justify-between">
          <p className="text-lg text-gray-900">
            {playlist.songs && actualSong.artist}
          </p>
          <p className="text-lg text-gray-900">
            {playlist.songs?.findIndex(
              song => song.id === playlist.currentMusicID
            ) + 1}{" "}
            / {playlist.songs?.length}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <PreviousButton />
          <TogglePLayButton />
        <NextButton />
      </div>
      <Progress />
    </div>
  )
}

/**
 * playlist.songs?.findIndex(song => song.id === playlist.currentMusicID) trouve l'index de la chanson actuelle dans le tableau playlist.songs. L'opérateur ?. est l'opérateur d'accès optionnel qui permet d'accéder en toute sécurité à songs même si playlist est null ou undefined. + 1 est ajouté parce que les indices de tableau en JavaScript commencent à 0, mais généralement, nous voulons afficher les numéros de chanson à partir de 1.

{" "} : Ceci est un espace inséré pour la mise en forme.

/ {playlist.songs?.length} : Ceci affiche un slash suivi du nombre total de chansons dans la playlist. playlist.songs?.length accède en toute sécurité à la longueur de songs même si playlist est null ou undefined.

En résumé, cet extrait de code affiche l'index de la chanson actuelle et le nombre total de chansons dans la playlist, par exemple "2 / 10" si la deuxième chanson d'une playlist de dix chansons est en cours de lecture.
 */
