import { createContext } from "react";
//création du contexte avec une valeur par défaut
export const UserContext = createContext({
  isOnline: false,
  setIsOnline: () => {},
});

export default UserContext;
