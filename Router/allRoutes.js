import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Deconnexion", "/pages/auth/signup.html"),
  new Route("/account", "Mon Compte", "/pages/auth/account.html"),
  new Route("/editpassword", "Modification", "/pages/auth/editpassword.html"),
  new Route("/reservation", "Vos Réservations", "/pages/resa/reservation.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Mood Food";
