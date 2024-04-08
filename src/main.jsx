// Importation des bibliothèques nécessaires
import React from "react"
import ReactDOM from "react-dom/client"
// Importation du composant principal de l'application
import App from "./App.jsx"
// Importation du fichier CSS global
import "./index.css"
// Importation du store Redux
import { store } from "./store.js"
// Importation du composant Provider de react-redux
import { Provider } from "react-redux"

// Utilisation de ReactDOM pour rendre l'application React dans l'élément DOM avec l'ID "root"
// Le composant Provider est utilisé pour fournir le store Redux à l'application
// Le composant App est le composant principal de l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  //Le composant Provider de react-redux rend le store Redux disponible pour tous les composants de l'application qui sont enveloppés à l'intérieur. Cela signifie que tous les composants de votre application peuvent accéder au store Redux et dispatch des actions.


)