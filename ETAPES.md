## ETAPES

##### intro et mise en place de Redux

1- Installer les bibliothèques :

    - 	react-redux ; Reduxjs-toolkit

2- Comment editer ma liste de musique et comment l'afficher :

    - 	Editer un module de donnée /data/playlist.json

    -	Editer notre 1er features playlist.js qui va carractériser notre liste de musique

3- Editer store.js

#### Mise en place de l'audio et du player

4- Editer la composeant /components/PlayList.js

5- Wrapper notre app par un provider dans main.jsx

6- Editer /components/AudioPlayer.js

#### Créer un panneau de fonctionnalités audio

6- Configurer les rendus des composants de gestion de l'audio /layouts/Player :

    - 	NextButton.jsx

    -	PlayerPanel.jsx

    -	PreviousButton.jsx

#### Ajout des fonctionnalité de play/pause

7- Editer /layouts/Player/TooglePlayButton.jsx

#### Gérér l'avancement de la musique

7- Editer notre 2eme features features/progress.js

8- Ajouter notre nouveau feature à notre store dans store.js

9- Configurer les gestionnaire d'évent handleLoadedData et handleTimeUpdate dans le composant /components/AudioPlayer.jsx

#### Ajouter la fonctionnalité de clic sur la barre de progression

8- Editer la configuration pour le format de nos valeurs dans /utils/formatValue.js

9- Finir la configuration de /layouts/Player/Progress.jsx

#### Coder la fonctionnalité de changement de musique

10-	Ajouter la logique dans nos composants de gestion de l'audio /layouts/Player :

    -	NexButton.jsx

    -	PreviousButton.jsx

11- Editer mon reducer changeSong dans /features/Playlist puis l'implémenter dans l'évènement onClick de nos `<li>` dans le composant /components/Playlist.jsx afin de pouvoir changer de musique
