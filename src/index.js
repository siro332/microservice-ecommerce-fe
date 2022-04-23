import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Header, Home, Product, Footer } from "./components";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./components/js/keycloak"
ReactDOM.render(
  <div>
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </ReactKeycloakProvider>
  </div>,
  document.getElementById('root')
);