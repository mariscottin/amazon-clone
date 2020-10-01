import React, { createContext, useContext, useReducer } from 'react';

//Prepares data layer
export const StateContext = createContext();

// Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
};

//Pull information from data layer
export const useStateValue = () => useContext(StateContext);