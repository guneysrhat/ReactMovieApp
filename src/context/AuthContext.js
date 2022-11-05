import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase-config";
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  onAuthStateChanged(auth, (validUser) => {
    setCurrentUser(validUser);
  });
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
