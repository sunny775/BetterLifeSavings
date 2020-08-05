import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import SignInModal from "./components/SignIn";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import PasswordReset from "./components/password-reset";
import DepositRequest from "./components/transaction-request/DepositModal";
import WithdrawalRequest from "./components/transaction-request/WithdrawalModal";
import {
  Home,
  Account,
  About,
  Contact,
  EditProfile,
  PolicyTerms,
  Support,
} from "./screens";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import SignInRoute from "./components/SignInRoute";
import EditProfileRoute from "./components/EditProfileRoute";
import AccountRoute from "./components/AccountRoute";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faEnvelope,
  faEllipsisV,
  faShareAlt,
  faCamera,
  faExclamationTriangle,
  faEdit,
  faUserEdit,
  faPencilAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faEnvelope,
  faShareAlt,
  faEllipsisV,
  faCamera,
  faExclamationTriangle,
  faEdit,
  faUserEdit,
  faPencilAlt,
  faPhone
);

const App = () => {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function (registration) {
          console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function (err) {
          console.log("Service worker registration failed, error:", err);
        });
      navigator.serviceWorker.addEventListener("message", (message) =>
        console.log(message)
      );
    }
  }, []);

  return (
    <div className={styles.App}>
      <ReactNotification />
      <DepositRequest />
      <WithdrawalRequest />
      <NavBar />
      <Switch>
        <SignInRoute path="/sign-in">
          <SignInModal />
        </SignInRoute>
        <Route path="/password-reset">
          <PasswordReset />
        </Route>
        <Route path="/privacy-policy">
          <PolicyTerms />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <AccountRoute path="/account">
          <Account />
        </AccountRoute>
        <Route path="/contact">
          <Contact />
        </Route>
        <EditProfileRoute path="/settings/:phone/edit-profile">
          <EditProfile />
        </EditProfileRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
