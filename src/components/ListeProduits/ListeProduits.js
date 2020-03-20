import React, { useContext } from 'react';
import CarteProduit from '../CarteProduit/CarteProduit';
import { ListeProduitsContainer } from './ListeProduits.styles';
import { RechercheContext } from '../../contexts/RechercheContext';
import { ProduitsContext } from '../../contexts/ProduitsContext';

const ListeProduits = () => {

    const [recherche] = useContext(RechercheContext);
    const [produits] = useContext(ProduitsContext);

    const renderLivres = () => {
        return produits
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