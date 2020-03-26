import React, { useReducer, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProduitsContext = createContext();

const initialState = [];

const produitsReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUITS":
            return [ ...state, ...action.payload ];
    
        case "ADD":
            return state.map(produit => {
                return produit.isbn === action.payload.isbn
                    ? { ...produit, quantity: ++produit.quantity }
                    : produit
            });
    
        case "DELETE":
            return state.map(produit => {
                if(produit.isbn === action.payload.isbn) {
                    return produit.quantity > 0 ? { ...produit, quantity: --produit.quantity } : produit;
                } else {
                    return produit;
                }
            });
    
        case "RESET":
            return state.map(produit => {
                return action.payload.isbn === produit.isbn ? { ...produit, quantity: 0 } : produit;
            });

        default:
            return state;
    }
};

export const ProduitsProvider = props => {

    useEffect(() => {
        axios.get('http://henri-potier.xebia.fr/books')
            .then(response => {
                let produitsData = response.data.map(livre => ({ ...livre, quantity: 0 }));
                dispatchProduits({ type: 'SET_PRODUITS', payload: produitsData });
            })
            .catch(err => console.log(err))
    }, []);

    const [stateProduits, dispatchProduits] = useReducer(produitsReducer, initialState);

    return (
        <ProduitsContext.Provider value={[stateProduits, dispatchProduits]} >
            {props.children}
        </ProduitsContext.Provider>
    )
}