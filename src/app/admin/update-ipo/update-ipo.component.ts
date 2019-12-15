import { Component, OnInit } from '@angular/core';
import { IpoDetail } from '../../models/ipo-detail';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.scss']
})
export class UpdateIpoComponent implements OnInit {

  constructor(public route: ActivatedRoute, private _http: HttpClient, public router: Router) {
    
  }

  public id:any;
  public companyId: any;
  public stockExchangeId: number;

  ngOnInit() {
     this.route.queryParamMap.subscribe((data) => {
      //console.log(data);
      this.id = (data.get('id'));
      this.companyId = (data.get('companyId'));
      console.log(this.id);
      this.ipodetail.id = this.id;
      if (this.id != null) {
        this._http.get<any[]>("/stock-module/ipodetails/" + this.id).subscribe(data => {
          this.result = data;
          console.log("printing this result...");
          console.log("This is the stock Exchange Id...");
          console.log(this.result.data.stockExchangeDto.id);
          this.ipodetail.companyId = this.companyId;
          this.ipodetail.stockExchangeId = this.result.data.stockExchangeDto.id;
          this.ipodetail.stockExchangeCode = this.result.data.stockExchangeCode;
          this.ipodetail.ipoCode = this.result.data.ipoCode;
          this.ipodetail.companyCode = this.result.data.companyCode;
          this.ipodetail.pricePerShare = this.result.data.pricePerShare;
          this.ipodetail.totalNumberShare = this.result.data.totalNumberShare;
          this.ipodetail.remarks = this.result.data.remarks;
          this.ipodetail.openDatetime = this.result.data.openDatetime;
          console.log("time is " + this.ipodetail.openDatetime);
          console.log(this.ipodetail.stockExchangeCode);
        }
        );
      }
    });

  }

  public result: any;
  public resultAllData: any;


  public ipodetail: IpoDetail = new IpoDetail();



  public onUpdateIpoDetail(f: NgForm) {
    console.log(f);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log("begin update ipodetail");

    this._http.post<any[]>('/stock-module/ipodetails/update', this.ipodetail, httpOptions).subscribe(data => {
        console.log(data);
        var navigationExtras: NavigationExtras = {
          queryParams: {'companyId': this.ipodetail.companyId,
          'id': this.ipodetail.id,}
        };
        alert("Your IPO has been successfully updated.");
        this.router.navigate(['/admin/manage-company-ipo'], navigationExtras);
      }
      );

  }
      
}