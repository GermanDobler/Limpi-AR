import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useEffect } from 'react'
export default function ScreenLogIn() {
  const { loginWithRedirect  } = useAuth0();
  useEffect(()=>{loginWithRedirect()}, [])
  return (
    <></>
  )
}
