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
import ManageInventory from './Components/ManageInventory/ManageInventory'

export const UserContext = createContext();

// temp context for all products 
export const ProductsContext = createContext();

function App() {

  // temp context for all products 
  const [products, setProducts] = useState([]);
  console.log('target', products)


  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProductsContext.Provider value={[products, setProducts]}>
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
            <Route exact path='/manage'>
              <ManageInventory />
            </Route>
            {/* <PrivateRoute exact path='/manage'> */}
            {/*    */}
            {/* </PrivateRoute> */}
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/*'>
              <NotFount></NotFount>
            </Route>
          </Switch>
        </Router>
      </ProductsContext.Provider>

    </UserContext.Provider>
  );
}

export default App;
