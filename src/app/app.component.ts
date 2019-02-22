import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-do';
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
  deleteTask(task: Task){
    let task_index = this.tasks.indexOf(task);
    this.tasks.splice(task_index, 1);
  }
  addNewTask(){
    let createdTask: Task = new Task('', 'high');
    this.tasks.push(createdTask);
    this.selectedTask = createdTask;
  }
}
