import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  @Output() selected = new EventEmitter<Pilot>(); /*Equivalent of Event in C#*/

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Mietek Piloter', '/assets/pilot.png'));
    this.pilots.push(new Pilot('Jack Frost', '/assets/frost.jfif'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot); /*triggers an event - notify listeners */
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }
}
