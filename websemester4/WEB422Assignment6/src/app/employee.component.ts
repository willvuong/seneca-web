import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from './data/employeeRaw';
import { Position } from './data/position';
import { EmployeeService } from './data/employee.service';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from './data/position.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: ['/employee.component.css']
})
export class EmployeeComponent implements OnInit {
  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
      this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((tempEmployee) => {
        this.employee = tempEmployee[0];
        this.getPositionsSubcription = this.positionService.getPositions().subscribe(tempPositions => {
          this.positions = tempPositions;
        })
      })
    })
  }

  onSubmit(f: NgForm): void {
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(tempEmployee => {
      this.successMessage = true;
      setTimeout(() => { this.failMessage = false }, 2500);
    }, error => {
      this.failMessage = true;
      setTimeout(() => { this.failMessage = false }, 2500);
    })
  }

  ngOnDestroy() {
    if (this.paramSubscription != null) { this.paramSubscription.unsubscribe() }
    if (this.employeeSubscription != null) { this.employeeSubscription.unsubscribe() }
    if (this.getPositionsSubcription != null) { this.getPositionsSubcription.unsubscribe() }
    if (this.saveEmployeeSubscription != null) { this.saveEmployeeSubscription.unsubscribe() }
  }
}
