import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-do';
  
  selectedTask: Task;
  
  addNewTask(){
    let createdTask: Task = new Task('', 'high');
    this.tasks.push(createdTask);
    this.selectedTask = createdTask;
  }
}
