import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employee-management-system-ui-angular';

  public employees: Employee[] = [];
  public editEmployee: Employee | undefined;
  public deleteEmployee: Employee | undefined;

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "inline-block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  constructor(private employeeService: EmployeeService) {}

  // it's going to be called when the component is initialized
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')!.click();
    this.employeeService.addEmployee(addForm.value).subscribe({
      next: (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateEmployee(employee: Employee | undefined): void {
    this.employeeService.updateEmployee(employee).subscribe({
      next: (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }


  public onDeleteEmployee(employeeId: number | undefined): void {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }


  public onOpenModal(mode: string, employee?: Employee): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
}
