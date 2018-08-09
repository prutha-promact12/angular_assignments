import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Employee } from './employee-add.model';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  @ViewChild(NgForm) from:NgForm;
  @Input() employees: IEmployee;
  pageTitle: string="Add Employee";
  qualification_list=[];
  employee: IEmployee[]=[];
  experience=[];
  language:[ {languageName : string,isEnable : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable : boolean}];
    obj:Array<any>=[];
  model:any;
  

 
  onChange(langu:string, isChecked:boolean)
  {
    
    if(isChecked)
      {
      this.model.languages.push(langu);
      }
      else{
        let index =this.model.languages.indexOf(langu);
        this.model.languages.splice(index,1);
      }
  }
  
constructor(private employeeService: EmployeeService,private location:Location) {  }
 
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
                 this.model=new Employee('','','','','','','','','','');
                 /*this.obj={
                 this.model.firstName,
                 this.model.lastName,
                 this.model.email,
                 this.model.contactNo,
                 this.model.address,
                 this.model.userName,
                 this.model.password,
                 this.model.gender,
                 this.model.qualification,
                 this.model.exper}*/
              //  this.model=new Employee('Prutha ','shankpal','prutha@gmail.com');
              
  }

  add(firstName: string,
    lastName: string, 
    email: string,
    contactno: string,
    address: string, 
    userName: string, 
    password : string,
    gender: string,
    qualification:string,
    experince: string,
    codingLanguages:string[]=[] ): void{
    firstName =firstName;
    lastName = lastName;
    email=email;
    contactno=contactno;
    address=address;
    userName=userName;
    password=password;
    gender=gender;
    qualification=qualification;
    experince=experince;
    codingLanguages=codingLanguages;
    if( !firstName || !lastName || !email || !contactno || !address || !userName || !password || !qualification || !experince)
    {
      return;
    }
    this.employeeService.addEmployee({firstName, lastName, email, contactno, address, userName, password, gender,qualification,experince,codingLanguages }  as IEmployee).subscribe(employee => { this.employee.push(employee);});
  }

  goBack(): void{
    this.location.back();
  }
  submit()
  {
    console.log(this.model);
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
