import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Header, Home, Product, Footer ,PrivateRoute, Category} from "./components";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./components/js/keycloak"
const App = () => {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak} >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <Footer/>
               </PrivateRoute>
             }
           />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
          <Footer />
        </Router>
      </ReactKeycloakProvider>
    </div>
  )
}
export default App