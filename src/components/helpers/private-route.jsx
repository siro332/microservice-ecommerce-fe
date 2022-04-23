import { useKeycloak } from "@react-keycloak/web";

function PrivateRoute({ children }) {
 const [ keycloak ] = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : 
 <div>
     UNAUTHENTICATED
 </div>;
};

export default PrivateRoute;
