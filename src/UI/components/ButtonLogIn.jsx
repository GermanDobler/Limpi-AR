import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Provider } from '@auth0/auth0-react';
import _JSXStyle from 'styled-jsx/style';

export default function ButtonLogIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <>  
            <div className="button google" onClick={() => loginWithRedirect()}>
                Google
            </div>
            <style jsx="true">{`
            .button {
                display: inline;
                position: relative;
                font-size: 15px;
                font-weight: bold;
                text-align: center;
                text-decoration: none;
                color: white;
                border-radius: 5px;
                padding: 14px 80px;
              }
      .google {
        background-color: #CC3622;
        box-shadow: 0 4px 0 #BA2714;
      }
      .google:active {
        top: 2px;
          box-shadow: 0 2px 0 #BA2714;
      }
      .google:hover {
        background-color: #CC3C22;
      }
    `}</style>
        </>
    )
}
