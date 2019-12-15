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

@Component({
  selector: 'app-show-single-chart',
  templateUrl: './show-single-chart.component.html',
  styleUrls: ['./show-single-chart.component.scss']
})

  export class ShowSingleChartComponent implements OnInit {
   //public dataSource2: any;
   public title: string;
   public result: any;
   // public ds:any;
   // public temp:any;
   public dataSource: any;
   // public dataSource: Fusionchart = new Fusionchart();
 
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
 
  //    this.route.queryParamMap.subscribe(data => {
  //      console.log(data);
  //      this.companyCodeList = data.get('companyCodeList');
  //      this.sectorCodeList = data.get('sectorCodeList');
  //      this.stockExchangeCode = data.get('stockExchangeCode');
  //      this.startDate = data.get('startDate');
  //      this.endDate = data.get('endDate');

  //      this.companyCodeList = '500112';
  //      this.sectorCodeList = '';
  //      this.stockExchangeCode = 'BSE';
  //      this.startDate = '2010-01-01';
  //      this.endDate = '2020-01-01';
 
  //      this.type = 'line';
  //      var params = new HttpParams().set("companyCodeList", this.companyCodeList)
  //        .set("sectorCodeList", this.sectorCodeList).set("stockExchangeCode", this.stockExchangeCode)
  //        .set("startDate", this.startDate).set("endDate", this.endDate);
 
  //      this._http.get<any[]>('/stock-module/compare/singleresult', { params }).subscribe(data => {
  //        console.log("Request is success", data);
  //        this.title = "Angular Stock Exchange Comparison";
  //        this.dataSource = data;
  //        //this.result = this.dataSource.data.comp;
  //        this.result = this.dataSource.data;
  //        console.log("This is result ", this.result);
  //      },
  //        error => {
  //          console.log("Error occurred", error);
  //          alert(error);
  //        });
 
  //    });
 
  //  }
 
  //  public addMore() {
  //    var navigationExtras: NavigationExtras = {
  //      queryParams: {
  //        'companyCodeList': this.companyCodeList,
  //        'sectorCodeList': this.sectorCodeList,
  //        'stockExchangeCode': this.stockExchangeCode,
  //        'startDate': this.startDate,
  //        'endDate': this.endDate
  //      }
  //    };
  //    //window.location.reload();
  //    this.router.navigate(['/user/add-compare'], navigationExtras);
  //  }


  



 
   }


   data = {
    chart: {
      caption: "App Publishing Trend",
      subcaption: "2012-2016",
      xaxisname: "Years",
      yaxisname: "Total number of apps in store",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      theme: "fusion",
      drawcrossline: "1"
    },
    categories: [
      {
        category: [
          {
            label: "2012"
          },
          {
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "iOS App Store",
        data: [
          {
            value: "125000"
          },
          {
            value: "300000"
          },
          {
            value: "480000"
          },
          {
            value: "800000"
          },
          {
            value: "1100000"
          }
        ]
      },
      {
        seriesname: "Google Play Store",
        data: [
          {
            value: "70000"
          },
          {
            value: "150000"
          },
          {
            value: "350000"
          },
          {
            value: "600000"
          },
          {
            value: "1400000"
          }
        ],
        trendline: [{
          line: [{
            "startvalue":"2600000",
          "color":"91C728",
          "displayvalue":"Target",
          "showontop":"1"
          }]
      }]
      },
      {
        seriesname: "Amazon AppStore",
        data: [
          {
            value: "10000"
          },
          {
            value: "100000"
          },
          {
            value: "300000"
          },
          {
            value: "600000"
          },
          {
            value: "900000"
          }
        ]
      }
    ]
  };



   public addOneMore() {
     var navigationExtras: NavigationExtras = {
       queryParams: {
         'companyCodeList': '600115',
         'sectorCodeList': 'FIN',
         'stockExchangeCode': 'BSE',
         'startDate': this.startDate,
         'endDate': this.endDate
       }
     };
     //window.location.reload();
     this.router.navigate(['/user/show-chart'], navigationExtras);
   }
 
 
    public chooseBar() {
     
       this.type = 'column2d';
   }
 
  }
  
  