import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  console.log("Otentikasi Dimulai!");

  var userId = sessionStorage.getItem("userId");
  console.log("userId : " + userId);

  if (userId == null) { 
  }
  else if (userId == "undefined") {
  }
  else if (userId == "") {
  }
  else {
    return true;
  }

  inject(Router).navigate(["/login"]);
  return false;
};
