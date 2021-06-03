import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  TaskList:Todo[] = [
    {
      task: "Buy 200 Bananas",
      completed: true
    },
    {
      task: "Tape bananas to all my neighbor's front doors",
      completed: true
    },
    {
      task: "Prepare a speech to address angry questions about bananas",
      completed: false
    },
    {
      task: "Find lawyer for this whole banana thing... i thought my neighbor's would like it",
      completed: false
    }
  ];

  getStatus(task:Todo):string{
    let status = "";
    
    if (task.completed === true) {
      status = "completed";
    }
    else
    {
      status = "incomplete";
    }

    return status;
  }

  completeTask(task:Todo){
    task.completed = true;
  }

  deleteTask(task:Todo){
    const taskIndex = this.TaskList.indexOf(task);
    this.TaskList.splice(taskIndex, 1);
  }

  addTask(form:NgForm){
    let newTask:Todo = {
      task: form.form.value.task,
      completed: false
    };
    
    this.TaskList.push(newTask);
  }

  // Search feature

  searchTerm:string = "";

  setSearchTerm(form: NgForm){
    this.searchTerm = form.form.value.filter;
  }

}
