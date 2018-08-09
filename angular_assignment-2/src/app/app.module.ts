import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { PageNotFoundComponent } from './employee/page-not-found.component';
import { EmployeeAddComponent } from './employee/employee-add.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Employeedata } from './employee/employee-data';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { EmployeeSearchComponent } from './employee/employee-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeAddComponent,
    EmployeeFilterPipe,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      Employeedata, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
