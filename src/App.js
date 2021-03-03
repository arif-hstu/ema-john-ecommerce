import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import NotFount from './Components/NotFound/NotFount';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/*'>
            <NotFount></NotFount>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
