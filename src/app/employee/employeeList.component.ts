import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {
  employees: any[];

  selectedEmployeeCountRadioButton: string = 'All';

  constructor() {
    this.employees = [
      {
        code: 'emp101',
        name: 'Tom',
        gender: 'Male',
        annualSalary: 5500,
        dateOfBirth: '6/25/1988'
      },
      {
        code: 'emp102',
        name: 'Alex',
        gender: 'Male',
        annualSalary: 5700.95,
        dateOfBirth: '6/9/1982'
      },
      {
        code: 'emp103',
        name: 'Mike',
        gender: 'Male',
        annualSalary: 5900,
        dateOfBirth: '8/12/1979'
      },
      {
        code: 'emp104',
        name: 'Mary',
        gender: 'Female',
        annualSalary: 6500.826,
        dateOfBirth: '10/14/1980'
      },
      {
        code: 'emp105',
        name: 'Nancy',
        gender: 'Female',
        annualSalary: 6507.83,
        dateOfBirth: '01/15/1967'
      },
      {
        code: 'emp106',
        name: 'Steve',
        gender: 'Male',
        annualSalary: 3405.12,
        dateOfBirth: '02/04/1981'
      }
    ];
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }
}
