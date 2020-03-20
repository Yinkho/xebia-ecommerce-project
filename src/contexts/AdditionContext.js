import React, { useState, createContext } from 'react';

export const AdditionContext = createContext();

export const AdditionProvider = props => {

    const [addition, setAddition] = useState({
        sousTotal: 0,
        promotion: 0,
        total: 0
    });

    return (
        <AdditionContext.Provider value={[addition, setAddition]} >
            {props.children}
        </AdditionContext.Provider>
    )
}