import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';
import Main from './Components/Main';
import ByBrand from './Components/ShowBy/ByBrand/ByBrand';
import ByRoom from './Components/ShowBy/ByRoom/ByRoom';
import ByProduct from './Components/ShowBy/ByProduct/ByProduct';
import Spinner from './Components/Spinner';
import Favorites from './Components/Favorites';
import { ProductConsumer } from './context';


function App() {

  return (
    
    <React.Fragment>
      <ProductConsumer>
          {(value) =>{
            if(!value.products.length && !value.cart.length){
              return <Spinner />
          }}}
      </ProductConsumer>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/products" component={ProductList}></Route>
        <Route exact path="/hmproducts" component={ByBrand}></Route>
        <Route exact path="/zaraproducts" component={ByBrand}></Route>
        <Route exact path="/bedroom" component={ByRoom}></Route>
        <Route exact path="/kitchen" component={ByRoom}></Route>
        <Route exact path="/livingroom" component={ByRoom}></Route>
        <Route exact path="/garden" component={ByRoom}></Route>
        <Route exact path="/bathroom" component={ByRoom}></Route>
        <Route exact path="/outdoor" component={ByRoom}></Route>
        <Route exact path="/pillows" component={ByProduct}></Route>
        <Route exact path="/decoration" component={ByProduct}></Route>
        <Route exact path="/storage" component={ByProduct}></Route>
        <Route exact path="/blankets" component={ByProduct}></Route>
        <Route exact path="/kitchenwear" component={ByProduct}></Route>
        <Route exact path="/candlescandleholders" component={ByProduct}></Route>
        <Route exact path="/homewear" component={ByProduct}></Route>
        <Route exact path="/pots" component={ByProduct}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/favorites" component={Favorites}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
   
  );
}

export default App;
