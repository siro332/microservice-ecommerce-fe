import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from 'react-router-dom';
const CartUtils = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : <Navigate to={{ pathname: '/', }} />
};

export default CartUtils;
