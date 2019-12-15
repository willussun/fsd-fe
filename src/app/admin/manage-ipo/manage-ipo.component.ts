import { Component, OnInit } from '@angular/core';
import { IpoDetail } from '../../models/ipo-detail';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { StockExchange } from 'src/app/models/stock-exchange';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.scss']
})
export class ManageIpoComponent implements OnInit {

  constructor(public route: ActivatedRoute, private _http: HttpClient, public router: Router) {
   
    // Id indicates the ipo record need to be updated
    // else if (this.id != null)
    // {
    //   this.ipodetail.companyId = this.companyId;
    //   this.ipodetail.ipoCode = this.
    // }
    // if (this.id != null) {
    //   this._http.get<any[]>("http://localhost:8012/api/v1/stockexchanges/update").subscribe(data => {
    //     this.result = data;
    //     console.log("printing this result...");
    //     this.ipodetail.id = this.id;
    //     console.log(this.ipodetail.stockExchangeCode);
    //   }
    //   );
    // }
// 
  }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      //console.log(data);
      this.companyId = data.companyId;
      this.stockExchangeId = data.seId;
      this.id = data.id;
    });

    // This means this is an existing ipo record, need to do update
    if (this.stockExchangeId != null) {
      this._http.get<any[]>("/stock-module/stockexchanges/" + this.stockExchangeId).subscribe(data => {
        this.result = data;
        this.ipodetail.companyId = this.companyId;
        this.ipodetail.stockExchangeId = this.stockExchangeId;
        this.ipodetail.stockExchangeCode = this.result.data.stockExchangeCode;
      }
      );
    }

  }

  public result: any;
  public resultAllData: any;

  public companyId: number;
  public stockExchangeId: number;
  public id: number;
  public ipodetail: IpoDetail = new IpoDetail();


  public onCreateIpoDetail(f: NgForm) {
    console.log(f);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log("begin create IPO");
    this._http.post<any[]>('/stock-module/ipodetails', this.ipodetail, httpOptions).subscribe(data => {
        console.log(data);
        var navigationExtras: NavigationExtras = {
          queryParams: { 'companyId': this.companyId }
        };
        alert("Your IPO has been successfully created.");
        this.router.navigate(['/admin/manage-company-ipo'], navigationExtras);
      });
    }
}
