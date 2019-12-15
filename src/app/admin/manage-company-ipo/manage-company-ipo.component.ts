import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Company } from 'src/app/models/company';
import { StockExchange } from 'src/app/models/stock-exchange';

@Component({
  selector: 'app-manage-company-ipo',
  templateUrl: './manage-company-ipo.component.html',
  styleUrls: ['./manage-company-ipo.component.scss']
})
export class ManageCompanyIpoComponent implements OnInit {

  constructor(public route: ActivatedRoute, private _http: HttpClient) {
  }

  public resultAllData: any;
  public resultAllCode: Number;
  public result: any;
  public companyId: any;
  public company: Company = new Company();
  public stockExchange: StockExchange = new StockExchange();
  public resultAllData2: any;
  public resultAllData3: any;
  public stockExchangeId: number;
  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      console.log(data);
      this.companyId = data.get('companyId');
      this._http.get<any[]>("/stock-module/companies/" + this.companyId).subscribe(data => {
        this.result = data;
        console.log("printing this result...");
        this.resultAllData = this.result.data;
        this.resultAllCode = this.result.code;
        console.log(this.resultAllData);
        console.log(this.resultAllCode);
        this.company = this.resultAllData;
      }
      );
      this._http.get<any[]>("/stock-module/stockexchanges/exclude/" + this.companyId).subscribe(data => {
        console.log(data);
        this.resultAllData2 = data;
        this.resultAllData3 = this.resultAllData2.data.list;
      }
      );
    });
  }

}
