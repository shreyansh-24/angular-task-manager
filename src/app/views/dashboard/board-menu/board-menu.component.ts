import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.css']
})
export class BoardMenuComponent implements OnInit {

  public teamFlag: any = 'test';

  @Output() sendTeamFlag = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  teamClicked(teamFlag: any) {
    if (teamFlag === 'visible') {
      this.teamFlag = teamFlag;
    }
    if (teamFlag === 'awesome') {
      this.teamFlag = teamFlag;

    }
    this.sendTeamFlag.emit(this.teamFlag);
  }

}
