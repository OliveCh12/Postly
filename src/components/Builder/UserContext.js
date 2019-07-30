import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    birth: "",
    situation: "",
    adress: "",
    phone: "",
    email: "",
    language: [
      {
        name: "English",
        level: "Confirmed"
      }
    ],
    career: [],
    education: [],
    skills: []
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
