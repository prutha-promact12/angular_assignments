import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
    export class EmployeeEditComponent implements OnInit {
      qualification_list=[];
      experience=[];
      language:[ {languageName : string,isEnable : boolean},
        {languageName : string,isEnable  : boolean},
        {languageName : string,isEnable  : boolean},
        {languageName : string,isEnable  : boolean},
        {languageName : string,isEnable : boolean}];
      pageTitle:string="Edit Employee"
      @Input() employees: IEmployee;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location) { }

  ngOnInit() {
    this.qualification_list= new Array("MCA", "BCA", "BE" ,"ME");
    this.experience= new Array("6 Month","1 Year","2 Year","3 Year","4 Year","5 Year");
    this.language=
    [
        {languageName : "C/C++",isEnable: true},
        {languageName : "Java",isEnable  : true},
        {languageName : "C#",isEnable  : false},
        {languageName : "PHP",isEnable  : false},
        {languageName : "Pyphon",isEnable : false},
    ];
    this.getEmployee();
  }
  onChange(langu:string, isChecked:boolean)
  {
    
    if(isChecked)
      {
      this.employees.codingLanguages.push(langu);
      }
      else{
        let index =this.employees.codingLanguages.indexOf(langu);
        this.employees.codingLanguages.splice(index,1);
      }
  }
  getEmployee(): void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(employee => this.employees= employee)
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.employeeService.updateEmployee(this.employees).subscribe(() => this.goBack());
  }
  clear(): void{
    this.employees.firstName= "";
    this.employees.lastName="";
    this.employees.email="";
    this.employees.address="";
    this.employees.contactno="";
    this.employees.userName="";
    this.employees.password="";
    this.employees.gender="";
    this.employees.qualification="";
    this.employees.experince="";
  }
}
