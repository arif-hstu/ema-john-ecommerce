import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import React, { createContext, useState } from "react";
import Shipment from './Components/Shipment/Shipment'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Components/Review/Review';
import NotFount from './Components/NotFound/NotFount';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>Logged In:{loggedInUser.email}</h3>
      <Router>
      <Header></Header>
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
          <PrivateRoute exact path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
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
