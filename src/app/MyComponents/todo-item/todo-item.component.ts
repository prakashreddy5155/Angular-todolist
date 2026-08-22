import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';
import {TODO} from '../../TodoStructure'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() Todo: TODO;
  @Output() todoDelete: EventEmitter<TODO> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<TODO> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(todo: TODO): void {

    this.todoDelete.emit(todo);
    console.log('on deleteCLick triggerd')
    
  }

  handleCheckBoxClick(todo: TODO): void {
    console.log('The handleCheckbox item of ',todo);
    this.todoCheckBox.emit(todo);
  }
}
