import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/messaging';
import notificationService from '../services/notifications'

const config = {
  apiKey: "AIzaSyC5cNZ9pwoZftFNLtmSA-wiyIJDa4oOBBQ",
  authDomain: "betterlifesavings-dev.firebaseapp.com",
  databaseURL: "https://betterlifesavings-dev.firebaseio.com",
  projectId: "betterlifesavings-dev",
  storageBucket: "betterlifesavings-dev.appspot.com",
  messagingSenderId: "327003514820",
  appId: "1:327003514820:web:216e1df477f9b4de14e691",
  measurementId: "G-930DCXE3KC",
};
const initFirebase = () => {
  const app = firebase.initializeApp(config);
  const messaging = app.messaging();
  messaging.usePublicVapidKey("BDCDzOQS1GNCBNI6IfK37Haq88yU5949jI56Y4XVP5AQsNGqsNVcd4i-maopDIU4CGHpBdyEkHeZAZs8Kl1V5II")
  return {
    db: app.firestore(),
    auth: app.auth(),
    storageRef: app.storage().ref(),
    messaging,
  };
};
export const app = initFirebase();

const { db } = app;

export const uiConfig = (whenAuth, history, deviceToken) => ({
  signInFlow: "popup",

  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: 'NG'
    },
  ],
  tosUrl: "https://betterlifesavings.vercel.app/#privacy-policy",
  privacyPolicyUrl: function () {
    window.location.assign(
      "https://betterlifesavings.vercel.app/#privacy-policy"
    );
  },
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      const { isNewUser } = authResult.additionalUserInfo;
      whenAuth(isNewUser);
      const { phoneNumber, uid } = authResult.user;
      if (isNewUser) {
        db.collection("users")
          .doc(phoneNumber)
          .set({
            uid,
            phoneNumber,
            role: 0,
          })
          .then((docRef) => {
            notificationService.notifyNewUser(deviceToken);
            console.log("docRef:", docRef);
            history.push(`settings/${phoneNumber}/edit-profile`);
          })
          .catch(function (error) {
            console.log("error creating user document:", error);
          });
      } else {
          history.push('/#account')
      }
      return false;
    },
  },
});
