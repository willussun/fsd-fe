import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { IpoDetail } from '../../models/ipo-detail';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss']
})
export class ManageCompanyComponent implements OnInit {

  public company: Company = new Company();
  // public ipoDetailSet: Array<IpoDetail> = new Array<IpoDetail>();
  public ipoDetail: IpoDetail = new IpoDetail();
  public result: any;
  public result2: any;
  public data2:string;

  public resultData:any;
  public resultCode:string;

  constructor(private _http: HttpClient, private router: Router ) {

    // this._http.get<any[]>('http://localhost:8012/api/v1/ipodetails').subscribe(data => {
    //   this.result = data;
    //   console.log("printing this result...");
    //   this.resultData = this.result.data.list;
    //   this.resultCode = this.result.code;

    //   console.log(this.resultData);
    //   console.log(this.resultCode);
    //   }
    //   );
  }

  // radioChangeHandler (event: any) {
  //   this.selectedDay = event.target.value;
  // }


  ngOnInit() {
    // this.genders = [ 'Male', 'Female', 'Other' ];
    // this.communicationModes = [ 'Phone', 'Email' ];
    this._http.get<any[]>('/stock-module/sector/all').subscribe((data) => {
        console.log(data);
      this.result2 = data;
      console.log(this.result2);
    });
  }


  // public onSuccess(f: NgForm) {
  //   console.log(f);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   console.log("begin create company");

  //   this._http.post<any[]>('http://localhost:8012/api/v1/companies',
  //     {
  //       "companyName": this.company.companyName,
  //       "turnover": this.company.turnover,
  //       "ceo": this.company.ceo,
  //       "boardDirector": this.company.boardDirector,
  //       "sectorCode": this.company.sectorCode,
  //       "briefWriteUp": this.company.briefWriteup
  //     },
  //     httpOptions).subscribe(data => {
  //       console.log(data);
  //     }
  //     );
  // }

  public onCreateCompany(f: NgForm) {
    console.log(f);
   
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    this.company.status = 1;
    console.log("begin create company");
      this._http.post<any[]>('/stock-module/companies',
      this.company,
      httpOptions).subscribe((data) => {
        console.log(data);
        alert("Your company is successfully created.");
        this.router.navigate(['/admin/list-company']);
      }
      );
  }

  public resultAll:any;
  public resultAllData:any;
  public resultAllCode:string;

}
