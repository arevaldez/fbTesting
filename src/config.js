import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyAjYomLERcZZqGlm33pFJUmCy_uRx4jS0Q",
  authDomain: "fir-testing-2c1b9.firebaseapp.com",
  databaseURL: "https://fir-testing-2c1b9.firebaseio.com",
  projectId: "fir-testing-2c1b9",
  storageBucket: "fir-testing-2c1b9.appspot.com",
  messagingSenderId: "424632439161"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
