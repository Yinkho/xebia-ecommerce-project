import React, { useContext } from 'react';
import { PageProduitContainer, LeftContainer, RightContainer } from './PageProduit.styles';
import { PanierContext } from '../../contexts/PanierContext';
import { ProduitsContext } from '../../contexts/ProduitsContext';
import { AdditionContext } from '../../contexts/AdditionContext';
import { updateAddition } from '../../utils/utils';

const PageProduit = ({ match }) => {

    const [statePanier, dispatchPanier] = useContext(PanierContext);
    const [stateProduits, dispatchProduits] = useContext(ProduitsContext);
    const [addition, setAddition] = useContext(AdditionContext);

    const handleProduitsPanierAddition = livre => {
        dispatchProduits({ type: 'ADD', payload: livre });
        dispatchPanier({ type: 'ADD', payload: livre });
        updateAddition(statePanier, addition, setAddition);
    }

    const renderPageProduit = param => {
        const livre = stateProduits.find(produit => produit.isbn.toString() === param);
        
        return livre
            ? (
                <PageProduitContainer>
                    <LeftContainer>
                        <img src={livre.cover} alt={livre.title} />
                        <p>{livre.price} €</p>
                        <button onClick={() => handleProduitsPanierAddition(livre)}>Ajouter à mon panier</button>
                    </LeftContainer>
                    <RightContainer>
                        <p id='title'>{livre.title}</p>
                        <p id='synopsis'>{livre.synopsis}</p>
                    </RightContainer>
                </PageProduitContainer>
            )

            : (
                <div>Cette page est introuvable.</div>
            )
    }

    return renderPageProduit(match.params.isbn);
}

export default PageProduit;