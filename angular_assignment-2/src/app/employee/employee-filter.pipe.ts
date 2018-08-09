import { Pipe, PipeTransform } from "@angular/core";
import { IEmployee } from "./employee";

@Pipe({
    name:'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{
    transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((employee: IEmployee) =>
            employee.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}