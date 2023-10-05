import React, { createContext, useReducer } from "react";

const GlobalStateContext = createContext();
/*
För att uppdatera state använder vi en reducer med useReducer.
useReducer behöver ett initial state. Här definierar vi den
som ett objekt med tre egenskaper: 
name, email och newsletter. 
*/
const initialState = {
  name: "",
  email: "",
  newsletter: false
};
/*
Vi definierar också en reducer-funktion
som uppdaterar state baserat på 
olika åtgärder (actions) 
som skickas till den.
Vi definierar den utanför vår hook för att den inte
ska behöva definieras varje gång hooken används.
reducerfunktionen ändras ju aldrig (pure).
*/
function reducer(state, action) {
  /* om man skickar med en sträng i t.ex. en key vid namn 
  origin som idientifierar varifrån man kört en dispatch, 
  är det lättare att felsöka om något 
  inte blir som man tänkt. */
  console.log("reducer: ", action?.origin, action.payload, action.type, state);

  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "TOGGLE_NEWSLETTER":
      return {
        ...state,
        newsletter: !state.newsletter
      };
    default:
      return state;
  }
}
const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
