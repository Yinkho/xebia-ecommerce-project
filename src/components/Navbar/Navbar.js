import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RechercheContext } from '../../contexts/RechercheContext';
import { PanierContext } from '../../contexts/PanierContext';
import { 
    SearchInput, 
    SearchContainer, 
    SVG, 
    NavbarContainer, 
    Logo, 
    PanierLink, 
    SearchAndLogoContainer,
    PanierLogoAndNotifContainer
} from './Navbar.styles';
import searchSVG from '../../assets/search.svg';
import panierSVG from '../../assets/panier.svg';
import logo from '../../assets/logo.png';

const Navbar = () => {

    const [recherche, setRecherche] = useContext(RechercheContext);
    const [statePanier] = useContext(PanierContext);
    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setRecherche(e.target.value);
    };

    const handleKeyDown = e => {
        console.log(e)
        if (e.key === 'Enter') {
            history.push('/');
        }
    };

    const renderNotification = () => {
        return statePanier.length > 0 && <p>{statePanier.length}</p>;
    };

    return (
        <NavbarContainer>
            <SearchAndLogoContainer>
                <Link to={'/'}>
                    <Logo src={logo} alt="Book Store" />
                </Link>
                <SearchContainer>
                    <SearchInput 
                        type="text" 
                        value={recherche} 
                        onChange={handleChange}
                        onKeyPress={handleKeyDown}
                        placeholder="Trouvez votre livre"
                    />
                    <SVG src={searchSVG} alt="Trouvez votre livre" onClick={() => history.push('/')} />
                </SearchContainer>
            </SearchAndLogoContainer>
            
            <Link to={'/panier'} style={{ textDecoration: 'none' }}>
                <PanierLink>
                    <p>Mon panier</p>
                    <PanierLogoAndNotifContainer>
                        <img src={panierSVG} alt="Mon panier" />
                        {renderNotification()}
                    </PanierLogoAndNotifContainer>
                </PanierLink>
            </Link>
        </NavbarContainer>
    )
}

export default Navbar;