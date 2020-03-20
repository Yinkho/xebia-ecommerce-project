import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProduitsContext = createContext();

export const ProduitsProvider = props => {

    useEffect(() => {
        axios.get('http://henri-potier.xebia.fr/books')
            .then(response => {
                let produitsData = response.data.map(livre => ({ ...livre, quantity: 0 }));
                setProduits(produitsData)
            })
            .catch(err => console.log(err))
    }, []);

    const [produits, setProduits] = useState([]);

    return (
        <ProduitsContext.Provider value={[produits, setProduits]} >
            {props.children}
        </ProduitsContext.Provider>
    )
}