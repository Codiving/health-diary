import React, { useReducer } from "react";

const initialState = {
  value: [{ date: "", exercise: {}, order: [], memo: [] }]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, value: action.target };
    default:
      return state;
  }
};

const DataContext = React.createContext();
const DataContextConsumer = DataContext.Consumer;

const DataContextProvider = props => {
  const [dataContext, dispatchData] = useReducer(reducer, initialState);
  const value = { dataContext, dispatchData };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
export { DataContext, DataContextConsumer };
