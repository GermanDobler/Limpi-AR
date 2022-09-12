// import React from 'react';
// import MainStack from './navigation/MainStack'
// import ScreenSector from './screens/ScreenSector';
// import ScreenSecretaria from './screens/ScreenSecretaria';
// import ScreenLogIn from './screens/ScreenLogIn'
// import ScreenHome from './screens/ScreenHome'
// import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
// export default function App() {
//   return (
//     <div>
//       <MainStack/>
//       {/* <ScreenSector/> */}
//       {/* <ScreenSecretaria/> */}
//       {/* <ScreenLogIn></ScreenLogIn>*/}
//       {/* <ScreenHome></ScreenHome>  */}
//     </div>
//   );
// }
import React from 'react';
import LoginButton from './src/UI/components/LoginButton';
import LogoutButton from './src/UI/components/LogoutButton';
import Profile from './src/UI/components/Profile';
import { useAuth0, withAuthenticationRequired, Auth0Provider } from '@auth0/auth0-react';
import MainStack from './navigation/MainStack';
withAuthenticationRequired(App);
function App() {

  return (
    <>
      <Auth0Provider domain='limpi-ar.us.auth0.com'
        clientId='hXGGWtPNGHTkotavIkwcgoiKrkn0u9E6'
        redirectUri={window.location.origin}>
        <MainStack/>
      </Auth0Provider>
    </>
  );
}

export default App;
