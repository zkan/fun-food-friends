import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBut3mucZPUYtHOl0yNcUQLZT6zxH-1xcQ",
  authDomain: "fun-food-friends-238e2.firebaseapp.com",
  databaseURL: "https://fun-food-friends-238e2.firebaseio.com",
  projectId: "fun-food-friends-238e2",
  storageBucket: "",
  messagingSenderId: "979322751152"
}
firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase
