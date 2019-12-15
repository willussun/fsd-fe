import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private readonly JWT_TOKEN = 'JWT_TOKEN';

  userLogin:UserLogin = new UserLogin();

  constructor(private _http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  public token:string;
  public role:string;
  public code:string;
  public result:any;

  public register()
  {
    this.router.navigate(['/user/register']);
  }

  public login() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
        
    if(this.userLogin.username == null || this.userLogin.password == null)
    {
      alert("Please Input username and passowrd");
      return;
    }

    this._http.post<any[]>('/auth-module/token/generate-token',
      this.userLogin,
      httpOptions).subscribe(data => {
        console.log(data);
        this.result = data;

        this.code = this.result.code;
        if(this.code != "0") {
          alert (this.result.message);
          return;
        }

        this.token = this.result.data.token;
        this.role =  this.result.data.role;
            
        this.storeJwtToken(this.token);
        if(this.role == "ADMIN")
        {
          alert("Your have successfully login admin interface.")
          this.router.navigate(['/admin']);
        }
        else if(this.role == "USER")
        {
          alert("Your have successfully login stock exchange application.")
          this.router.navigate(['/user']);
        }





      });
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

//   public getComp() {
   
//     console.log("begin get");
//     const httpOptions2 = {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     };

//     this._http.get<any[]>('/stock-module/compare/result',httpOptions2).subscribe(data => {
//           console.log(data);
//         });
//   }

//   public getUser() {
   
//     console.log("begin get");

//     this._http.get<any[]>('/auth-module/users').subscribe(data => {
//           console.log(data);
//         });
//   }


}