import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Company } from '../../models/company'
@Component({
  selector: 'app-compare-sector',
  templateUrl: './compare-sector.component.html',
  styleUrls: ['./compare-sector.component.scss']
})
export class CompareSectorComponent implements OnInit {

  constructor(private _http: HttpClient, public router: Router, public route: ActivatedRoute) { };


  public duration: string;

  public companyCodeList: string;
  public sectorCodeList: string;
  public companyCode: string;
  public sectorCode: string;
  public stockExchangeCode: string;
  public startDate: string;
  public endDate: string;
  public result: any;
  public title: string;
  public dataSource: any;
  public result2: any;
  public result3: any;
  public result4: any;
  public companyName: string;
  public currentStockExchangeCode: string;

  public sectorCode1: string = "";
  public sectorCode2: string = "";
  public sectorCode3: string = "";


  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      console.log(data);
      // this.companyCodeList = data.get('companyCodeList');
      // this.sectorCodeList = data.get('sectorCodeList');
      // this.stockExchangeCode = data.get('stockExchangeCode');
      // this.startDate = data.get('startDate');
      // this.endDate = data.get('endDate');

      // if (this.companyCodeList == null || this.companyCodeList == "") {
      //   this.companyCodeList = this.companyCode;
      // }

      // if (this.sectorCodeList == null || this.sectorCodeList == "") {
      //   this.sectorCodeList = this.sectorCode;
      // }

      this._http.get<any[]>('/stock-module/stockexchanges/').subscribe((data2) => {
        console.log(data2);
        this.result2 = data2;
        this.result3 = this.result2.data.list;
        console.log(this.result3);

        // var params = new HttpParams().set("stockExchangeCode", this.currentStockExchangeCode);


        // this._http.get<any[]>('/stock-module/ipodetails/', { params }).subscribe((data2) => {
        //   console.log(data2);
        //   this.result2 = data2;
        //   this.result4 = this.result2.data.list;
        //   console.log(this.result4);

        // });

      }, 
      error => {
        console.log("Error occurred", error);
        alert(error);
      });  

      /*        
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
         */
    });
  }

  public companyList: Array<Company> = new Array();

  public showChart(f: NgForm) {


    // alert("This is test");
    // if (this.companyCodeList == null || this.companyCodeList == "") {
    //   this.companyCodeList = this.companyCode;
    // }
    // else if (this.companyCode != null)
    //   this.companyCodeList = this.companyCodeList + "," + this.companyCode;

    // if (this.sectorCodeList == null || this.sectorCodeList == "") {
    //   this.sectorCodeList = this.sectorCode;
    // }
    // else if (this.sectorCode != null)
    //   this.sectorCodeList = this.sectorCodeList + "," + this.sectorCode;

    if ((this.sectorCode1 == null || this.sectorCode1 == "")
      && (this.sectorCode2 == null || this.sectorCode2 == "")
      && (this.sectorCode3 == null || this.sectorCode3 == "")) {
      alert("Hasn't selected sector to compare");
      return;
    }

    if (this.currentStockExchangeCode == null || this.currentStockExchangeCode == "") {
      alert("Hasn't selected stock exchange");
      return;
    }

    if (this.sectorCode1 != null && this.sectorCode1 != "")
      this.sectorCodeList = this.sectorCode1;
    if (this.sectorCode2 != null && this.sectorCode2 != "")
      this.sectorCodeList = this.sectorCodeList + "," + this.sectorCode2;
    if (this.sectorCode3 != null && this.sectorCode3 != "")
      this.sectorCodeList = this.sectorCodeList + "," + this.sectorCode3;

    if (this.duration == null || this.duration == "") {
      alert("Hasn't selected calculation method");
      return;
    }

    if (this.startDate == null || this.startDate == "") {
      alert("Please select start date");
    }

    if (this.endDate == null || this.endDate == "") {
      alert("Please select end date");
    }

    var navigationExtras: NavigationExtras = {
      queryParams: {
        'sectorCodeList': this.sectorCodeList,
        'stockExchangeCode': this.currentStockExchangeCode,
        'startDate': this.startDate,
        'endDate': this.endDate,
        'duration': this.duration
      }
    };
    //window.location.reload();
    this.router.navigate(['/user/show-chart'], navigationExtras);
  }

  public clear(f: NgForm) {
    this.sectorCode = "";
    this.currentStockExchangeCode = "";
    this.sectorCodeList = "";
    this.stockExchangeCode = "";
  }

  public onItemChange(e: any) {
    console.log("StockExchangeCode:" + e);
    var params = new HttpParams().set("stockExchangeCode", e);

    // this._http.get<any[]>('/stock-module/companies/se', { params }).subscribe((data2) => {

    //   console.log(data2);
    //   this.result2 = data2;
    //   this.result4 = this.result2.data;
    //   console.log(this.result4);
    // });

    this._http.get<any[]>('/stock-module/sector/all', { params }).subscribe((data2) => {

      console.log(data2);
      this.result2 = data2;
      this.result4 = this.result2.data.list;
      console.log(this.result4);
    },
      error => {
        console.log("Error occurred", error);
        alert(error);
      });
    
  }


}

