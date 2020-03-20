import React, { useContext, useEffect } from 'react';
import { PageProduitContainer, LeftContainer, RightContainer } from './PageProduit.styles';
import { PanierContext } from '../../contexts/PanierContext';
import { ProduitsContext } from '../../contexts/ProduitsContext';
import { AdditionContext } from '../../contexts/AdditionContext';
import { updatePanier, updateAddition, updateProduits } from '../../utils/utils';

const PageProduit = ({ match }) => {

    const [panier, setPanier] = useContext(PanierContext);
    const [produits, setProduits] = useContext(ProduitsContext);
    const [addition, setAddition] = useContext(AdditionContext);

    useEffect(() => {
        updateAddition(panier, addition, setAddition);
    }, [panier]);

    const handleProduitsPanierAddition = (action, livre) => {
        updateProduits(action, panier, produits, setProduits, livre)
        updatePanier(action, panier, setPanier, livre);
    }

    const renderPageProduit = param => {
        const livre = produits.find(produit => produit.isbn.toString() === param);
        
        return livre
            ? (
                <PageProduitContainer>
                    <LeftContainer>
                        <img src={livre.cover} alt={livre.title} />
                        <p>{livre.price} €</p>
                        <button onClick={() => handleProduitsPanierAddition("ADD", livre)}>Ajouter à mon panier</button>
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