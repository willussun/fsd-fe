import { Component, OnInit } from '@angular/core';
import { IpoDetail } from '../../models/ipo-detail';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { StockExchange } from 'src/app/models/stock-exchange';

@Component({
  selector: 'app-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.scss']
})
export class QueryDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute, private _http: HttpClient, public router: Router) {
  }

  public result: any;
  public resultAllData: any;

  public companyCode: string;
  public stockExchangeCode: string;

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      console.log(data);
      this.companyCode = data.get('cCode');
      this.stockExchangeCode = data.get('seCode');
    });

    var params = new HttpParams().set("stockExchangeCode", this.stockExchangeCode).set("companyCode", this.companyCode); {

      this._http.get<any[]>("/stock-module/query/price", { params }).subscribe(data => {
        this.result = data;
        console.log(data);
      });

    }
  }
}
