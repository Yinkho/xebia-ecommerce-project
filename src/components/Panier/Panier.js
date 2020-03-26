import React, { useContext, Suspense } from 'react';
import { 
    PanierContainer, 
    ProduitPanier, 
    ProduitsContainer, 
    Bar, 
    TotalContainer,
    ProduitPanierContainer
} from './Panier.styles';
import { Link } from 'react-router-dom';
import { PanierContext } from '../../contexts/PanierContext';
import { ProduitsContext } from '../../contexts/ProduitsContext';
import { AdditionContext } from '../../contexts/AdditionContext';
import { updateAddition } from '../../utils/utils';
import SyncLoader from "react-spinners/SyncLoader";
import deleteLogo from '../../assets/delete.png';

const Panier = () => {

    const [statePanier, dispatchPanier] = useContext(PanierContext);
    const [stateProduits, dispatchProduits] = useContext(ProduitsContext);
    const [addition, setAddition] = useContext(AdditionContext);

    const handleProduitsPanierAddition = (action, livre) => {
        dispatchProduits({ type: action, payload: livre });
        dispatchPanier({ type: action, payload: livre });
        updateAddition(statePanier, addition, setAddition);
    }

    const renderProduitsPanier = () => {
        return statePanier.length
        ? statePanier.map((produitPanier, i) => (
            <div key={produitPanier.isbn}>
                <ProduitPanier>
                    <div id="supprimer">
                        <img onClick={() => handleProduitsPanierAddition("RESET", produitPanier)} src={deleteLogo} alt="Supprimer"/>
                    </div>
                    <img id='livre' src={produitPanier.cover} alt={produitPanier.title} />
                    <div>
                        <Link id="title" to={`/${produitPanier.isbn}`}>{produitPanier.title}</Link>
                        <div id='quantity-container'>
                            <p className='plusmoins moins' onClick={() => handleProduitsPanierAddition("DELETE", produitPanier)}>-</p>
                            <p id='quantity'>{produitPanier.quantity}</p>
                            <p className='plusmoins plus' onClick={() => handleProduitsPanierAddition("ADD", produitPanier)}>+</p>
                        </div>
                        <p>{produitPanier.price*produitPanier.quantity} €</p>
                    </div>
                </ProduitPanier>
                <Bar />
            </div>
        ))
        : <p style={{ fontSize: 20, color: '#565656' }}>Votre panier est vide.</p>
    }

    return (
        <PanierContainer>
            <ProduitsContainer>
                <ProduitPanierContainer>
                    {renderProduitsPanier()}
                </ProduitPanierContainer>
                {statePanier.length > 0 && 
                    <TotalContainer>
                        <p>Sous-total : {addition.sousTotal} €</p>
                        <Suspense fallback={<SyncLoader />}>
                            <p>Promotion : {addition.promotion} €</p>
                            <p id="total">Total : {addition.total} €</p>
                        </Suspense>
                        <Link id="commande" to="/checkout">Passer ma commande</Link>
                    </TotalContainer>
                }
            </ProduitsContainer>
        </PanierContainer>
    )
}

export default Panier;