import { useContext } from "react";
import { GlobalStateContext } from "./Provider";

/* 
Här skapar vi vår reducer i en custom hook, 
för att enklare kunna konsumera vår 
globala state i childkomponenter
*/
export default function useGlobalState() {
  /*
  Vi använder useReducer-hooken för att skapa 
  en state-variabel och en dispatch-funktion 
  baserat på state från context.
  */
  const { state, updateState } = useContext(GlobalStateContext);

  /*
   Vi definierar onChange-funktioner för varje fält som skickar
   en åtgärd till vår reducer-funktion när fältet ändras. Eller, så lägger vi funktionen direkt i onChange-proppen
 */
  function setName(payload, origin) {
    const action = { type: "UPDATE_NAME", payload, origin };
    updateState(action);
  }

  function setEmail(payload, origin) {
    const action = { type: "UPDATE_EMAIL", payload, origin };
    updateState(action);
  }

  function setNewsletter() {
    // eftersom newsletter bara ska togglas bryr jag mig inte om att ta emot några argument.
    // istället vänder jag bara på state.
    // då behöver checkboxkomponenten bara ange onChange={props.setter}
    const action = {
      type: "TOGGLE_NEWSLETTER",
      payload: !state.newsletter,
      origin: "checkbox",
    };
    updateState(action);
  }

  /*
 Sedan returnerar vi ett objekt med de tre värdena och dess setters.
 Hur vi väljer att returnera dem är ju valfritt, men jag tycker att detta sätt är behändigt.
 */
  return {
    name: { value: state.name, setter: setName },
    email: { value: state.email, setter: setEmail },
    newsletter: { value: state.newsletter, setter: setNewsletter },
  };
}
