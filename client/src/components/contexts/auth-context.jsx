import { createContext, useState } from "react";

export const AuthUserContext = createContext();

const AuthUserProvider = (props) => {
  const [authUser, setAuthUser] = useState({
    email:"",
    data:"",
  });

  return (
    <AuthUserContext.Provider value={[authUser, setAuthUser]}>
      {props.children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;
