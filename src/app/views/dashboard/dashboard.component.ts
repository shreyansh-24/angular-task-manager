import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  public flagData: any;

  ngOnInit() {
  }

  getFlagData($event) {
    this.flagData = $event;
    console.log('flag data in parent =====', this.flagData);
  }

}
