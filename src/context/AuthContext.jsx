// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//   }, []);

//   const toggleAuth = () => {
//     const newStatus = !loggedIn;
//     localStorage.setItem("isLoggedIn", newStatus.toString());
//     setLoggedIn(newStatus);
//   };
//   return (
//     <AuthContext.Provider value={{ loggedIn, toggleAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username") || "";
    setLoggedIn(isLogged);
    setUsername(storedUsername);
  }, []);

  const toggleAuth = (user = null) => {
    if (!loggedIn) {
      // Logging in
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", user);
      setUsername(user);
      setLoggedIn(true);
    } else {
      // Logging out
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("username", "");
      setUsername("");
      setLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userName, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
