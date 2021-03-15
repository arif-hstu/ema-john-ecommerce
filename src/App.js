import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import React, { createContext, useState } from "react";
import Login from './Components/Login/Login'
import Shipment from './Components/Shipment/Shipment'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Components/Review/Review';
import NotFount from './Components/NotFound/NotFount';
import ProductDetails from './Components/ProductDetails/ProductDetails';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>{loggedInUser.email}</h3>
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
          <Route path='/login'>
            <Login></Login>            
          </Route>
          <Route path='/shipment'>
            <Shipment></Shipment>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/*'>
            <NotFount></NotFount>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
