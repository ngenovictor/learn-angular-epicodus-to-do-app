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
  tasks: Task[] = [
    new Task('Do dishes', 'high'),
    new Task('Do homework', 'high'),
    new Task('Beat Tony', 'high'),
    new Task('Learn To code', 'high'),
    new Task('Lauch a website', 'high'),
    new Task('Lose weight', 'high'),
  ]
  
  addNewTask(){
    let createdTask: Task = new Task('', 'high');
    this.tasks.push(createdTask);
    this.selectedTask = createdTask;
  }
  editTask(task?: Task){
    if(task){
      this.selectedTask = task;
    }else{
      this.selectedTask = null;
    }
  }
}
