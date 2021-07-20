const firebaseConfig = {
  apiKey: "AIzaSyBN-GoLoQmBCf0QlnDwgKeJuhcbmLTHIsc",
  authDomain: "mocca-contacto.firebaseapp.com",
  projectId: "mocca-contacto",
  storageBucket: "mocca-contacto.appspot.com",
  messagingSenderId: "754691537706",
  appId: "1:754691537706:web:5956e938e9febdccd83c53"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  const db = firestore.collection("contactosData");
      