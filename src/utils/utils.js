import axios from 'axios';

export const updateProduits = (action, panier, produits, setProduits, livre) => {
    const modifyQuantityInProduits = produits.map(produit => {
        if(produit.isbn === livre.isbn) {
            switch (action) {
                case "ADD":
                    return { ...produit, quantity: ++produit.quantity };
                    break;
            
                case "DELETE":
                    return produit.quantity > 0 ? { ...produit, quantity: --produit.quantity } : produit;
                    break;

                default:
                    break;
            }
        } else {
            return produit;
        }
    });
    setProduits(modifyQuantityInProduits);
};

export const updatePanier = (action, panier, setPanier, livre) => {
    const isInPanier = panier.some(produit => produit.isbn === livre.isbn);
    let modifyQuantityInPanier;

    if(!isInPanier) {
        setPanier([ ...panier, livre ]);
    } else {
        //modifyQuantityInPanier = produits.filter(produit => panier.some(produitPanier => produit.isbn === produitPanier.isbn));
        modifyQuantityInPanier = panier.map(produit => {
            if(produit.isbn === livre.isbn) {
                switch (action) {
                    case "ADD":
                        return { ...produit, quantity: ++produit.quantity };
                        break;
                
                    case "DELETE":
                        return produit.quantity > 0 ? { ...produit, quantity: --produit.quantity } : produit;
                        break;

                    default:
                        break;
                }
            } else {
                return produit;
            }
        });
        setPanier(modifyQuantityInPanier.filter(produit => produit.quantity > 0));
    }
};

export const getBestOffer = async (panier, sousTotal) => {
    const isbnString = panier.map(produit => produit.isbn).join(',');
    let total = [];

    if(panier.length > 0) {
        await axios.get(`http://henri-potier.xebia.fr/books/${isbnString}/commercialOffers`)
            .then(response => response.data.offers.forEach(offer => {
                switch (offer.type) {
                    case "percentage":
                        total.push(sousTotal - Math.round((sousTotal * offer.value) / 100));
                        break;
                
                    case "minus":
                        total.push(sousTotal - offer.value);
                        break;
                
                    case "slice":
                        total.push(sousTotal - Math.trunc(sousTotal/offer.sliceValue) * offer.value);
                        break;
                
                    default:
                        break;
                }
            }));
    }

    return Math.min(...total);
};

export const getSousTotal = panier => {
    return panier.reduce((acc, produit) => acc + produit.price * produit.quantity, 0);
};

export const updateAddition = async (panier, addition, setAddition) => {
    const sousTotal = getSousTotal(panier);
    const promotion = await getBestOffer(panier, sousTotal);
    setAddition({
        sousTotal: sousTotal,
        promotion: promotion - sousTotal,
        total: promotion
    });
};

export const deleteProduitFromPanier = (isbn, panier, setPanier) => {
    setPanier(panier.filter(produit => produit.isbn !== isbn));
};