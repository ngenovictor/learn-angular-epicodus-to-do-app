import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-do';
  task = new Task('Do dishes', 'high');
  tasks: Task[] = [
    new Task('Do dishes', 'high'),
    new Task('Do homework', 'high'),
    new Task('Beat Tony', 'high'),
    new Task('Learn To code', 'high'),
    new Task('Lauch a website', 'high'),
    new Task('Lose weight', 'high'),
  ]
  colourTasks(task: Task): string{
    if(task.done){
      return "bg-info"
    }else{
      return "bg-danger"
    }
  }
  selectedTask: Task;
  editTask(task?: Task){
    if(task){
      this.selectedTask = task;
    }else{
      this.selectedTask = null;
    }
  }
}
