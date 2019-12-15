import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.removeJwtToken();
    alert("You have successfully logout.");
    this.router.navigate(['/login']);
  }

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  private removeJwtToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
