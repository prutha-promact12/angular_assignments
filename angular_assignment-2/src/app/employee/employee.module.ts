import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeListComponent
      },
      { 
        path: 'id',
        component: EmployeeDetailComponent
      },
      {
        path : 'edit/id',
        component: EmployeeEditComponent,
        children:[
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: EmployeeEditComponent
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class EmployeeModule { }
