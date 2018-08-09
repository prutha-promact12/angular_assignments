import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pageTitle:string="Employee List";
 employees: IEmployee[]=[];
  listFilter: string;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,) { 
  
  }

  ngOnInit() : void {
    this.employeeService.getEmployees().subscribe(employees => this.employees=employees);
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
  }

 
  delete(employee:IEmployee): void{
    if(confirm(`Yow really want to delete Employee: ${employee.firstName}?`))
    {

      this.employees=this.employees.filter(e => e !== employee );
      this.employeeService.deleteEmployee(employee).subscribe();
    }
   

  }
}
/*  if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(
                        () => this.onSaveComplete(`${this.product.productName} was deleted`),
                        (error: any) => this.errorMessage = <any>error
                    );
            }*/ 