import { EmployeeAddModule } from './employee-add.module';

describe('EmployeeAddModule', () => {
  let employeeAddModule: EmployeeAddModule;

  beforeEach(() => {
    employeeAddModule = new EmployeeAddModule();
  });

  it('should create an instance', () => {
    expect(employeeAddModule).toBeTruthy();
  });
});
