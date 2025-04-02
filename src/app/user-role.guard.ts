import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';

export const userRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const user = userService.getUser();
  if (user && user.USERTYPE == 'APP_ADMIN') {
    return true;
  }
  else {
    return router.parseUrl('/login');
  }
};
