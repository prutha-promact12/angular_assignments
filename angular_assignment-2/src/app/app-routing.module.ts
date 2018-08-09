import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './employee/page-not-found.component';
import { EmployeeAddComponent } from './employee/employee-add.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'EmployeeList', component: EmployeeListComponent},
  
  { path : 'EmployeeAdd', component: EmployeeAddComponent },
  { path : 'EmployeeDetail/:id', component: EmployeeDetailComponent},
  { path : 'EmployeeEdit/:id/edit', component: EmployeeEditComponent},
  { path : '', redirectTo: 'EmployeeList', pathMatch: 'full' },
  { path : '**', component : PageNotFoundComponent}], { enableTracing: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
