import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { IpoDetail } from '../../models/ipo-detail';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router, NavigationExtras } from '@angular/router'
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-query-company',
  templateUrl: './query-company.component.html',
  styleUrls: ['./query-company.component.scss']
})
export class QueryCompanyComponent implements OnInit {

  constructor(private _http: HttpClient, public router: Router, public route: ActivatedRoute, public location: Location) {

  }

  keyword2: string;

  private readonly STATUS_ACTIVE = "1";
  private readonly STATUS_INACTIVE = "0";

  ngOnInit() {
    // this.route.paramMap.subscribe(data => {
    //   console.log("printing keyword init...");
    //   console.log(data);
    //   this.keyword2 = data.get('keyword');

    this.route.queryParamMap.subscribe(data => {
      console.log("printing keyword init again...");
      console.log(data);
      this.keyword2 = data.get('keyword');
      if(this.keyword2 == null)
        this.keyword2 = "";

      console.log("Keyword is...");
      console.log(this.keyword2);
      var params = new HttpParams().set("status", this.STATUS_ACTIVE ).set("keyword", this.keyword2);
      this._http.get<any[]>('/stock-module/companies/status', { params }).subscribe(data => {
        this.result = data;
        this.resultAllData = this.result.data.list;
        this.resultAllCode = this.result.code;
      }
      );

      // params = params.set("status", this. STATUS_INACTIVE).set("keyword", this.keyword2);
      // this._http.get<any[]>('/stock-module/companies/status', { params }).subscribe(data2 => {
      //   this.result2 = data2;
      //   this.resultAllData2 = this.result2.data.list;
      //   this.resultAllCode2 = this.result2.code;
      // }
      // );


    });


  }

  public result: any;
  public result2: any;

  public resultAll: any;
  public resultAllData: any;
  public resultAllCode: string;

  public resultAll2: any;
  public resultAllData2: any;
  public resultAllCode2: string;


  public keyword: string;

  public company: Company = new Company();
  // public ipoDetailSet: Array<IpoDetail> = new Array<IpoDetail>();
  public ipoDetail: IpoDetail = new IpoDetail();

  
  public view(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'companyId': id }
    };
    this.router.navigate(['/user/query-company-ipo'], navigationExtras);
  }

  public searchKeyword: string;
  public onSearch() {
    this.keyword = this.searchKeyword;

    var navigationExtras: NavigationExtras = {
      queryParams: { 'keyword': this.searchKeyword }
    };
    this.router.navigate(['/user/query-company'], navigationExtras);
  }

}
