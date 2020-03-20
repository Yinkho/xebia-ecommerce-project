import React, { useState, createContext } from 'react';

export const RechercheContext = createContext();

export const RechercheProvider = props => {
    const [recherche, setRecherche] = useState('');

    return (
        <RechercheContext.Provider value={[recherche, setRecherche]} >
            {props.children}
        </RechercheContext.Provider>
    )
}