import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tasks: Task[] = [
    new Task('Do dishes', 'high'),
    new Task('Do homework', 'high'),
    new Task('Beat Tony', 'high'),
    new Task('Learn To code', 'high'),
    new Task('Lauch a website', 'high'),
    new Task('Lose weight', 'high'),
  ]
  selectedTask: Task;
  colourTasks(task: Task): string{
    if(task.done){
      return "bg-info"
    }else{
      return "bg-danger"
    }
  }
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

}
