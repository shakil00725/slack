import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCD3K7ObOT7Za0axLRP-J1wRCs4BFmULjA",
    authDomain: "slack-chat-de0eb.firebaseapp.com",
    databaseURL: "https://slack-chat-de0eb.firebaseio.com",
    projectId: "slack-chat-de0eb",
    storageBucket: "slack-chat-de0eb.appspot.com",
    messagingSenderId: "852916396154",
    appId: "1:852916396154:web:5516ba0bbf447e9bf21bc3",
    measurementId: "G-B0BDQFP43F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;