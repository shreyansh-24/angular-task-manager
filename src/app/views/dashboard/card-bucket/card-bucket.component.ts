import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-bucket',
  templateUrl: './card-bucket.component.html',
  styleUrls: ['./card-bucket.component.css']
})
export class CardBucketComponent implements OnInit, OnChanges {
  public todoActive: any = false;
  public doingActive: any = false;
  public completedActive: any = false;
  @Input() teamName: any;
  public showHideTeams: string;


  public toDo: any = [
    'Complete mock-up for client website',
    'Email mock-up to client for feedback',
    'Update personal website header background image',
    'Update personal website heading fonts',
    'Add google map to personal website',
    'Begin draft of CSS Grid article',
    'Read new CSS-Tricks articles',
  ];

  public doing: any = [
    'Read new Smashing Magazine articles',
    'Read other bookmarked articles',
    'Look through portfolios to gather inspiration',
    'Create something cool for CodePen',
    'Post latest CodePen work on Twitter',

  ];

  public done: any = [
    'Mock completed list item 1',
    'Mock completed list item 2',
    'Listen to new Syntax.fm episode',
    'Listen to new CodePen Radio episode'
  ];

  public toDoValue: string;
  public doingValue: string;
  public completedValue: string;


  constructor() { }

  ngOnInit() {
    console.log('to do list : ', this.toDo);
    console.log('doing list : ', this.doing);
    console.log('completed list : ', this.done);
    console.log('team name in bucket ==== ', this.teamName);
    this.showHideTeams = 'visible';
  }
  ngOnChanges(changes: SimpleChanges) {
    this.showHideTeams = changes.teamName.currentValue;
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log('to do list : ', this.toDo);
    console.log('doing list : ', this.doing);
    console.log('completed list : ', this.done);
  }

  addActionItem(boardName: any) {
    if (boardName === 'todo') {
      this.todoActive = true;
    }
    if (boardName === 'doing') {
      this.doingActive = true;
    }
    if (boardName === 'completed') {
      this.completedActive = true;
    }
  }

  pushToArray(boardName: any) {
    if (boardName === 'todo') {
      this.toDo.push(this.toDoValue);
      this.reset();
    }
    if (boardName === 'doing') {
      this.doing.push(this.doingValue);
      this.reset();
    }
    if (boardName === 'completed') {
      this.done.push(this.completedValue);
      this.reset();
    }
  }
  reset() {
    this.completedValue = '';
    this.toDoValue = '';
    this.doingValue = '';
    this.todoActive = false;
    this.doingActive = false;
    this.completedActive = false;

  }
}
