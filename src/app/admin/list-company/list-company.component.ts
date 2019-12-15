import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { IpoDetail } from '../../models/ipo-detail';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {

  constructor(private _http: HttpClient) {
    
  }

  ngOnInit() {
    this._http.get<any[]>('/stock-module/companies').subscribe(data => {
      this.result = data;
      this.resultAllData = this.result.data.list;
      this.resultAllCode = this.result.code;
      }
      );
  }

  public resultAll:any;
  public resultAllData:any;
  public resultAllCode:string;

  public company: Company = new Company();
  // public ipoDetailSet: Array<IpoDetail> = new Array<IpoDetail>();
  public ipoDetail: IpoDetail = new IpoDetail();
  public result: any;

}
