import { useState, useEffect } from "react";
import { app } from "../config/firebase";
import { successNotice } from "../utils/alerts/userUpdate.success";
// import notificationService from "../services/notifications";

function sendTokenToServer(currentToken) {
  const user = app.auth.currentUser;
  if (user) {
    app.db
      .collection("deviceTokens")
      .doc(user.uid)
      .set(
        {
          deviceToken: currentToken,
        },
        { merge: true }
      )
      .then(function () {
        setTokenSentToServer(true);
        console.log("Token sent to server");
      })
      .catch(function (error) {
        console.error("Error sending token: ", error);
      });
  }
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem("sentToServer", sent ? "1" : "0");
}

function useGetUser() {
  const [data, setData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [deviceToken, setDeviceToken] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [dpLoading, setDpLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [adminDevices, setAdminDevices] = useState([]);

  const { auth, db, storageRef, messaging } = app;
  const user = auth.currentUser;

  useEffect(() => {
    messaging
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          setDeviceToken(currentToken);
          // sendTokenToServer(currentToken);
          // notificationService.notifyNewUser(currentToken)
        } else {
          console.log(
            "No Instance ID token available. Request permission to generate one."
          );
          setTokenSentToServer(false);
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        setTokenSentToServer(false);
      });
    // Callback fired if Instance ID token is updated.
    messaging.onTokenRefresh(() => {
      messaging
        .getToken()
        .then((refreshedToken) => {
          console.log("Token refreshed.");
          setTokenSentToServer(false);
          setDeviceToken(refreshedToken);
          // sendTokenToServer(refreshedToken);
          // ...
        })
        .catch((err) => {
          console.log("Unable to retrieve refreshed token ", err);
        });
    });
    messaging.onMessage((payload) =>
      console.log("Message received. ", payload)
    );
  });

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(function (user) {
      const data = user || {};
      setData({ isAuth: !!user, ...data });
      sendTokenToServer(deviceToken);
      !user && setUserDetails({});
      // getUserDetails(user);
    });
    return unregisterAuthObserver;
  }, [auth, deviceToken]);

  useEffect(() => {
    if (data) {
      if (data.uid) {
        const unsubscribe = db
          .collection("users")
          .doc(data.uid)
          .onSnapshot(function (doc) {
            setUserDetails({ ...doc.data() });
            console.log("Current data: ", doc.data());
            console.log("user:", data);
          });
        return () => unsubscribe();
      }
    }
  }, [db, data]);

  /*useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .where("role", "==", 1)
      .onSnapshot(function (querySnapshot) {
        const admins = [];
        const adminDevices = [];
        querySnapshot.forEach(function (doc) {
          admins.push({ id: doc.id, ...doc.data() });
          adminDevices.push(doc.data().deviceToken);
        });
        setAdmins(admins);
        setAdminDevices(adminDevices);
      });

    return () => unsubscribe();
  }, [db]);*/

  const whenAuth = (isNewUser) => {
    setNewUser(isNewUser);
  };

  // window.localStorage.setItem("sentToServer", "0");

  const hidePreview = () => setShowPreview(false);
  const openPreview = () => setShowPreview(true);

  const selectUserPhoto = (options) => {
    setFile(options.file);
    setImagePreviewUrl(options.imagePreviewUrl);
    openPreview();
  };

  const updateDetails = async (details) => {
    if (user) {
      setDetailLoading(true);
      try {
        const doc = db
          .collection("users")
          .doc(user.uid)
          .set(
            {
              ...details,
            },
            { merge: true }
          )
          .then(() => {
            user
              .updateProfile({
                displayName: details.displayName,
              })
              .then(function () {
                setDetailLoading(false);
                successNotice(
                  "Profile details successfully updated. You can now return to account page"
                );
                return doc;
              });
          });
        return doc;
      } catch (error) {
        setError(error);
        console.log(error);
        return error;
      }
    }
  };

  const putNewFile = (fileName, metadata, uid) => {
    storageRef
      .child("user-images/" + fileName)
      .put(file, metadata)
      .then(function (snapshot) {
        snapshot.ref.getDownloadURL().then(function (url) {
          console.log("File available at", url);
          db.collection("users")
            .doc(uid)
            .set(
              {
                ...snapshot.metadata.customMetadata,
                url,
              },
              { merge: true }
            )
            .then(() => {
              successNotice("Profile photo successfully updated.");
              setDpLoading(false);
            });
        });
      });
  };

  const uploadDp = (file) => {
    const fileName = user.uid + "-" + file.name;
    const { phoneNumber, uid } = user;
    const metadata = {
      contentType: file.type,
      customMetadata: {
        phoneNumber,
        fileName,
      },
    };
    setDpLoading(true);
    try {
      if (userDetails.fileName) {
        var ref = storageRef.child(`user-images/${userDetails.fileName}`);
        ref.delete().then(function () {
          putNewFile(fileName, metadata, uid);
        });
      } else {
        putNewFile(fileName, metadata, uid);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const signOut = () =>
    auth
      .signOut()
      .then(function () {
        console.log("sign out successful");
      })
      .catch(function (error) {
        console.log("error");
      });

  return {
    data,
    userDetails,
    newUser,
    detailLoading,
    dpLoading,
    whenAuth,
    file,
    showPreview,
    imagePreviewUrl,
    selectUserPhoto,
    hidePreview,
    openPreview,
    error,
    updateDetails,
    uploadDp,
    deviceToken,
    admins,
    adminDevices,
    signOut,
  };
}

export default useGetUser;

/*
const find = () => {
    setLoading(true);
    userService
      .getUser()
      .then((user) => {
        setData(user);
        setLoading(false);
      })
      .catch((error) => {
        setData(error);
        setLoading(false);
      });
  };

  const save = (value) => {
    setLoading(true);
    userService
      .createUser(value)
      .then((user) => {
        console.log("postresutl:", user);
        setData({ isAuth: true, ...user });
        setLoading(false);
      })
      .catch((err) => {
        console.log("postresutl:", err);
        setData({ isAuth: false, ...err });
        setLoading(false);
      });
  };
  const login = async (options) => {
    setLoading(true);
    const user = await userService.login(options);
    setData(user);
    setLoading(false);
  };
*/
