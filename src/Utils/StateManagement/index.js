
import React, {createContext, useContext, useReducer} from 'react';

/**
 * crate login context api
 * @type {React.Context<string>}
 */
export const LoginStateContext = createContext('login');

/**
 * create login provider
 * @param reducer
 * @param initialStatenpm
 * @param children
 * @returns {*}
 * @constructor
 */
export const LoginProvider = ({reducer, initialState, children}) =>(
    <LoginStateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </LoginStateContext.Provider>
);

export const useLoginStateValue = () => useContext(LoginStateContext);
