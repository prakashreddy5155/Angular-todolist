import { Component, OnInit } from '@angular/core';
import {TODO} from '../../TodoStructure'
import { TodoItemComponent} from '../todo-item/todo-item.component'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TODO[];
  todosBrowserItems: string | null; 

  constructor() { 
    this.todosBrowserItems = localStorage.getItem("todos");
    console.log('todosBrowserItems ',this.todosBrowserItems);

    if(this.todosBrowserItems == null) 
    {
      this.todos = [];
    }
    else 
    {
      this.todos = JSON.parse(this.todosBrowserItems);
    }
  }

  ngOnInit(): void {
  }

  handleDelete(todo: TODO) 
  {
    console.log('item to be deleted is ',todo);
    const indexOfItem =  this.todos.indexOf(todo);
    this.todos.splice(indexOfItem,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  handleCreateTodo(todo: TODO)
  {
    console.log('item to be added is ',todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  handleStrikeThrough(todo: TODO)
  {
    console.log('inside handlestrikeThrough ',todo);
    const indexOfItem =  this.todos.indexOf(todo);
    this.todos[indexOfItem].isActive = !this.todos[indexOfItem].isActive;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
