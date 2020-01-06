import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = []; /* Adding empty array of SpaceShips*/
  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('San Holo', '/assets/rhino.jfif')));
    this.spaceShips.push(new BomberShip());
  }

}
