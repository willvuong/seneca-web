import { Component, OnInit } from '@angular/core';
import { Employee } from "./data/employee";
import { EmployeeService } from "./data/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: ['/employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  getEmployeeSub: any;
  loadingError: boolean = false;

  constructor(private empServ: EmployeeService, private router: Router) { }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  ngOnInit() {
    this.getEmployeeSub = this.empServ.getEmployees().subscribe(e => this.employees = e, () => {
      this.loadingError = true;
    })
    this.getEmployeeSub = this.empServ.getEmployees().subscribe(e => this.filteredEmployees = e, () => {
      this.loadingError = true;
    })
  }

  onEmployeeSearchKeyUP(event: any) {
    this.filteredEmployees = this.employees.filter((tempEmployee) => {
      return (
        tempEmployee.FirstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
        tempEmployee.LastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
        tempEmployee.Position.PositionName.toLowerCase().includes(event.target.value.toLowerCase()))
    });
  }

  ngOnDestroy() {
    if (this.getEmployeeSub) {
      this.getEmployeeSub.unsubscribe();
    }
  }

}