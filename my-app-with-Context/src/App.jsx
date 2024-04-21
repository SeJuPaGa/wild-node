import { useState } from "react";
import "./App.css";
import UserProfile from "./Components./UserProfile";
import { UserContext } from "./Components./UserContext";

function App() {
  //Création du state isOnline avec useState
  const [isOnline, setIsOnline] = useState(false);

  return (
    //utilisation du provider pour passer isOnline et setIsOnline
    <UserContext.provider value={{ isOnline, setIsOnline }}>
      <UserProfile />
    </UserContext.provider>
  );
}

export default App;
