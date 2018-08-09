import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
 pageTitle:string ="Employee Detail :"
 qualification_list=[];
      experience=[];
      language:[ {languageName : string,isEnable : boolean},
        {languageName : string,isEnable  : boolean},
        {languageName : string,isEnable  : boolean},
        {languageName : string,isEnable  : boolean},
        {languageName : string,isEnable : boolean}];
      
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
  getEmployee(): void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(employee => this.employees= employee)
  }
  goBack(): void{
    this.location.back();
  }
}
