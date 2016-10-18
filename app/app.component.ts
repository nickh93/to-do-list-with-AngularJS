import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <div *ngFor="let currentTask of tasks">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
    <div *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter a Task Description:</label>
        <input [(ngModel)] = "selectedTask.description">
      </div>
      <div>
        <label>Enter a Task Id:</label>
        <input [(ngModel)]="selectedTask.id">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
  public tasks: Task[] = [
    new Task("Create To-Do list App", 0),
    new Task("Learn Kung Fu", 1),
    new Task("Rewatch all of the Game of Thrones Series", 2),
    new Task("Do laundry", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
 }

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) { }
}
