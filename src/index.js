import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Keycloak from 'keycloak-js';
import KeycloakOptions from './keycloakOptions';

import reportWebVitals from './reportWebVitals';

const keycloak = Keycloak(KeycloakOptions);
const REFRESH_CHECK_FREQUENCY = 60;

/*
async function updateToken() {
    try {
        const refreshed = await keycloak.updateToken(REFRESH_CHECK_FREQUENCY + KeycloakOptions.updateTokenMinValidity);
        console.log('token is refreshed', refreshed);
        if (refreshed) {
            localStorage.setItem('react-token', keycloak.token);
            localStorage.setItem('react-refresh-token', keycloak.refreshToken);
            console.debug('Token refreshed' + refreshed);
        } else {
            console.warn('Token not refreshed, valid for '
                + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
    } catch (err) {
        console.error('Failed to refresh token', err);
    }
}

keycloak.init({ onLoad: KeycloakOptions.onLoad }).then((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    localStorage.setItem('react-token', keycloak.token);
    localStorage.setItem('react-refresh-token', keycloak.refreshToken);

    ReactDOM.render(<React.StrictMode><App auth={keycloak} /></React.StrictMode>, document.getElementById('root'));

    setInterval(async () => {
        await updateToken();
    }, REFRESH_CHECK_FREQUENCY * 1000);

}).catch(() => {
    console.error("Authenticated Failed");
});
*/

ReactDOM.render(<React.StrictMode><App auth={keycloak} /></React.StrictMode>, document.getElementById('root'));


reportWebVitals();
