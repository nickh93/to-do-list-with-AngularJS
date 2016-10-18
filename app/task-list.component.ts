import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="isDone">Show Completed Tasks</option>
    <option value="notDone" slected="selected">Show Incomplete Tasks</option>
  </select>
  <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
    <h3>{{ currentTask.description }}</h3>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
  </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
