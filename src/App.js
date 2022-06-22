import {React, createContext, useState, useEffect} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Header, Home, Product, Footer ,PrivateRoute, Category, Checkout, Search, Cart, Dashboard} from "./components";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./components/js/keycloak"
import axios from 'axios';
import { PATH } from './constants/API';
import { CartContext, CartContextProvider } from './components/helpers/context/cart-context';
import { SearchContext, SearchContextProvider } from './components/helpers/context/search-context';
const App = () => {
  const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [cartReload, setCartReload] = useState(false);
    useEffect(
      () => {
          async function fetchData() {
              // You can await here
              setCategoriesLoading(true);
              try {
                  const response = await axios.get(PATH.API_ROOT_URL + PATH.API_CATALOG + "/categories");
                  setCategories(response.data);
              } catch (error) {
                  console.error(error.message);
              }
              setCategoriesLoading(false);
          }
          fetchData();
      }, []);
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak} >            
        <CartContextProvider >
          <SearchContextProvider>
          <Router>
          <Header categories={categories} />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <Footer/>
                </PrivateRoute>
              }
            />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/search" element={<Search categories={categories} />} />           
            <Route path="/wishlist" element={<PrivateRoute>
                <Product></Product>
              </PrivateRoute>}>
            </Route>
            <Route path="/cart" element={<PrivateRoute>
                <Cart></Cart>
              </PrivateRoute>}>
            </Route>
            <Route path="/checkout" element={<PrivateRoute>
                <Checkout></Checkout>
              </PrivateRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>}>
            </Route>
          </Routes>
          <Footer />
        </Router>
          </SearchContextProvider>         
        </CartContextProvider>
      </ReactKeycloakProvider>
    </div>
  )
}
export default App