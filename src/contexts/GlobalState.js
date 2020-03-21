import React from 'react';
import { RechercheProvider } from './RechercheContext';
import { ProduitsProvider } from './ProduitsContext';
import { PanierProvider } from './PanierContext';
import { AdditionProvider } from './AdditionContext';


export const GlobalState = props => {

    return (
    <ProduitsProvider>
        <PanierProvider>
            <RechercheProvider>
                <AdditionProvider>
                    {props.children}
                </AdditionProvider>
            </RechercheProvider>
        </PanierProvider>
    </ProduitsProvider>
    )
}