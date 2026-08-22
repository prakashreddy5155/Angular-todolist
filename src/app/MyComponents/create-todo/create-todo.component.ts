import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TODO } from 'src/app/TodoStructure';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  title: string;
  description: string;

  @Output() todoCreate: EventEmitter<TODO> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleCreateTodo() 
  {

    if(this.title == null || this.title == '')
    {
      console.log("Entered Empty");
      return;
    }

    const todoContent: TODO = {
      sno: '1',
      title: this.title,
      description: this.description,
      isActive: true
    } 

    this.todoCreate.emit(todoContent)

  }

}
