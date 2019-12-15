import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { IpoDetail } from '../../models/ipo-detail';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { StockExchange } from 'src/app/models/stock-exchange';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.scss']
})
export class ManageExchangeComponent implements OnInit {


  public stockExchange: StockExchange = new StockExchange();

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    
  }

  public onCreateStockExchange(f: NgForm) {
    console.log(f);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log("begin create Stock Exchange");

    this._http.post<any[]>('/stock-module/stockexchanges',
      this.stockExchange,
      httpOptions).subscribe(data => {
        console.log(data);
        alert("Your stock exchange has been successfully created.");
      }

      );
  }

}
