import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { analyzeAndValidateNgModules } from '@angular/compiler';

import { Fusionchart } from  '../../models/fusionchart';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


// Pass the fusioncharts library and chart modules

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})

export class ShowChartComponent implements OnInit {

  //public dataSource2: any;
  public title: string;
  public result: any;
// public ds:any;
 // public temp:any;
  public dataSource:any;
  // public dataSource: Fusionchart = new Fusionchart();

  public companyNameList:string;
  public sectorCodeList:string;
  public stockExchangeCode:string;
  public startDate:string;
  public endDate:string;

  public currentCompanyName:string;
  public currentSectorCode:string;
  public currentStockExchangeeCode:string;
  public currentStartDate:string;
  public currentEndDate:string;

  constructor(private _http: HttpClient, private router: Router, private route : ActivatedRoute ) {
    
  }

  ngOnInit() {
  //   this.route.queryParamMap.subscribe((data) => {
  //     console.log(data);
  //     this.companyNameList = data.get('companyNameList');
  //     this.sectorCodeList = data.get('sectorCodeList');
  //     this.stockExchangeCode = data.get('stockExchangeCode');
  //     this.startDate = data.get('startDate');
  //     this.endDate = data.get('endDate');

  //     var params = new HttpParams().set("companyNameList", this.companyNameList)
  //     .set("sectorCodeList", this.sectorCodeList).set("stockExchangeCode", this.stockExchangeCode)
  //     .set("startDate", this.startDate).set("endDate", this.endDate);

  //     this._http.get<any[]>('/stock-module/compare/result', {params}).subscribe(data => {
  //       this.result = data;
  //       console.log("printing this result...");
  //       console.log(this.result);
  //       this.title = "Angular  Stock Exchange Comparison";
  //       this.dataSource = data;
  //       this.result = this.dataSource.comp;
  //       console.log(this.dataSource);
  //   });
  // });

  this.route.queryParamMap.subscribe((data) => {
    console.log(data);
    this.companyNameList = data.get('companyNameList');
    this.sectorCodeList = data.get('sectorCodeList');
    this.stockExchangeCode = data.get('stockExchangeCode');
    this.startDate = data.get('startDate');
    this.endDate = data.get('endDate');
       
    var params = new HttpParams().set("companyNameList", this.companyNameList)
    .set("sectorCodeList", this.sectorCodeList).set("stockExchangeCode", this.stockExchangeCode)
    .set("startDate", this.startDate).set("endDate", this.endDate);
  
  this._http.get<any[]>('/stock-module/compare/result', {params}).subscribe(data => {
    this.result = data;
    console.log("printing this result...");
    console.log(this.result);
    this.title = "Angular Stock Exchange Comparison";
    this.dataSource = data;
    this.result = this.dataSource.comp;
    console.log(this.dataSource);
    alert(this.companyNameList);
  });

});



  }
}
