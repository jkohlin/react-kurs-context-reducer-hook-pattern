import { useContext, useReducer } from "react";
import { GlobalStateContext, GlobalStateProvider } from "./Provider";

/* 
Här skapar vi vår reducer i en custom hook, 
för att enklare kunna konsumera vår 
globala state i childkomponenter
*/
export default function useStateReducer() {
  /*
  Vi använder useReducer-hooken för att skapa 
  en state-variabel och en dispatch-funktion 
  baserat på state från context.
  */
  const cstate = useContext(GlobalStateContext);

  /*
   Vi definierar onChange-funktioner för varje fält som skickar
   en åtgärd till vår reducer-funktion när fältet ändras. Eller, så lägger vi funktionen direkt i onChange-proppen
 */
  function setName(payload, origin) {
    const action = { type: "UPDATE_NAME", payload, origin };
    dispatch(action);
  }

  function setEmail(payload, origin) {
    const action = { type: "UPDATE_EMAIL", payload, origin };
    dispatch(action);
  }

  function setNewsletter(origin) {
    const action = { type: "TOGGLE_NEWSLETTER", origin };
    dispatch(action);
  }

  /*
 Sedan returnerar vi ett objekt med de tre värdena och dess setters.
 Hur vi väljer att returnera dem är ju valfritt, men jag tycker att detta sätt är behändigt.
 */
  return {
    name: { value: state.name, setter: setName },
    email: { value: state.email, setter: setEmail },
    newsletter: { value: state.newsletter, setter: setNewsletter }
  };
}
