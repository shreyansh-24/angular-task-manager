import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-bucket',
  templateUrl: './card-bucket.component.html',
  styleUrls: ['./card-bucket.component.css']
})
export class CardBucketComponent implements OnInit {
  public todoActive: any = false;
  public doingActive: any = false;
  public completedActive: any = false;


  public toDo: any = [
    'Mock To Do List Item 1',
    'Mock To Do List Item 2',
    'Mock To Do List Item 3',
    'Mock To Do List Item 4',
    'Mock To Do List Item 5',
    'Mock To Do List Item 6'
  ];

  public doing: any = [
    'Mock ongoing list item 1',
    'Mock ongoing list item 2',
    'Mock ongoing list item 3',
    'Mock ongoing list item 4',
    'Mock ongoing list item 5',
    'Mock ongoing list item 6'
  ];

  public done: any = [
    'Mock completed list item 1',
    'Mock completed list item 2',
    'Mock completed list item 3',
    'Mock completed list item 4',
    'Mock completed list item 5',
    'Mock completed list item 6'
  ];

  public toDoValue: string;
  public doingValue: string;
  public completedValue: string;


  constructor() { }

  ngOnInit() {
    console.log('to do list : ', this.toDo);
    console.log('doing list : ', this.doing);
    console.log('completed list : ', this.done);
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
