import axios from 'axios';

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