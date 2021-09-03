console.log(process.env);

const KeycloakOptions = {
    url: process.env.REACT_APP_KEYCLOAK_OPTIONS_URL,
    realm: process.env.REACT_APP_KEYCLOAK_OPTIONS_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_OPTIONS_CLIENT_ID,
    scope: 'openid profile email',
    responseMode: 'query',
    onLoad: 'login-required',
    updateTokenMinValidity: 5,
    checkLoginIframe: false
};

export default KeycloakOptions;
