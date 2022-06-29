// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAye5CMhP-odFehDZ51JIUNu8Yvh7ZfPck",
    authDomain: "weather-login-40184.firebaseapp.com",
    projectId: "weather-login-40184",
    storageBucket: "weather-login-40184.appspot.com",
    messagingSenderId: "69170885310",
    appId: "1:69170885310:web:8c4720d757de0e663be4ef"
  },
    weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',
    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: '2484201b4amshef719a419645b79p18c26ejsn799807e9c2d3'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
