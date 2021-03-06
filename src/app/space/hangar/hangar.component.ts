import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = []; /* Adding empty array of SpaceShips*/
  selectedPilot: Pilot = null;
  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('San Holo', '/assets/rhino.jfif')));
    this.spaceShips.push(new BomberShip());
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

}
