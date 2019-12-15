import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user-login';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _http: HttpClient) { }


  public userLogin:UserLogin = new UserLogin();
  public result: any;

  public resultData:any;
  
  ngOnInit() {
   }


  public onCreateUser(f: NgForm) {
    console.log(f);
   
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    this.userLogin.status = 0;
    console.log("begin create user");
      this._http.post<any[]>('/auth-module/users/register',
      this.userLogin,
      httpOptions).subscribe(data => {
        console.log(data);
      }
      );
      alert("Your have already registered, please activate by email");
    }
}
