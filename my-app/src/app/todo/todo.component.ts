import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos;
  text;

  constructor() {}
  
  ngOnInit() {

    this.todos = [
      {text: 'Go to work at 7AM'},
      {text: 'Pick up kids at 4PM'},
      {text: 'Go to sleep at 9PM'}
    ]
  }

  add(){
    this.todos.push({
      text:this.text
    })
  }
}
