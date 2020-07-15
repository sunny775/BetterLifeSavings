importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyC5cNZ9pwoZftFNLtmSA-wiyIJDa4oOBBQ",
  authDomain: "betterlifesavings-dev.firebaseapp.com",
  databaseURL: "https://betterlifesavings-dev.firebaseio.com",
  projectId: "betterlifesavings-dev",
  storageBucket: "betterlifesavings-dev.appspot.com",
  messagingSenderId: "327003514820",
  appId: "1:327003514820:web:216e1df477f9b4de14e691",
  measurementId: "G-930DCXE3KC",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
     console.log('[firebase-messaging-sw.js] Received background message ', payload);
     // Customize notification here
     const notificationTitle = 'Background Message Title';
     const notificationOptions = {
       body: 'Background Message body.',
       icon: '/apple-touch-icon.png'
     };
   
     return self.registration.showNotification(notificationTitle,
       notificationOptions);
   });

