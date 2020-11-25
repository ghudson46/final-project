import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import { useAuth0 } from '@auth0/auth0-react'

function NavBar() {
  const { isAuthenticated } = useAuth0();
    return (
      <div style={{marginBottom: '5rem'}}>
          {isAuthenticated && (
            <MainNav />
          )}
          {!isAuthenticated && (
            <AuthNav />
          )}
      </div>
    )
}

export default NavBar