import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ListeProduits from './components/ListeProduits/ListeProduits';
import Navbar from './components/Navbar/Navbar';
import PageProduit from './components/PageProduit/PageProduit';
import Panier from './components/Panier/Panier';
import Commande from './components/Commande/Commande';
import { RechercheProvider } from './contexts/RechercheContext';
import { ProduitsProvider } from './contexts/ProduitsContext';
import { PanierProvider } from './contexts/PanierContext';
import { GlobalState } from './contexts/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={ListeProduits} />
            <Route exact path={"/panier"} component={Panier} />
            <Route exact path={"/checkout"} component={Commande} />
            <Route exact path={"/:isbn"} component={PageProduit} />
            {/* ADD Error Page */}
          </Switch>
      </div>
    </GlobalState>
  );
}

export default App;
