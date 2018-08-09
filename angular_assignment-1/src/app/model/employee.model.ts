export class Employee {
    // this is class property..
    /*firstName:string;
    lastName:string;
    email: string;
    contactNo:string;
    address:string;
    userName:string;
    password:string;
    gender:string;
    qualification:string;
    exper:string;
    language:Array<any>=[];*/
    constructor( 
                public firstName:string,
                private lastName:string,
                private email:string,
                private contactNo:string,
                private address:string,
                private userName:string,
                private password:string,
                private gender:string,
                private qualification:string,
                private exper:string,
                public languages:Array<any>=[]
            )
    {}

}
