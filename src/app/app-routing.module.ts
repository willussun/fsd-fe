import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { ManageCompanyIpoComponent } from './admin/manage-company-ipo/manage-company-ipo.component';
import { ManageIpoComponent } from './admin/manage-ipo/manage-ipo.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { ShowChartComponent } from '././user/show-chart/show-chart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { CompareCompanyComponent } from './user/compare-company/compare-company.component';
import { CompareSectorComponent } from './user/compare-sector/compare-sector.component';
import { CompareComplexComponent } from './user/compare-complex/compare-complex.component';
import { QueryCompanyComponent } from './user/query-company/query-company.component';
import { QueryCompanyIpoComponent} from './user/query-company-ipo/query-company-ipo.component';
import { QueryDetailComponent} from './user/query-detail/query-detail.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'user', component: UserComponent,

    children: [
      {
        path: 'register', component: RegisterComponent
      },

      {
        path: 'show-chart', component: ShowChartComponent
      },
      {
        path: 'compare-company', component: CompareCompanyComponent
      },
      {
        path: 'compare-sector', component: CompareSectorComponent
      },
      {
        path: 'compare-complex', component: CompareComplexComponent
      },
      {
        path: 'query-company', component: QueryCompanyComponent
      },
      {
        path: 'query-company-ipo', component: QueryCompanyIpoComponent
      },
      {
        path: 'query-detail', component: QueryDetailComponent
      }
    ]
  },



  {
    path: 'admin', component: AdminComponent,

    children: [
      {
        path: 'import-data', component: ImportDataComponent
      },
      {
        path: 'manage-company', component: ManageCompanyComponent
      },
      {
        path: 'update-company', component: UpdateCompanyComponent
      },
      {
        path: 'manage-exchange', component: ManageExchangeComponent
      },
      {
        path: 'list-company', component: ListCompanyComponent
      },

      {
        path: 'manage-company-ipo', component: ManageCompanyIpoComponent
      },
      {
        path: 'manage-ipo', component: ManageIpoComponent
      },
      {
        path: 'update-ipo', component: UpdateIpoComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
