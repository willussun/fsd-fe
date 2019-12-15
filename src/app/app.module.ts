import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { ManageCompanyIpoComponent } from './admin/manage-company-ipo/manage-company-ipo.component';
import { ManageIpoComponent } from './admin/manage-ipo/manage-ipo.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { ShowChartComponent } from './user/show-chart/show-chart.component';

import { DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { UserComponent } from './user/user.component';
import { InterceptorService } from './interceptor.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowSingleChartComponent } from './user/show-single-chart/show-single-chart.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorComponent } from './user/compare-sector/compare-sector.component';
import { CompareComplexComponent } from './user/compare-complex/compare-complex.component';
import { QueryCompanyComponent } from './user/query-company/query-company.component';
import { QueryCompanyIpoComponent } from './user/query-company-ipo/query-company-ipo.component';
import { QueryDetailComponent } from './user/query-detail/query-detail.component';



FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


@NgModule({
  declarations: [
    AppComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    ImportDataComponent,
    ListCompanyComponent,
    ManageCompanyIpoComponent,
    ManageIpoComponent,
    UpdateIpoComponent,
    UpdateCompanyComponent,
    ShowChartComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    LogoutComponent,
    CompareCompanyComponent,
    ShowSingleChartComponent,
    CompareSectorComponent,
    CompareComplexComponent,
    QueryCompanyComponent,
    QueryCompanyIpoComponent,
    QueryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
  ],
  providers: [       
     {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
