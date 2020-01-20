import app from "../../firebaseConfig";

export const createNewUser = async values => {
  if (!values) {
    return;
  }
  // async ask server if domain is valid
  await app
    .auth()
    .createUserWithEmailAndPassword(values.emailAddress, values.password)
    .then(() => {
      // route to app
      return "success!";
    })
    .catch(e => {
      return e.message;
    });
};

export const loginUser = async values => {
  if (!values) {
    return;
  }
  return await app
    .auth()
    .signInWithEmailAndPassword(values.emailAddress, values.password)
    .then(() => {
      // route to app
      return "success!";
    })
    .catch(e => {
      return e.message;
    });
};

export const logout = async () => {
  return await app.auth().signOut();
};

export const getCurrentUser = async () => {
  let rawUser = await app.auth().currentUser;
  return (
    {
      uid: rawUser.uid,
      displayName: rawUser.displayName,
      photoURL: rawUser.photoURL,
      email: rawUser.email,
      emailVerified: rawUser.emailVerified,
      phoneNumber: rawUser.phoneNumber,
      isAnonymous: rawUser.isAnonymous
    } || {}
  );
};
