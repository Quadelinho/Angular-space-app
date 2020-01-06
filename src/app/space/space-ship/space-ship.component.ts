import { Component, Input, OnInit } from '@angular/core'; /*elements separated by comma are decorators imported from given package*/
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {

  constructor() { }

  @Input() spaceShip: SpaceShip;

  ngOnInit() {
  }

}
