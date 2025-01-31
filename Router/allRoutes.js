import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("/signin", "Connexion", "/pages/signin.html"),
  new Route("/signup", "Deconnexion", "/pages/signup.html"),
  new Route("/account", "Mon Compte", "/pages/account.html"),
  new Route("/editpassword", "Modification", "/pages/editpassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Mood Food";
