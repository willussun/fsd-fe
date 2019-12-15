import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute, NavigationExtras } from "@angular/router";

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { analyzeAndValidateNgModules, ThrowStmt } from '@angular/compiler';

import { Fusionchart } from '../../models/fusionchart';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


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
  public dataSource: any;

  public companyCodeList: string;
  public sectorCodeList: string;
  public stockExchangeCode: string;
  public startDate: string;
  public endDate: string;

  public currentCompanyName: string;
  public currentSectorCode: string;
  public currentStockExchangeeCode: string;
  public currentStartDate: string;
  public currentEndDate: string;
  public type: string;
  public duration: string;

  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) {

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

    this.route.queryParamMap.subscribe(data => {
      this.companyCodeList = data.get('companyCodeList');
      this.sectorCodeList = data.get('sectorCodeList');
      this.stockExchangeCode = data.get('stockExchangeCode');
      this.startDate = data.get('startDate');
      this.endDate = data.get('endDate');
      this.duration = data.get('duration');

      this.type = 'msline';
      var params = new HttpParams().set("companyCodeList", this.companyCodeList).set("sectorCodeList", this.sectorCodeList)        .set("stockExchangeCode", this.stockExchangeCode)
        .set("startDate", this.startDate).set("endDate", this.endDate).set("duration", this.duration);

      this._http.get<any[]>('/stock-module/compare/multiresult', { params }).subscribe(data => {
        console.log("Request is success", data);
        this.title = "Stock Exchange Comparison";
        this.dataSource = data;
        //this.result = this.dataSource.data.comp;
        this.result = this.dataSource.data;
        //console.log("This is result ", this.result);
      },
        error => {
          console.log("Error occurred", error);
          alert(error);
        });

    });

  }


    public onExport() {
      
      var params = new HttpParams().set("companyCodeList", this.companyCodeList).set("sectorCodeList", this.sectorCodeList)        .set("stockExchangeCode", this.stockExchangeCode)
        .set("startDate", this.startDate).set("endDate", this.endDate).set("duration", this.duration);

      this._http.get<any[]>('/stock-module/compare/export', { params }).subscribe(data => {
        this.result = data;
        console.log("This is result ", this.result.data);       
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.result.data);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'comparisonreport_'+this.stockExchangeCode);
      },
        error => {
          console.log("Error occurred", error);
          alert(error);
        });


    }

    private saveAsExcelFile(buffer: any, fileName: string) {
      const data: Blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      });
      FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + '.xls');
    }

}
