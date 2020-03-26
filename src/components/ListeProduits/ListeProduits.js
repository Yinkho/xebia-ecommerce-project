import React, { useContext } from 'react';
import CarteProduit from '../CarteProduit/CarteProduit';
import { ListeProduitsContainer } from './ListeProduits.styles';
import { RechercheContext } from '../../contexts/RechercheContext';
import { ProduitsContext } from '../../contexts/ProduitsContext';

const ListeProduits = () => {

    const [recherche] = useContext(RechercheContext);
    const [stateProduits] = useContext(ProduitsContext);

    const renderLivres = () => {
        return stateProduits
            .filter(livre => livre.title.toLowerCase().includes(recherche.toLowerCase().trim()))
            .map(livre => (
                <CarteProduit key={livre.isbn} livre={livre} />
            ))
        
    }

    return (
        <ListeProduitsContainer>
            {renderLivres()}
        </ListeProduitsContainer>
    )
}

export default ListeProduits;