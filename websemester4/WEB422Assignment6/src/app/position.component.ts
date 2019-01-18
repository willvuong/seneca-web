import { Component, OnInit } from '@angular/core';
import { Position } from './data/position';
import { PositionService } from './data/position.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styles: ['/position.component.css']
})
export class PositionComponent implements OnInit {
  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false
  failMessage: boolean = false

  constructor(private positionService: PositionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe((params) => {
      this.positionSubscription = this.positionService.getPosition(params['_id']).subscribe(tempPositions => [
        this.position = tempPositions[0]
      ])
    })
  }

  onSubmit(f: NgForm): void {
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(tempPosition => {
      this.successMessage = true;
      setTimeout(() => { this.successMessage = false }, 2500);
    }, error => {
      this.failMessage = true;
      setTimeout(() => { this.failMessage = false }, 2500);
    })
  }

  ngOnDestroy() {
    if (this.paramSubscription != null) { this.paramSubscription.unsubscribe() }
    if (this.positionSubscription != null) { this.positionSubscription.unsubscribe() }
    if (this.savePositionSubscription != null) { this.savePositionSubscription.unsubscribe() }
  }

}
