import KeyCloak from "keycloak-js"
import { PATH } from "../../constants/API"
const keycloak = new KeyCloak({
    url: PATH.API_AUTH_LOGIN + PATH.API_AUTH_LOGIN,
    realm: "microservice-ecommerce-realm",
    clientId: "react-auth-client",
});

export default keycloak;