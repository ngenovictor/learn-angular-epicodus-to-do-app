import { Component, OnInit, Input } from '@angular/core';
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
  // we get the list of tasks from the parent component
  @Input() childTaskList: Task[];

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
    let task_index = this.childTaskList.indexOf(task);
    this.childTaskList.splice(task_index, 1);
  }

}
