import { createContext, useContext, useReducer } from "react";


const GlobalStates = createContext();
let initialState = {
  favs: [], 
  theme: "", 
};

//export const ContextGlobal = createContext(undefined);
const globalReducer = (state, action) => {

  switch (action.type) {
    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "" : "dark" };
    default:
      return state;
  }
};
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(globalReducer, initialState);

  let data = {state,dispatch}
  return (
    <GlobalStates.Provider value={data}>
      {children}
    </GlobalStates.Provider>
  );
};

export const useGlobalStates = () => useContext(GlobalStates);