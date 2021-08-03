importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTVXQ-aTWHTSEw_LVd1eRehl8nkVUALZo",
  authDomain: "push-notif-sampl.firebaseapp.com",
  projectId: "push-notif-sampl",
  storageBucket: "push-notif-sampl.appspot.com",
  messagingSenderId: "966221115923",
  appId: "1:966221115923:web:bcaabe5f3e5260745305e6",
  measurementId: "G-023PY6EH0S",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.requestPermission();

messaging.onMessage(function (payload) {
  console.log(payload);
});
