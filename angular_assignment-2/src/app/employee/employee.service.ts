import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';
import { of } from 'rxjs';
import { RequestOptions } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private employeeUrl='api/employees';
  /*employees: IEmployee[]=[{
    'id':1,
    'firstName': 'Prutha',
    'lastName':'Shankpal',
    'email':'pru@gamil.com',
    'contactno':'9638527410',
    'address':'Vadodara',
    'userName':'Sprutha',
    'password':'123abc',
    'gender':'Female',
    'qualification':'MCA',
    'experince':'1 Year',
    'codingLanguages':['C/C++','Java','C#']
  },
  {
    'id':2,
    'firstName': 'Nirav',
    'lastName':'Chudasama',
    'email':'nirav@yahoo.com',
    'contactno':'7894561236',
    'address':'Amdabad',
    'userName':'nirav123',
    'password':'kjl',
    'gender':'Male',
    'qualification':'BE',
    'experince':'3 Year',
    'codingLanguages':['C/C++','Java','PHP']
  },
  {
    'id':3,
    'firstName': 'Kajal',
    'lastName':'Sangada',
    'email':'kaju@gamil.com',
    'contactno':'7539158620',
    'address':'Surat',
    'userName':'Kajals',
    'password':'NMP',
    'gender':'Female',
    'qualification':'BCA',
    'experince':'3 Year',
    'codingLanguages':['C/C++','Java','C#', 'Python']
  },
  {
    'id':4,
    'firstName': 'Ishan',
    'lastName':'Patel',
    'email':'ishan@gamil.com',
    'contactno':'9685743210',
    'address':'Mumbai',
    'userName':'PIshan',
    'password':'PQR456',
    'gender':'Male',
    'qualification':'ME',
    'experince':'4 Year',
    'codingLanguages':['C/C++','Java','C#', 'PHP']
  },
  {
    'id':5,
    'firstName': 'Neel',
    'lastName':'Thakkar',
    'email':'neel@gamil.com',
    'contactno':'7598642130',
    'address':'Delhi',
    'userName':'Tneel',
    'password':'121JKS',
    'gender':'Male',
    'qualification':'MCA',
    'experince':'1 Year',
    'codingLanguages':['C/C++','Java','Python']
  },];*/

  

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>   {
    return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
      tap(employees => console.log('Featched Employee')),
      catchError(this.handleError('getEmployees',[]))
    );
  }
  getEmployee(id: number): Observable<IEmployee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<IEmployee>(url).pipe(
      tap(_=> console.log(`Fetched Employee id=${id}`)),
      catchError(this.handleError<IEmployee>(`getEmployee id=${id}`))
    );
    
  }

  getHeroNo404<Data>(id: number): Observable<IEmployee> {
    const url = `${this.employeeUrl}/?id=${id}`;
    return this.http.get<IEmployee[]>(url)
      .pipe(
        map(employees => employees[0]), // returns a {0|1} element array
        tap(e => {
          const outcome = e ? `fetched` : `did not find`;
          console.log(`${outcome} employee id=${id}`);
        }),
        catchError(this.handleError<IEmployee>(`getEmployee id=${id}`))
      );
  }

  //Add Employee
  addEmployee(employee: IEmployee): Observable<IEmployee>{
    return this.http.post<IEmployee>(this.employeeUrl,employee,httpOptions).pipe(
      tap((employee:IEmployee) => console.log(`Added Employee w/ id=${employee.id}`)),
      catchError(this.handleError<IEmployee>('addEmployee'))
    );
  }

  //Search Employee
  searchEmployees(term: string): Observable<IEmployee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<IEmployee[]>(`${this.employeeUrl}/?firstName=${term}`).pipe(
      tap(_ => console.log(`found employees matching "${term}"`)),
      catchError(this.handleError<IEmployee[]>('searchEmployees', []))
    );
  }

  //Delete Employee
  deleteEmployee(employee: IEmployee | number): Observable<IEmployee>{
    const Id = typeof employee === 'number' ? employee : employee.id;
    const url =`${this.employeeUrl}/${Id}`;
   
    return this.http.delete<IEmployee>(url,httpOptions).pipe(
      tap(_=>console.log(`Deleted Employee id =${Id}`)),
    catchError(this.handleError<IEmployee>('deleteEmployee')));
  }
  
  //Update Employee
  updateEmployee(employee: IEmployee): Observable<any>{
    return this.http.put(this.employeeUrl,employee,httpOptions).pipe(
      tap(_=> console.log(`Updated Employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }
  
  //Error Handling
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
