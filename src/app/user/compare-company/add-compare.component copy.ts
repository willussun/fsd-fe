import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-add-compare',
  templateUrl: './add-compare.component.html',
  styleUrls: ['./add-compare.component.scss']
})
export class AddCompareComponent implements OnInit {

  constructor(private _http: HttpClient, public router: Router, public route: ActivatedRoute){};

  public companyNameList: string;
  public sectorCodeList: string;
  public companyName: string;
  public sectorCode: string;
  public stockExchangeCode: string;
  public startDate: string;
  public endDate: string;
  public result: any;
  public title: string;
  public dataSource: any;

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      console.log(data);
      this.companyNameList = data.get('companyNameList');
      this.sectorCodeList = data.get('sectorCodeList');
      this.stockExchangeCode = data.get('stockExchangeCode');
      this.startDate = data.get('startDate');
      this.endDate = data.get('endDate');

  });
  }


  public onAdd(f: NgForm) {

    alert("This is test");
    if (this.companyNameList == null || this.companyNameList == "") {
      this.companyNameList = this.companyName;
    }
    else
      this.companyNameList = this.companyNameList + "," + this.companyName;

    alert(this.companyNameList);

    if (this.sectorCodeList == null || this.sectorCodeList == "") {
      this.sectorCodeList = this.sectorCode;
    }
    else
      this.sectorCodeList = this.sectorCodeList + "," + this.sectorCode;
    alert(this.sectorCodeList);

      this.stockExchangeCode = 'BSE';
      this.startDate = '2010-01-01';
      this.endDate = '2020-01-01';

    var navigationExtras: NavigationExtras = {
      queryParams: { 'companyNameList': this.companyNameList,
                    'sectorCodeList': this.sectorCodeList,
                  'stockExchangeCode': this.stockExchangeCode,
                'startDate': this.startDate,
              'endDate': this.endDate }
    };
    alert("Redrawing");
    //window.location.reload();
    this.router.navigate(['/user/show-chart'], navigationExtras);
  }
}



