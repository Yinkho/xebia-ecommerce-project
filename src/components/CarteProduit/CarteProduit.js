import React, { useState, useContext, useEffect, Suspense } from 'react';
import { LivreCard } from './CarteProduit.styles';
import { Link } from 'react-router-dom';
import { PanierContext } from '../../contexts/PanierContext';
import { ProduitsContext } from '../../contexts/ProduitsContext';
import { AdditionContext } from '../../contexts/AdditionContext';
import { updatePanier, updateAddition, updateProduits } from '../../utils/utils';
import SyncLoader from "react-spinners/SyncLoader";

const CarteProduit = ({ livre }) => {

    const [isHover, setIsHover] = useState(false);
    const [panier, setPanier] = useContext(PanierContext);
    const [produits, setProduits] = useContext(ProduitsContext);
    const [addition, setAddition] = useContext(AdditionContext);

    useEffect(() => {
      updateAddition(panier, addition, setAddition);
    }, [panier]);

    const { cover, title, price, synopsis, isbn } = livre;

    const minifyText = text => {
        if(text.length > 250) {

            let minifiedText = text.slice(0, 240);
            minifiedText = minifiedText.slice(0, minifiedText.lastIndexOf(' '));

            return <div id="synopsis">
                <p>{`${minifiedText}...`}</p>
                <Link to={isbn}>Lire la suite</Link>
            </div>
        } else { 
            return <div id="synopsis">
                <p>{text}</p>
                <Link to={isbn}>En savoir plus</Link>
            </div>
        }
    };

    const toggleHover = () => setIsHover(!isHover);

    const handleProduitsPanierAddition = () => {
        updateProduits("ADD", panier, produits, setProduits, livre)
        updatePanier("ADD", panier, setPanier, livre);
    }

    return (
            <LivreCard
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                <div id="livre-container">
                    <Suspense fallback={<SyncLoader color="#63B4D8" />}>
                        <img className="livre" src={cover} alt={title} />
                    </Suspense>
                    <div className="livre synopsis-container">
                        {minifyText(synopsis.toString())}
                    </div>
                </div>
                <Link id="titre" to={isbn}>{title}</Link>
                <button onClick={() => handleProduitsPanierAddition()}>{isHover ? "Ajouter au panier" : `${price} €`}</button>
            </LivreCard>
    );
};

export default CarteProduit;