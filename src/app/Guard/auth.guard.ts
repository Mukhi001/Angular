import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
let menu=route.url[0].path
console.log(menu)
  return false;

};
