import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { IEmployee } from './employee';
export class Employeedata implements InMemoryDbService, InMemoryBackendConfig{
    createDb(){
        let employees: IEmployee[]=[
            {
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
            },
        ];
        return { employees };
    }
}