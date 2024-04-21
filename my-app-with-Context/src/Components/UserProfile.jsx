import { useContext } from "react";
import { UserContext } from "../UserContext";

function UserProfile() {
  //consommation des données du contexte
  const { isOnline, setIsOnline } = useContext(UserContext);

  //Fonction pour basculer la valeur de isOnline
  const toggleOnLineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <>
      <p>{isOnline ? "En ligne" : "Hors-ligne"}</p>
      <button onClick={toggleOnLineStatus}>Changer de statut</button>
    </>
  );
}

export default UserProfile;
