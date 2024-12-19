import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // doing dep injection in a function
  const router = inject(Router);

  // this guard should verify whether the user is logged in or not
  if(sessionStorage.getItem('token')) { 
    return true;
  } else {
    // if loggedin return true
    // else redirect to login page and return false
    console.log('not logged in');
    router.navigate(['/login'],   
      { queryParams: { redirectTo: state.url } }
    );
    return false;
  }
};
