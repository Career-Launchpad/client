import React, { useEffect, useState } from "react";
import "firebase/auth";
import * as firebase from "firebase/app";
import { useContext } from "react";

const AUTH_STATE = {
  PENDING: "PENDING",
  NEEDS_VERIFICATION: "NEEDS_VERIFICATION",
  AUTHENTICATED: "AUTHENTICATED",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED"
};

class AuthService {
  static INSTANCE = undefined;
  firebase = undefined;

  constructor() {
    if (AuthService.INSTANCE) return AuthService.INSTANCE;
    AuthService.INSTANCE = this;
    this.firebase = firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    });
  }

  signup = async user => {
    if (!user) {
      return;
    }
    // async ask server if domain is valid
    return await this.firebase
      .auth()
      .createUserWithEmailAndPassword(user.emailAddress, user.password)
      .then(async () => {
        await this.sendVerificationEmail();
      })
      .catch(error => {
        return { error };
      });
  };

  login = async user => {
    if (!user) {
      return;
    }
    return await this.firebase
      .auth()
      .signInWithEmailAndPassword(user.emailAddress, user.password)
      .catch(error => {
        return { error };
      });
  };

  setUser = rawUser => {
    if (rawUser && rawUser.uid) {
      this.user = {
        uid: rawUser.uid,
        displayName: rawUser.displayName,
        photoURL: rawUser.photoURL,
        email: rawUser.email,
        emailVerified: rawUser.emailVerified,
        phoneNumber: rawUser.phoneNumber,
        isAnonymous: rawUser.isAnonymous
      };
    }
  };

  logout = async () => {
    this.user = null;
    await this.firebase.auth().signOut();
  };

  sendVerificationEmail = async () => {
    let user = await this.firebase.auth().currentUser;
    user.sendEmailVerification();
  };

  getCurrentUser = async () => {
    if (this.user) return this.user;
    let rawUser = await this.firebase.auth().currentUser;
    this.user = rawUser
      ? {
          uid: rawUser.uid,
          displayName: rawUser.displayName,
          photoURL: rawUser.photoURL,
          email: rawUser.email,
          emailVerified: rawUser.emailVerified,
          phoneNumber: rawUser.phoneNumber,
          isAnonymous: rawUser.isAnonymous
        }
      : {};
    return this.user;
  };

  getToken = async () => {
    const auth = await this.firebase.auth();
    return auth.currentUser ? auth.currentUser.getIdToken() : "";
  };
}

const Auth = new AuthService();

const AuthContext = React.createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [value, setValue] = useState({ state: AUTH_STATE.PENDING });
  const safeSetValue = newValue => {
    if (newValue.state !== value.state) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    Auth.firebase.auth().onAuthStateChanged(user => {
      let state = AUTH_STATE.NOT_AUTHENTICATED;
      if (user && user.emailVerified) {
        state = AUTH_STATE.AUTHENTICATED;
      } else if (user && !user.emailVerified) {
        state = AUTH_STATE.NEEDS_VERIFICATION;
      }
      safeSetValue({ user, state });
    });
  });
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { Auth as default, AUTH_STATE, AuthProvider, useAuth };
