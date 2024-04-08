// Définition de la fonction formatValue
export default function formatValue(val) {
  // Conversion de la valeur en minutes en utilisant la division entière par 60
  const currentMin = Math.trunc(val / 60)
  // Récupération du reste de la division par 60 pour obtenir les secondes
  let currentSec = Math.trunc(val % 60)

  // Si les secondes sont inférieures à 10, on ajoute un zéro devant pour respecter le format mm:ss
  if(currentSec < 10) {
    currentSec = `0${currentSec}`
  }

  // Retourne la valeur formatée en minutes et secondes
  return `${currentMin}:${currentSec}`
}

/**
 * Cette fonction est utile pour afficher le temps de manière lisible dans une interface utilisateur, par exemple pour afficher la durée d'une chanson ou la position actuelle dans une chanson.
 */