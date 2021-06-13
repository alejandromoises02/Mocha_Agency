var firebaseConfig = {
    apiKey: "AIzaSyAmpy1kZNVxwMZdwpoDeSNnKSNeo-EvYio",
    authDomain: "moccaagencyform.firebaseapp.com",
    projectId: "moccaagencyform",
    storageBucket: "moccaagencyform.appspot.com",
    messagingSenderId: "40998696112",
    appId: "1:40998696112:web:a02abe24b9d5f1d3c07775"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("contactosData");
      