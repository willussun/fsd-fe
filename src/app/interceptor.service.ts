import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class InterceptorService implements HttpInterceptor {

  constructor() { }

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  console.log("This is req url " + req.url);

    
    var req2 = req.clone({ url: `http://localhost:8090${req.url}` })
    if(req.url == "/auth-module/token/generate-token"
    || req.url == "/auth-module/users/register"
    || req.url == "/auth-module/activate")
    { 
     
      // Don't add header from local storage, means it is login process
      return next.handle(req2);
    }

    var jwtToken = this.getJwtToken();

    if(jwtToken != null)
    {
     req =  this.addToken(req2, jwtToken);
    }
    return next.handle(req);
  }
  

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

}