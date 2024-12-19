import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  // access the request header 
  // clone the request header and set the token in header
  const token = sessionStorage.getItem('token');
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(clonedReq);
  return next(clonedReq);
};
