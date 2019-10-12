import * as firebase from "firebase/app"

import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyALZf9XDR4qlLM7_G-VZpEhxijEgscvBgs",
  authDomain: "to-due-due.firebaseapp.com",
  databaseURL: "https://to-due-due.firebaseio.com",
  projectId: "to-due-due",
  storageBucket: "to-due-due.appspot.com",
  messagingSenderId: "234561590338",
  appId: "1:234561590338:web:2ae332428fad72833fc9db",
  measurementId: "G-QMXWQGEVLE"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }