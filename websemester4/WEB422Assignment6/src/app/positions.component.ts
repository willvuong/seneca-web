import { Component, OnInit } from '@angular/core';
import { Position } from "./data/position";
import { PositionService } from "./data/position.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styles: ['./positions.component.css']
})

export class PositionsComponent implements OnInit {
  positions: Position[];
  getPositionSub: any;
  loadingError: boolean = false;

  constructor(private posServ: PositionService, private router: Router) { }

  routePosition(id:string) {
    this.router.navigate(['/position', id]);
  }

  ngOnInit() {
    this.getPositionSub = this.posServ.getPositions().subscribe(p => this.positions = p, () => {
      this.loadingError = true;
    })
  }

  ngOnDestroy() {
    if (this.getPositionSub) {
      this.getPositionSub.unsubscribe();
    }
  }

}