import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: '../../template/employee.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  qualification_list=[];
  experience=[];
  language:[ {languageName : string,isEnable : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable : boolean}];
    obj:Array<any>=[];
  model:any;
  constructor() { }
  firstNameToUpperCase(value: string)
  {
      if(value.length > 0)
      {
        this.model.firstName = value.charAt(0).toUpperCase() +value.slice(1);
      }
      else
      {
          this.model.firstName =value;
      }
  };
 
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
 /* checklanguages(): any{
    for(let i=0; i<this.language.length; i++)
    {
      if(this.language[i].isEnable == true){
        console.log(this.model.languages[i].languageName);
      }

    }
      
  }*/


  ngOnInit(): void {
    this.qualification_list= new Array("MCA", "BCA", "BE" ,"ME");
    this.experience= new Array("6 Month","1 Year","2 Year","3 Year","4 Year","5 Year");

    this.model=new Employee('','','','','','','','','','');
  
    this.language=
                [
                    {languageName : "C/C++",isEnable: true},
                    {languageName : "Java",isEnable  : true},
                    {languageName : "C#",isEnable  : false},
                    {languageName : "PHP",isEnable  : false},
                    {languageName : "Pyphon",isEnable : false},
                ];

    this.model.languages.push("C/C++");
    this.model.languages.push("Java");
                 
                 /*this.obj={
                 this.model.firstName,
                 this.model.lastName,A
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
            
            submit()
            {
              console.log(this.model);
            }

}
