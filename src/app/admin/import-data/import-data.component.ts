import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  public selectedFile:any;
  public inputdata:any;
  public inputdata2:any;

  public onFileChange(file: any) {
    /* wire up file reader */
    //const target: DataTransfer = <DataTransfer>(evt.target);
    //if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        var data = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    if (file._file)
        reader.readAsBinaryString(file._file);
  }

  public message:string;
  public result:any;

  public preCheck(evt: any)
  {
      this.selectedFile = evt.target.files[0];
      // const httpOptions = {
      //   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data','X-Requested-With': 'XMLHttpRequest' })
      // };
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      console.log(this.selectedFile);
      this._http.post<any[]>('/stock-module/import/precheck', formData).subscribe(data => {
        console.log(data);
        this.result = data;
        this.message = this.result.message;
        alert(this.message);
  },
  );
}

  public upload(evt: any)
  {
      this.selectedFile = evt.target.files[0];
      // const httpOptions = {
      //   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data','X-Requested-With': 'XMLHttpRequest' })
      // };
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      console.log(this.selectedFile);
      this._http.post<any[]>('/stock-module/import/upload', formData).subscribe(data => {
        console.log(data);
        this.result = data;
        this.message = this.result.message;
        alert(this.message);
  },
  );
}


// daoru(evt: any) {
//   /* wire up file reader */
//   const target: DataTransfer = <DataTransfer>(evt.target);
//   if (target.files.length !== 1) throw new Error('Cannot use multiple files');
//   const reader: FileReader = new FileReader();
//   reader.onload = (e: any) => {
//     /* read workbook */
//     const bstr: string = e.target.result;
//     const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

//     /* grab first sheet */
//     const wsname: string = wb.SheetNames[0];
//     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

//     /* save data */
//     this.inputdata = (XLSX.utils.sheet_to_json(ws, {header: 1}));
//     console.log("Printing inputdata......");
//     console.log(this.inputdata);
//     const httpOptions = {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     };
//     this.inputdata2 = this.inputdata;
//     this._http.post<any[]>('http://127.0.0.1:8080/upload', this.inputdata, httpOptions).subscribe(data => {
//       console.log(data);
//   });

//     evt.target.value="" // 清空
//   }
  
//    reader.readAsBinaryString(target.files[0]);
// }


}

