import React, { useReducer, createContext } from 'react';

export const PanierContext = createContext();

const initialState = [];

const panierReducer = (state, action) => {
    
    switch (action.type) {
        case "ADD":
            if(state.some(produit => produit.isbn === action.payload.isbn)) {
                return state.map(produit => {
                    return action.payload.isbn === produit.isbn ? { ...produit, quantity: ++produit.quantity } : produit;
                });
            } else {
                return [ ...state, { ...action.payload, quantity: 1 }];
            }
    
        case "DELETE":
            return state.map(produit => {
                if(action.payload.isbn === produit.isbn) {
                    return produit.quantity > 0 ? { ...produit, quantity: --produit.quantity } : produit;
                } else {
                    return produit;
                }
            }).filter(produit => produit.quantity > 0);
    
        case "RESET":
            return state.map(produit => {
                return action.payload.isbn === produit.isbn ? { ...produit, quantity: 0 } : produit;
            }).filter(produit => produit.quantity > 0);

        default:
            return state;
    }
};

export const PanierProvider = props => {

    const [statePanier, dispatchPanier] = useReducer(panierReducer, initialState);

    return (
        <PanierContext.Provider value={[statePanier, dispatchPanier]} >
            {props.children}
        </PanierContext.Provider>
    )
}